import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Function to generate diagrams
export function generateDiagrams(diagramFolderPath, diagramType) {
  const diagramFiles = fs.readdirSync(diagramFolderPath);

  diagramFiles.forEach((diagramFile) => {
    if (path.extname(diagramFile) === ".puml") {
      const inputPath = path.join(diagramFolderPath, diagramFile);
      const outputPath = diagramFolderPath;
      execSync(
        `java -jar libs/plantuml-1.2023.10.jar -t${diagramType} ${inputPath} -o ${outputPath}`
      );
    }
  });

  console.log("Diagrams generated successfully.");
}
