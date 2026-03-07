import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const sourceDir = path.join(projectRoot, "locales");
const requiredTopLevelKeys = [
  "code",
  "label",
  "dir",
  "template",
  "messages",
  "seriesLabels",
  "windDirectionLabels",
  "windStrengthLabels",
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function listLocaleFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".json") && file !== "index.json")
    .sort((a, b) => a.localeCompare(b));
}

function readLocale(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function validateLocale(locale, fileName) {
  for (const key of requiredTopLevelKeys) {
    if (!(key in locale)) {
      throw new Error(`${fileName} is missing required key: ${key}`);
    }
  }

  if (!locale.messages || typeof locale.messages !== "object") {
    throw new Error(`${fileName} has invalid messages object`);
  }
  if (!locale.seriesLabels?.tide || !locale.seriesLabels?.wind) {
    throw new Error(`${fileName} must define seriesLabels.tide and seriesLabels.wind`);
  }
  if (!Array.isArray(locale.windDirectionLabels?.short) || locale.windDirectionLabels.short.length !== 8) {
    throw new Error(`${fileName} must define 8 short wind direction labels`);
  }
  if (!Array.isArray(locale.windDirectionLabels?.full) || locale.windDirectionLabels.full.length !== 8) {
    throw new Error(`${fileName} must define 8 full wind direction labels`);
  }
  if (!Array.isArray(locale.windStrengthLabels) || locale.windStrengthLabels.length !== 6) {
    throw new Error(`${fileName} must define 6 wind strength labels`);
  }
}

ensureDir(sourceDir);
const sourceFiles = listLocaleFiles(sourceDir);
if (sourceFiles.length === 0) {
  throw new Error("No locale JSON files found in locales/");
}

const locales = sourceFiles.map((file) => {
  const locale = readLocale(path.join(sourceDir, file));
  validateLocale(locale, file);
  return locale;
});

const defaultLocale = locales.find((locale) => locale.code === "en-US") ? "en-US" : locales[0].code;
const localeIndex = {
  defaultLocale,
  locales: locales.map((locale) => ({
    code: locale.code,
    label: locale.label,
    dir: locale.dir,
    template: locale.template,
  })),
};

for (const locale of locales) {
  fs.writeFileSync(path.join(sourceDir, `${locale.code}.json`), `${JSON.stringify(locale, null, 2)}\n`);
}
fs.writeFileSync(path.join(sourceDir, "index.json"), `${JSON.stringify(localeIndex, null, 2)}\n`);

console.log(`Validated ${locales.length} locale files and rebuilt locales/index.json.`);
