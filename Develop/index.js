const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

//const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your location?",
      name: "location"
    },
    {
        type: "input",
        message: "write a brief bio:",
        name: "bio"
      },
    {
      type: "input",
      message: "enter your linkedin url:",
      name: "linkedin"
    },
    {
        type: "input",
        message: "enter your github url:",
        name: "github"
      }

  ])
  .then(function(response) {
      console.log(response)
    function createHtml(answer){
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        <h1> ${answer.name} </h1>
        <h2> ${answer.location} </h2>
        <p> ${answer.bio} </p>
        <p> ${answer.linkedin} </p>
        <p> ${answer.github} </p>

            
        </body>
        </html>
        
        `
    };
    console.log({
        response
    })
    const html = createHtml(response)
    writeFileAsync("index.html", html)
    .then(function(){
        console.log("Success")

    })
    .catch(function(err){
        console.log(err)
    })


  
  });
