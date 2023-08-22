# YAML-Powered PlantUML Diagrams

============

Introducing YAML-Powered PlantUML Diagrams: Seamlessly generate diagrams with YAML and PlantUML integration.

- [YAML-Powered PlantUML Diagrams](#yaml-powered-plantuml-diagrams)
  - [About the project](#about-the-project)
  - [Features](#features)
  - [Get started](#get-started)
    - [Prerequisites](#prerequisites)
    - [Install the project](#install-the-project)
    - [Generate a diagram from YAML](#generate-a-diagram-from-yaml)
    - [View the generated diagram](#view-the-generated-diagram)
  - [Project structure](#project-structure)
    - [`diagrams-source`](#diagrams-source)
    - [`data`](#data)
    - [`schemas`](#schemas)
    - [`scripts`](#scripts)
    - [`generated-diagrams`](#generated-diagrams)
    - [`libs`](#libs)
  - [Usage](#usage)
    - [Manually generate diagrams](#manually-generate-diagrams)
  - [Roadmap](#roadmap)
  - [Contributing](#contributing)
  - [License](#license)
  - [Built With](#built-with)
  - [Contact](#contact)

## About the project

YAML-Powered PlantUML Diagrams is a JavaScript project that utilizes the Node.js runtime environment that allows you to create diagrams by defining data in YAML files and then using scripts to automatically generate PlantUML diagrams based on that data. By employing YAML and schemas, the project aims to provide a more manageable and centralized way to create and maintain diagrams while ensuring consistency and adherence to deel free to mix and match efined rules.

This approach offers the following benefits:

- **Simplicity**: Create diagrams by focusing on data, simplifying the process.
- **Consistency**: Ensure uniformity across diagrams by centralizing data definition.
- **Rule Enforcement**: Define schemas to enforce structure and guidelines.
- **Automation**: Automate diagram generation for increased efficiency.
- **Flexibility**: Adapt the provided scripts to your specific needs.

Feel free to dive into the example YAML files and scripts to explore the technical aspects and customize them as required.

Currently, the project only supports generating class diagrams from YAML-defined classes. However, support for other diagrams will be added in the future, such as [PlantUML-C4](https://github.com/plantuml-stdlib/C4-PlantUML) diagrams.

## Features

- **Dynamic Diagram Generation**: By storing data in YAML and generating diagrams programmatically, the project provides a dynamic and efficient way to create diagrams.

- **Centralized Data**: YAML data files serve as a single source of truth for diagram elements, making maintenance and updates easier.

- **Schema Validation**: Schemas in the `schemas` directory ensure that data adheres to a predefined structure, reducing errors and ensuring consistency.

- **PlantUML CLI**: The project leverages the PlantUML CLI for generating diagrams, offering various diagram types and customization options.

## Get started

### Prerequisites

Before you begin using Generate Diagrams Test, make sure you have the necessary dependencies installed.

- [NPM](https://nodejs.org/en): Ensure you have Node.js and NPM installed. You can download them from the official Node.js website.

- [Java](https://www.java.com/en/download/): PlantUML requires Java to function properly. You can download the latest version of Java from the official Java website.

- [Graphviz](https://plantuml.com/graphviz-dot) (Optional): While not mandatory, installing Graphviz can enhance the visual quality of diagrams. You can choose to install it from the Graphviz official website.

- [PlantUML](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml) extension for Visual Studio Code (optional). This extension allows you to view generated diagrams within the VS Code preview window.

### Install the project

To get started with the project:

1. Clone this repository to your local machine using the following command:

```bash
git clone <repository_url>
```

1. Navigate to the project directory and install the required dependencies by running:

```bash
npm install
```

### Generate a diagram from YAML

From the terminal, ensure you are in the root of the project, and run the following, and run:

```bash
npm run generate-all
```

This script will generate the diagram 'code' from the same `online-store.yaml` file located in `diagrams-source`, as well as YAML data defined in the `data` folder, and place it in a `.puml` file located in the `generated-diagrams` folder. Then, it will generate an SVG diagram from this code and output it to the same folder.

### View the generated diagram

If you are using the [PlantUML](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml) extension for Visual Studio Code, you can view the generated diagram by opening the `.puml` file, and open the preview pane in VS Code.

Or, from your file system (outside your text editor), you can double-click the `.svg` file to open it in the browser.

## Project structure

The project has the followinng structure:

```txt
root
├─ data                            # Contains YAML data files
├─ diagrams-source                 # Contains source YAML files for diagrams
├─ generated-diagrams              # Generated PlantUML diagrams
├─ libs                            # External libraries used in the project
├─ schemas                         # Contains schema definitions
├─ scripts                         # Scripts used for generating diagrams and validation
```

Now, let's look at these folders in more detail.

### `diagrams-source`

In the `diagrams-source` folder, you can find the YAML files that define the structure of your diagrams. For example, the`online-store.yaml` file contains information about relationships between different diagram elements.

### `data`

The `data` folder contains YAML data files used as input to generate diagrams. It includes files like `customer.yaml`, `order.yaml`, and `product.yaml`, which contain the necessary data elements for generating diagrams.

### `schemas`

The `schemas` folder holds schema files, which define the structure that the YAML data files must adhere to. For instance, `customer_update.schema.yaml` specifies the required properties and structure for the customer update data.

### `scripts`

The `scripts` folder contains scripts for generating diagrams and validating schemas. `generate-class-diagram.mjs` and other scripts automate the process of creating diagrams. `validate-schemas.mjs` is responsible for checking if the data in the YAML files conforms to the defined schemas.

### `generated-diagrams`

The `generated-diagrams` folder contains the source PlantUML code files, `.puml`, and their corresponding 'output' files, such as SVG files. The scripts process the PlantUML code and create diagrams, which at present supports class diagrams.

### `libs`

The `libs` directory contains the PlantUML library, specifically `plantuml-1.2023.10.jar`, which the scripts use to generate diagrams.

## Usage

Sample files used to generate a class diagram are included in the project, centered around the theme of an 'online store'. You can use these files as templates.

1. Define your diagram elements using YAML data files in the `data` directory.
2. Create or update the diagram structure in the `diagrams-source` directory using YAML files.
3. Define schemas for data files in the `schemas` directory to ensure data consistency.
4. Within `generate-class-diagram.mjs`, for the `classSampleDataPath` variable, add the path to the source YAML file that defines the structure of your diagram:

```javascript
const classSampleDataPath = path.join(
  __dirname,
  "../diagrams-source/{{your-file}}.yaml"
);
```

5. Run the scripts specified in `package.json` to generate diagrams based on the provided data and structure. For example:
   - Run `npm run generate-all` to generate a PlantUML file `.puml` and the diagram image (such as a `.svg`). Optionally, you can run `generate-plantuml` and `generate-diagram` individually to achieve the same result.
   - Run `validate-schemas` to check if the YAML data files located in the `data` folder adhere to their corresponding schemas located in the `schemas` folder.
6. Check the `generated-diagrams` directory for the generated diagrams in `.puml` and `.svg` formats.

### Manually generate diagrams

You can optionally manually generate diagrams using the PlantUML CLI.

1. Navigate to the root directory of the project (if not already there).
1. Open a terminal and run the following command to generate diagrams:

```java
java -jar libs/plantuml-1.2023.10.jar -tsvg <path-to-your-diagram.puml>
```

This command will produce an SVG diagram in the `generated-diagrams` folder.

You can optionally pass an output folder path by adding an `-o` argument. Ensure the output folder path is relative to the folder containing the `.puml` file.

## Roadmap

- [ ] Integrate [PlantUML-C4](https://github.com/plantuml-stdlib/C4-PlantUML) to support infrastructure diagrams.
- [ ] Make element schema unique by specifying required attribute names per element.
- [ ] Add support for complex attributes and relationships in class diagrams.

## Contributing

I value and appreciate contributions from the community. Whether you want to report a bug, suggest an improvement, or contribute code changes, we welcome your efforts. If you encounter any issues or have questions, please feel free to open an issue. To contribute code changes, fork the repository, create a new branch for your changes, and submit a pull request. Your contributions help make this project better for everyone. I appreciate your support!

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [PlantUML](https://plantuml.com/) - Diagramming tool
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language
- [NPM](https://www.npmjs.com/) - Package manager
- [Markdown](https://www.markdownguide.org/) - Lightweight markup language
- [Graphviz](https://plantuml.com/graphviz-dot) - Optional: Required for certain diagram rendering

## Contact

- Mark Wentowski (project owner) - [mawentowskigit@gmail.com](mawentowskigit@gmail.com)
