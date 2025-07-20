import Section from "./section-animate";

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

interface GitHubContributionsServerProps {
  className?: string;
}

const GITHUB_CONTRIBUTIONS_API =
  "https://github-contributions-api.jogruber.de/v4";

const getContributionLevel = (count: number): string => {
  if (count === 0) return "bg-gray-100 dark:bg-gray-900/70";
  if (count <= 3) return "bg-green-200 dark:bg-green-800/40";
  if (count <= 6) return "bg-green-300 dark:bg-green-700/40";
  if (count <= 9) return "bg-green-400 dark:bg-green-600/40";
  return "bg-green-500 dark:bg-green-500/70";
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const fetchContributions = async (
  username: string,
): Promise<ContributionData> => {
  const response = await fetch(`${GITHUB_CONTRIBUTIONS_API}/${username}`, {
    next: { revalidate: 3600 },
  });


  if (!response.ok) {
    throw new Error(`Failed to fetch contributions for ${username}`);
  }

  const data = await response.json();

  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setDate(today.getDate() - 365);

  const filteredContributions = data.contributions.filter(
    (contribution: any) => {
      const contributionDate = new Date(contribution.date);
      return contributionDate >= oneYearAgo && contributionDate <= today;
    },
  );

  const weeks: ContributionWeek[] = [];
  let currentWeek: ContributionDay[] = [];

  filteredContributions.forEach((contribution: any, index: number) => {
    const date = new Date(contribution.date);
    const dayOfWeek = date.getDay();

    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push({ contributionDays: [...currentWeek] });
      currentWeek = [];
    }

    currentWeek.push({
      date: contribution.date,
      contributionCount: contribution.count,
    });

    if (index === filteredContributions.length - 1) {
      weeks.push({ contributionDays: [...currentWeek] });
    }
  });

  const totalLast365 = filteredContributions.reduce(
    (sum: number, contribution: any) => sum + contribution.count,
    0,
  );

  return {
    totalContributions: totalLast365,
    weeks: weeks,
  };
};

const combineContributions = (
  data1: ContributionData,
  data2: ContributionData,
): ContributionDay[] => {
  const combinedMap = new Map<string, number>();

  data1.weeks.forEach((week) => {
    week.contributionDays.forEach((day) => {
      combinedMap.set(
        day.date,
        (combinedMap.get(day.date) || 0) + day.contributionCount,
      );
    });
  });

  data2.weeks.forEach((week) => {
    week.contributionDays.forEach((day) => {
      combinedMap.set(
        day.date,
        (combinedMap.get(day.date) || 0) + day.contributionCount,
      );
    });
  });

  return Array.from(combinedMap.entries())
    .map(([date, contributionCount]) => ({ date, contributionCount }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

const getWeeksFromData = (
  contributionData: ContributionDay[],
): ContributionDay[][] => {
  const weeks: ContributionDay[][] = [];
  let currentWeek: ContributionDay[] = [];

  contributionData.forEach((day, index) => {
    const dayOfWeek = new Date(day.date).getDay();

    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }

    if (index === 0) {
      for (let i = 0; i < dayOfWeek; i++) {
        currentWeek.push({ date: "", contributionCount: 0 });
      }
    }

    currentWeek.push(day);

    if (index === contributionData.length - 1) {
      weeks.push([...currentWeek]);
    }
  });

  return weeks;
};

export default async function GitHubContributions({
  className,
}: GitHubContributionsServerProps) {
  try {
    const [personalData, workData] = await Promise.all([
      fetchContributions("facuperezm"),
      fetchContributions("fpmontalvo"),
    ]);

    const combinedContributions = combineContributions(personalData, workData);
    const totalContributions =
      personalData.totalContributions + workData.totalContributions;
    const weeks = getWeeksFromData(combinedContributions);

    return (
      <Section id="contact" delay={0.5}>
        <div className="mb-4">
          <h2 className="relative mb-3 scroll-m-20 text-2xl font-semibold tracking-tight">
            GitHub Contributions
          </h2>
          <p className="mb-4 text-[1.1rem] text-muted-foreground">
            {totalContributions} contributions in the last year between my personal
            and work accounts
          </p>
        </div>

        <div className="flex items-start gap-2 overflow-x-auto max-w-3xl scrollbar-hide justify-end relative">
          <div className="bg-gradient-to-r from-background from-5% to-100% to-transparent w-24 h-full absolute left-0 top-0"/>
          <div className="flex flex-col">
            <div
              className="mb-2 grid grid-flow-col gap-[0.24rem]"
              style={{ gridTemplateRows: "repeat(7, 1fr)" }}
            >
              {weeks.map((week, weekIndex) =>
                week.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`size-2.5 rounded-[2px] border-gray-200 dark:border-gray-600 ${
                      day.date
                        ? getContributionLevel(day.contributionCount)
                        : "border-transparent bg-transparent"
                    }`}
                    title={
                      day.date
                        ? `${
                            day.contributionCount
                          } contributions on ${formatDate(day.date)}`
                        : ""
                    }
                  />
                )),
              )}
            </div>
          </div>
        </div>
      </Section>
    );
  } catch (error) {
    return (
      <div className={`${className} text-red-500`}>
        <p>
          Error loading GitHub contributions:{" "}
          {error instanceof Error ? error.message : "Unknown error"}
        </p>
      </div>
    );
  }
}
