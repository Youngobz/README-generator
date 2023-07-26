# Project README Generator

This is a Node.js application that generates a professional README.md file based on user input. The user is prompted with a series of questions, and the responses are used to populate the content of the README.md file.

https://github.com/Youngobz/README-generator/assets/133522178/638b2c0e-0e86-4c9c-a51b-52a33eb04012

## Getting Started

Before using this application, make sure you have Node.js installed on your machine.

## Installation

To install the necessary packages, run the following command in the terminal:
<li>npm install

## Usage

To use the application, run the following command in the terminal:

<li>Copy code
<li>node index.js

### The application will prompt you with a series of questions that you need to answer. These questions include:

<li>Project Title: Please name your project.
<li>Description: Please describe the purpose and functionality of this project.
<li>Screenshot: Please provide the relative path to the image you want to use as the screenshot.
<li>Deployed Application URL: Please provide a URL where users can access your deployed application.
<li>License: Please select a license applicable to this project from the provided choices (MIT, APACHE2.0, Boost1.0, MPL2.0, BSD2, BSD3, none).
<li>Dependencies: List any project dependencies here.
<li>Features: List some cool features about this project here.
<li>Languages & Technologies: State the languages or technologies associated with this project.
<li>GitHub Username: Write your GitHub username.
<li>Email Address: Provide a valid email address.
<li>Contributors: Please list any contributors (use GitHub usernames).
<li>Testing: Provide a walkthrough of required tests if applicable.

After answering all the questions, the application will generate a README.md file with the provided information and save it in the current working directory.

## Template Generator

The template generator is responsible for creating the content of the README.md file based on the user's responses. It uses the provided data to construct the following sections:

<li>Project Title
<li>License badge (if applicable)
<li>Description
<li>Deployed Application URL (if provided)
<li>Screenshot (if provided)
<li>Table of Contents
<li>Features
<li>Languages & Dependencies
<li>How to Use This Application
<li>Contributors (if provided)
<li>Testing (if provided)
<li>Questions
<li>Features
<li>Languages & Dependencies
<li>How to Use This Application
<li>Contributors (if provided)
<li>Testing (if provided)
<li>Questions
