// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None'){
    return "";
  }
  if (license === 'MIT'){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }
  if (license === 'GPLv3'){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  }
  if (license === 'Apache2.0'){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None'){
    return "";
  }
  if (license === 'MIT'){
    return "(https://opensource.org/licenses/MIT)";
  }
  if (license === 'GPLv3'){
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license === 'Apache2.0'){
    return "(https://opensource.org/licenses/Apache-2.0)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    return "";
  }
  else {
      return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
  }
  
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents
  
  ### I   [Description](#description)
  ### II  [License](#license)
  ### III [Installation Instructions](#installation)
  ### IV  [Usage Instructions](#instructions)
  ### V   [Contribution Info](#contributions)
  ### VI  [Tests](#tests)
  ### VII [Questions](#questions)
  

  ============================================================================================================
  ## Description
  ${data.description}
  ## License
  ${renderLicenseSection(data.license)}
  ## Installation
  ${data.instructions}
  ## Instructions
  ${data.usage}
  ## Contributions
  ${data.contributions}
  ## Tests
  ${data.testInfo}
  ## Questions
  If you have questions feel free to contact at:
  - Github: ${data.gitUsername}
  - E-mail: ${data.eMail}
  ` ;


}

module.exports = generateMarkdown;
