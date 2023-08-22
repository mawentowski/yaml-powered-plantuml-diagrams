import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import Ajv from "ajv";

const ajv = new Ajv({ allErrors: true }); // Create an instance of Ajv

// Get the directory path of the current script
const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const rootDir = path.resolve(scriptDir, ".."); // Go up one level from script directory

const schemaDir = path.join(rootDir, "schemas"); // Directory containing the schema files
const dataDir = path.join(rootDir, "data"); // Directory containing the YAML data files

console.log(scriptDir);
console.log(schemaDir);
console.log(dataDir);

const schemaFileNames = fs.readdirSync(schemaDir);
console.log(schemaFileNames);
schemaFileNames.forEach((schemaFileName) => {
  const schemaFilePath = path.join(schemaDir, schemaFileName);
  console.log(schemaFilePath);
  const schemaContent = fs.readFileSync(schemaFilePath, "utf8");
  console.log(schemaContent);
  const schema = yaml.load(schemaContent);
  console.log(schema);
  const validate = ajv.compile(schema);

  const dataFileName = schemaFileName.replace(".schema.yaml", ".yaml");
  const dataFilePath = path.join(dataDir, dataFileName);
  const dataContent = fs.readFileSync(dataFilePath, "utf8");
  const data = yaml.load(dataContent);

  const isValid = validate(data);

  if (!isValid) {
    console.error(`Validation errors in ${dataFileName}:`);
    console.error(validate.errors);
  } else {
    console.log(`${dataFileName} is valid.`);
  }
});
