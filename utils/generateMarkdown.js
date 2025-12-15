// utils/generateMarkdown.js (Unsolved Starter)

// TODO: Create helper functions for handling the license section of the README.
// You will likely need:
// - A function that returns a license badge based on which license is passed in
// - A function that returns a license link for the Table of Contents
// - A function that returns the license section text
//
// If there is no license (e.g., the user selects "None"), these helpers should
// return an empty string so that nothing is displayed in the README for license.

// Example stubs:
//
// function renderLicenseBadge(license) {
//   // TODO: If there is a license, return the badge markdown.
//   // If "None", return an empty string.
// }
//
// function renderLicenseLink(license) {
//   // TODO: If there is a license, return the Table of Contents link for License.
// }
//
// function renderLicenseSection(license) {
//   // TODO: If there is a license, return the License section text.
// }

// TODO: Complete this function to generate the README markdown string
// using the data collected from inquirer.
// The generated README should include sections for:
//
// - Title
// - License badge (if any)
// - Description
// - Table of Contents
// - Installation
// - Usage
// - License (if any)
// - Contributing
// - Tests
// - Questions (GitHub + email)
//
// Use the acceptance criteria and the professional README guide as a reference.


  

function renderLicenseBadge(license) {
  if (license === "None" || !license) {
    return '';
  }

  return `## License
  
  This project is licensed under the ${license} license.`;
}

function generateMarkdown(data) {
  return `# ${data.table}

${renderLicenseBadge(data.license)}

## Desription

${data.description}

## Table of Contents

* [Installation] (#installation)
* [Usage] (#usage)
${renderLicenseBadge(data.license)}
* [Contributing] (#contributing)
* [Tests] (#tests)
* [Questions] (#questions)

## Installation

To install necessary dependecies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage 

${data.usage}

${renderLicenseBadge(data.license)}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questoins about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}).

You can find more of my work at [${data.github}](https://github.com/${data.github}).
`;
};


module.exports = generateMarkdown;


