import path from "path";
import fs from "fs";
import { loadYamlFile, generatePlantUMLCode } from "./shared-utils.mjs";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// Load YAML data from diagrams-source/OnlineStore.yaml
const classSampleDataPath = path.join(
  __dirname,
  "../diagrams-source/online-store.yaml"
);
const classSampleData = loadYamlFile(classSampleDataPath);

// Generate PlantUML code
const plantUMLCode = generatePlantUMLCode(
  classSampleData.elements,
  classSampleData.relationships
);

// Determine the output file name
const inputFileNameWithoutExt = path.basename(classSampleDataPath, ".yaml");
const outputPath = path.join(
  __dirname,
  "../generated-diagrams",
  `${inputFileNameWithoutExt}.puml`
);

// Save PlantUML code to generated directory
fs.writeFileSync(outputPath, plantUMLCode);

console.log(`PlantUML diagram saved to ${outputPath}`);
