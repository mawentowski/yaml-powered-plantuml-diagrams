import path from "path";
import url from "url";
import { generateDiagrams } from "./generate-utils.mjs"; // Import the shared utility function

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const diagramFolderPath = path.join(__dirname, "../generated-diagrams");
const diagramType = "svg"; // Change this to the desired diagram type

generateDiagrams(diagramFolderPath, diagramType); // Call the shared utility function
