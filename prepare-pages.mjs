import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";

const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "VVinged1";
const repo = process.env.GITHUB_REPOSITORY_NAME ?? "odyssey-initiative-tracker-main";
const baseUrl = `https://${owner}.github.io/${repo}`;

const manifest = JSON.parse(readFileSync("manifest.json", "utf8"));

manifest.homepage_url = `${baseUrl}/`;
manifest.icon = `${baseUrl}/logo.png?v=${manifest.version}`;
manifest.action.icon = `${baseUrl}/icon.svg?v=${manifest.version}`;
manifest.action.popover = `${baseUrl}/index.html?v=${manifest.version}`;

rmSync("site", { recursive: true, force: true });
mkdirSync("site", { recursive: true });

copyFileSync("index.html", "site/index.html");
copyFileSync("icon.svg", "site/icon.svg");
copyFileSync("logo.png", "site/logo.png");
writeFileSync("site/manifest.json", `${JSON.stringify(manifest, null, 2)}\n`);
writeFileSync("site/.nojekyll", "");

if (existsSync("assets")) {
  cpSync("assets", "site/assets", { recursive: true });
}
