// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const {gitUsername, eMail, title,description,license,liveLink,instructions,usage,contributions,testInfo}= data;
function generateMarkdown(data) {
  return
  `# ${data.title}
  
  ##Table of Contents
  
  I   [Description](#description)
  II  [License](#license)
  III [Installation Instructions](#installation)
  IV  [Usage Instructions](#instructions)
  V   [Contribution Info](#contributions)
  VI  [Tests](#tests)
  VII [Questions](#questions)
  
  ##Description
  ${info.description}
  ##License
  ##Installation
  ${info.instructions}
  ##Contributions
  ${info.contributions}
  ##Tests
  ${info.testInfo}
  ##Questions
  Contacts
  Github: ${info.gitUsername}
  E-mail: ${info.eMail}
  ` ;


}

module.exports = generateMarkdown;
