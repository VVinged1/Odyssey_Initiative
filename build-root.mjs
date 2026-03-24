import { copyFileSync, cpSync, rmSync } from "node:fs";

rmSync("assets", { force: true, recursive: true });
cpSync(".build/assets", "assets", { recursive: true });
copyFileSync(".build/app.template.html", "index.html");
rmSync(".build", { force: true, recursive: true });
