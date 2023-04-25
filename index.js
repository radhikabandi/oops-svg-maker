const inquirer = require('inquirer');
const fs = require('fs');
const {Circle,Triangle,Rectangle}= require('./lib/shapes')

function svgString(text, color, shape, shareBackgroundColor) {
  let svgStr = "";

  if (shape === 'Circle') {

    const shape=new Circle(shareBackgroundColor);
    return svgStr = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${shape.render()}
  <text x="150" y="130" font-size="40" text-anchor="middle" fill="${color}">${text}</text>
</svg>`
  }

  if (shape === 'Triangle') {
    const shape=new Triangle(shareBackgroundColor);
    return svgStr = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
</svg>`
  }

  if (shape === 'Square') {
    const shape=new Rectangle(shareBackgroundColor);
    return svgStr = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>

</svg>`
  }

}

function writeToFile(answers) {
  const text = answers.title;
  const color = answers.color;
  const shape = answers.shape;
  const shareBackgroundColor = answers.shapeBackgroundColor;

  const svgStr = svgString(text, color, shape, shareBackgroundColor);
  console.log('here', svgStr);

  fs.writeFile('logo.svg', svgStr, (err) => {
    err ? console.log(err) : console.log('Generate logo.svg');
  })
}


function promptUser() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What text would you like to add to logo to display? (Enter up to three characters)',
      validate: title => {
        if (title) {
          return true;
        } else {
          console.log('Enter your text!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'color',
      message: 'What color would you like to have for text',
      validate: color => {
        if (color) {
          return true;
        } else {
          console.log('Enter your color!');
          return false;
        }
      }
    },

    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like to have for text',
      choices: ["Triangle", "Square", "Circle"],
      validate: shape => {
        if (shape) {
          return true;
        } else {
          console.log('Enter shape!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'shapeBackgroundColor',
      message: 'What color would you like to it for the image',
      choices: ["Triangle", "Square", "Circle"],
      validate: shapeBackgroundColor => {
        if (shapeBackgroundColor) {
          return true;
        } else {
          console.log('Enter shapeBackgroundColor!');
          return false;
        }
      }
    }

  ]).then((response) => {
    console.log('here', response);
    writeToFile(response)

  })
}


promptUser();