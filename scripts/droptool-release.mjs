#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const isWindows = process.platform === "win32";

function runCapture(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: "utf8",
    shell: isWindows,
  });

  return {
    status: result.status ?? 0,
    stdout: result.stdout || "",
    stderr: result.stderr || "",
  };
}

function exists(relPath) {
  return fs.existsSync(path.join(root, relPath));
}

function read(relPath) {
  try {
    return fs.readFileSync(path.join(root, relPath), "utf8");
  } catch {
    return "";
  }
}

function log(title) {
  console.log(`\n=== ${title} ===`);
}

function ok(msg) {
  console.log(`[OK] ${msg}`);
}

function warn(msg) {
  console.log(`[WARN] ${msg}`);
}

function fail(msg) {
  console.log(`[FAIL] ${msg}`);
}

const requiredPaths = [
  "app",
  "components",
  "public",
  "package.json",
  "next.config.ts",
  ".gitignore",
];

const importantFiles = [
  "app/page.tsx",
  "app/premium/page.tsx",
  "app/downloads/page.tsx",
  "app/faq/page.tsx",
  "app/tos/page.tsx",
  "app/privacy/page.tsx",
  "app/contact/page.tsx",
  "app/layout.tsx",
  "app/globals.css",
];

const outdatedTerms = [
  "Pro Monthly",
  "Pro Yearly",
  "Founders Lifetime",
];

const expectedTerms = [
  "DropTool Coach Lite",
  "DropTool Coach",
  "DropTool Full",
  "1.21.x",
  "https://discord.gg/A3YhJA5n3W",
];

let hasBlockingFailure = false;

log("Project structure");
for (const p of requiredPaths) {
  if (exists(p)) {
    ok(`Found ${p}`);
  } else {
    fail(`Missing ${p}`);
    hasBlockingFailure = true;
  }
}

log("Important routes/files");
for (const p of importantFiles) {
  if (exists(p)) {
    ok(`Found ${p}`);
  } else {
    warn(`Missing ${p}`);
  }
}

log("Product naming scan");
const scanTargets = [
  "app/page.tsx",
  "app/premium/page.tsx",
  "app/downloads/page.tsx",
  "app/faq/page.tsx",
  "README.md",
];

let combined = "";
for (const file of scanTargets) {
  combined += "\n" + read(file);
}

for (const term of outdatedTerms) {
  if (combined.includes(term)) {
    warn(`Outdated term found: ${term}`);
  } else {
    ok(`No ${term}`);
  }
}

for (const term of expectedTerms) {
  if (combined.includes(term)) {
    ok(`Found expected term: ${term}`);
  } else {
    warn(`Expected term not found: ${term}`);
  }
}

log("package.json");
if (!exists("package.json")) {
  fail("package.json missing");
  hasBlockingFailure = true;
} else {
  const pkg = JSON.parse(read("package.json"));
  const deps = {
    ...(pkg.dependencies || {}),
    ...(pkg.devDependencies || {}),
  };

  const needed = ["next", "react", "react-dom", "tailwindcss", "framer-motion", "lucide-react"];
  for (const dep of needed) {
    if (deps[dep]) {
      ok(`Dependency present: ${dep}`);
    } else {
      warn(`Dependency missing: ${dep}`);
    }
  }
}

log("Build checks");

const lint = runCapture("npm", ["run", "lint"]);
if (lint.status === 0) {
  ok("npm run lint passed");
} else {
  fail("npm run lint failed");
  console.log(lint.stdout);
  console.log(lint.stderr);
  hasBlockingFailure = true;
}

const build = runCapture("npm", ["run", "build"]);
if (build.status === 0) {
  ok("npm run build passed");
} else {
  fail("npm run build failed");
  console.log(build.stdout);
  console.log(build.stderr);
  hasBlockingFailure = true;
}

log("Git status");
const gitCheck = runCapture("git", ["rev-parse", "--is-inside-work-tree"]);
if (gitCheck.status === 0 && gitCheck.stdout.includes("true")) {
  ok("Git repo detected");
} else {
  warn("Git repo not detected");
}

const gitName = runCapture("git", ["config", "user.name"]).stdout.trim();
const gitEmail = runCapture("git", ["config", "user.email"]).stdout.trim();

if (gitName && gitEmail) {
  ok(`Git identity set: ${gitName} <${gitEmail}>`);
} else {
  warn('Git identity missing. Run: git config user.name "Louis"');
  warn('Git identity missing. Run: git config user.email "your-email@example.com"');
}

log("Summary");
if (hasBlockingFailure) {
  fail("Release checker found blocking issues.");
  process.exit(1);
} else {
  ok("Release checker finished with no blocking issues.");
}
