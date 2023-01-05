# Cloud Uploader Package

Generic Package to Upload Files to Different Cloud Services.

## Installation

1. Clone the repository `git clone https://github.com/jayaprakash-optisol/cloud-uploader.git`
2. Navigate to the project directory: `cd cloud-uploader`
3. Install the dependencies: `npm install`

## Description

You can Add new services in `src/services` directory and commit the code to main branch.
The github action will run the workflow and bump your latest package version automatically.

## Usage

Install the package using: `npm install @{your-username}/cloud-uploader`

`import {FileUploadHandler} from '@{your-username}/cloud-uploader'`;

`FileUploadHandler(provider:string, files: any[])` takes two parameters `
