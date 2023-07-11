# Chat GPT desktop client for Mac

This is a simple desktop client for accessing ChatGPT easily in your Mac

## Prerequisites

- Node.js and npm

## Installation

First, you need to install Node.js and npm. Visit the [official Node.js website](https://nodejs.org/) to download the installer for your specific OS. npm comes bundled with Node.js.

You can verify the installation by typing these commands in your terminal:

```bash
node -v
npm -v
```

These will print the installed versions of Node.js and npm, respectively.

## Setup

After installing Node.js and npm, clone this repository to your local machine. 

```bash
git clone <repository-url>
```

Then navigate into the directory:

```bash
cd <your-project-directory>
```

Install the necessary npm packages with:

```bash
npm install
```

This will install Electron and other necessary packages defined in the `package.json` file.

## Running the application

You can start the Electron application with the following command:

```bash
npm start
```

## Building the application

To build the application for distribution, you can use the `electron-builder` tool which was installed during the setup phase. Run the following command:

```bash
npm run dist
```

This will generate the packaged application in the `dist` folder in your project directory. The output will include files ready for distribution.

To install the app in your Mac, go to your project folder -> dist -> and find the .dmg file

### Additional Information

For more information about Electron, refer to the [official Electron documentation](https://electronjs.org/docs). For more information about `electron-builder`, refer to the [electron-builder documentation](https://www.electron.build/).