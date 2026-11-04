import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: true,
  args: [
    "--no-sandbox",
    "--use-gl=swiftshader",
    "--enable-unsafe-swiftshader",
    "--ignore-gpu-blocklist",
  ],
});

const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
});

const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (err) => errors.push("PAGEERROR: " + err.message));
page.on("requestfailed", (req) =>
  errors.push("REQFAIL: " + req.url() + " " + req.failure()?.errorText)
);

await page.goto("http://127.0.0.1:4173/", {
  waitUntil: "networkidle",
  timeout: 60000,
});

console.log("TITLE", await page.title());

try {
  await page.waitForSelector(".explore", { timeout: 30000 });
  console.log("INTRO READY");
} catch {
  console.log("INTRO NOT READY");
}

console.log("BODY", await page.evaluate(() => document.body.innerText.slice(0, 600)));
console.log(
  "FLIGHT STYLE",
  await page.evaluate(() => document.querySelector(".flight")?.getAttribute("style") || "none")
);
console.log("BOOT COUNT", await page.locator(".boot").count());

await page.screenshot({ path: "/tmp/opencode/shots/flight-intro.png" });

const start = page.locator(".explore");
if (await start.count()) {
  await start.click();
  await page.waitForTimeout(3500);
  await page.screenshot({ path: "/tmp/opencode/shots/flight-started.png" });

  await page.evaluate(() => {
    const scroller = Array.from(document.querySelectorAll("div")).find((el) => {
      const style = getComputedStyle(el);
      return (
        (style.overflowY === "auto" || style.overflowY === "scroll") &&
        el.scrollHeight > el.clientHeight + 100
      );
    });
    if (scroller) {
      scroller.scrollTop = (scroller.scrollHeight - scroller.clientHeight) / 7;
      console.log("SCROLLED", scroller.scrollTop, scroller.scrollHeight);
    } else {
      console.log("NO SCROLLER");
    }
  });

  await page.waitForTimeout(5000);
  await page.screenshot({ path: "/tmp/opencode/shots/flight-chapter.png" });
  console.log("CARD VISIBLE", await page.locator(".chapter-card.is-visible").count());
  console.log(
    "CARD TITLE",
    await page.evaluate(() => document.querySelector(".chapter-card__title")?.textContent || "none")
  );
}

console.log("ERRORS", JSON.stringify(errors.slice(0, 20), null, 2));
await browser.close();
