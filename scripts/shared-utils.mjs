import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const scriptDir = path.dirname(new URL(import.meta.url).pathname); // Declare scriptDir

export function loadYamlFile(filePath) {
  const absoluteFilePath = path.resolve(scriptDir, filePath);
  const fileContent = fs.readFileSync(absoluteFilePath, "utf8");
  return yaml.load(fileContent);
}

export function generatePlantUMLCode(elements, relationships) {
  let plantUMLCode = "@startuml\n";

  // Generate code for class definitions
  elements.forEach((element) => {
    if (element.type === "class" && element.file) {
      const classFilePath = path.resolve(scriptDir, "..", element.file);
      const classData = loadYamlFile(classFilePath);

      // Generate class definition code
      plantUMLCode += `class ${classData.name} {\n`;

      // Loop through class attributes and add them to PlantUML code
      classData.attributes.forEach((attribute) => {
        plantUMLCode += `  ${attribute.name}: ${attribute.type}\n`;
      });

      plantUMLCode += "}\n";
    }
  });

  // Generate code for relationships
  relationships.forEach((relationship) => {
    plantUMLCode += `${relationship.from} --> ${relationship.to} : "${relationship.type}"\n`;
  });

  // Close the PlantUML code
  plantUMLCode += "@enduml\n";

  return plantUMLCode;
}
