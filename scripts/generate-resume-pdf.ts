import { chromium } from "playwright";
import { spawn, type ChildProcess } from "child_process";
import { resolve } from "path";

const PORT = 3000;
const RESUME_URL = `http://localhost:${PORT}/resume`;
const OUTPUT_PATH = resolve(__dirname, "../public/facundo-perez-montalvo-resume.pdf");

async function isServerRunning(): Promise<boolean> {
  try {
    const res = await fetch(RESUME_URL);
    return res.ok;
  } catch {
    return false;
  }
}

async function waitForServer(timeout = 30_000): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (await isServerRunning()) return;
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Dev server did not start within ${timeout / 1000}s`);
}

async function main() {
  let devServer: ChildProcess | null = null;

  const serverAlreadyRunning = await isServerRunning();
  if (!serverAlreadyRunning) {
    console.log("Starting dev server...");
    devServer = spawn("pnpm", ["dev"], {
      cwd: resolve(__dirname, ".."),
      stdio: "pipe",
    });
    await waitForServer();
    console.log("Dev server ready.");
  }

  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.emulateMedia({
      colorScheme: "light",
      reducedMotion: "reduce",
    });

    await page.goto(RESUME_URL, { waitUntil: "networkidle" });

    await page.pdf({
      path: OUTPUT_PATH,
      format: "A4",
      printBackground: true,
    });

    console.log(`PDF saved to ${OUTPUT_PATH}`);
    await browser.close();
  } finally {
    if (devServer) {
      devServer.kill();
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
