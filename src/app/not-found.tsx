import Link from "next/link";
import { TrafficCone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="grid h-screen grid-cols-1 place-content-center place-items-center">
      <div className="h-full text-center">
        <TrafficCone className="mx-auto mb-4 h-16 w-16 text-red-500" />
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Not found
        </h2>
        <p className="mb-4 leading-7">Could not find requested resource</p>
        <Link className={buttonVariants({ variant: "outline" })} href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
