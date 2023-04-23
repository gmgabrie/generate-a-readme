const fs = require('fs');

// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'none') {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// function that returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'GNU_GPLv3') {
    return `https://www.gnu.org/licenses/lgpl-3.0-standalone.html`
  }
  if (license === 'Mozilla_Public') {
    return `https://www.mozilla.org/en-US/MPL/2.0` 
  }
  if (license === 'Apache_Public') {
    return `https://www.apache.org/licenses/LICENSE-2.0` 
  }
}

// function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'none') {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license badge at the top.`
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  Feel free to contact me via the following links with any questions about this application.
  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
