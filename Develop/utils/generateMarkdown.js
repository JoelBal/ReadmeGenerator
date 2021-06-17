// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "apache license 2.0"){
    return `![apache license](https://img.shields.io/badge/license-apache%20license%202.0-green)`
  }
  else if(license === "GNU General Public License v3.0"){
    return `![GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-orange)`
  }
  else if (license === "MIT License"){
    return `![MIT License](https://img.shields.io/badge/MIT%20License-%22MIT%20License%22-blue)`
  }
  else {
    return ``
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "apache license 2.0"){
    return ``
  }
  else if(license === "GNU General Public License v3.0"){
    return ``
  } 
  else if (license === "MIT License"){
    return ``
  }
  else {
    return ``
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   if(license === "apache license 2.0") {
    return
   }
   else if(license === "GNU General Public License v3.0"){
    return ``
  } 
  else if (license === "MIT License"){
    return ``
  }
   else {
   return``
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## description
${data.description}
## Installation
${data.Installation}
## Usage
${data.Usage}
## Constributing
${data.Constributing}
## Tests
${data.Tests}
## Email
${data.Email}
## githubUsername
${data.githubUsername}
## license
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}


`;
}

module.exports = generateMarkdown;
