// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSections = {
    'MIT': `
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
        `,
    // Add other license sections here if needed
  };
  if (license in licenseSections) {
    return licenseSections[license];
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${renderLicenseSection(data.license)}

## Questions
For any questions, please contact [${data.github}](https://github.com/${data.github}) via email at ${data.email}.
`;
}

module.exports = generateMarkdown;
