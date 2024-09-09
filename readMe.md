# INSTRUCTIONS
- Each folder in this repo contains a lambda function with it's own package.json file.
- To run the function, cd into the folder and npm install the dependencies in the package.json file for that folder
- run `node index.js` to run function.

# ADD NEW FUNCTION
- Create new folder with functions name
- cd into folder and run `npm init -y` to generate package.json file.
- create index.js file that will contain the function
- After writing function, compress all files and folders (including node_modules) within the function's folder into a zip file.
- Create new function in AWS lambda console and upload the zip file.
- Remember to cd out of the folder before pushing changes to github

# EDIT AND DEPLOY OLD FUNCTION
To edit and deploy a lamba function.
- Make your changes to the function.
- In the functions folder, Compress all the files and folders (including node_modules) into a zip file called 'deploy.zip'.
- Upload zip file in lambda console.
- Remember to cd out of the folder before pushing changes to github
