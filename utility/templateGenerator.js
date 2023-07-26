const renderLicenseImage = (license) => {
    if (license !== "none") {
        return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
};

const renderValidScreenShots = (screenshot) => {
    if (screenshot) {
        return `## Screenshot
        ![alt-text](${screenshot})`;
    }
    return "";
};

const renderDeployedLink = (link) => {
    if (link) {
        return `## Deployed Application URL
        ${link}`;
    }
    return "";
};

const renderContributors = (contributors) => {
    if (contributors) {
        return `## Contributors
        ${contributors}`;
    }
    return "";
};

const renderTestData = (testData) => {
    if (testData) {
        return `## Testing
        ${testData}`;
    }
    return "";
};

function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseImage(data.license)}
  ## Description
  ${data.description}
  ${renderDeployedLink(data.link)}
  ${renderValidScreenShots(data.screenshot)}
  ## Table of Contents
  * [Features](#features)
  * [Languages & Dependencies](#languagesanddependencies)
  * [How to Use This Application](#HowtoUseThisApplication)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Features
  ${data.features}
  ## Languages & Dependencies
  ${data.require}
  ## How to Use This Application:
  ${data.usage}
  ${renderContributors(data.contributors)}
  ${renderTestData(data.test)}
  ## Questions
  Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
  `;
}

module.exports = generateMarkdown;
