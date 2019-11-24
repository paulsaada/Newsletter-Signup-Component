# Newsletter Signup Component

![demo-gif](https://user-images.githubusercontent.com/26423160/69489089-7661b780-0e41-11ea-9df9-3504f5d124ac.gif)

[Live Demo](https://nifty-jang-8d4b7c.netlify.com/)

This project was originally part of a coding assessment that I once took part in that I later thought would make a great case study. I was given a Sketch file of a multi-step form and told to reproduce a 1:1 pixel-perfect web app from it that was responsive, fully-functional, and written in ReactJS. The end goal of the project was to have a form that took user inputs and put them in an object and to `console.log` that object when the form is submitted.

## Case Study  🔎

Upon the completion of this assessment, I was able to demonstrate my ability in and understanding of:
* Creating functional, dynamic, and reusable ReactJS components
* Field Validation
* Atomic design in ReactJS applications
* BEM principles
* Responsiveness
* Code Documentation
* Live UI Documentation
* Continuous Deployment
* Git Version Control

## Project Requirements  ⚛️
#### The full breakdown for those who'd like to know

1. Must use either React JS or React Native to complete the project 
2. Must build and run in either a web browser or device simulator 
3. May use third party libraries to complete this task 
4. Organize your component into atoms, molecules and one singular organism in a way that shows you have a good understanding of atomic design principles and reuse
5. The component will have 4 responsive breakpoints as shown in Sketch file:
	1. Mobile 
	2. Tablet Portrait 
	3. Tablet Landscape
	4. Desktop
6. The component will have 5 states: 
	1. Email address collection 
	2. Email address collection with error message 
	3. Full name collection 
	4. Full name collection with error message
	5. Congratulations! message
7. Form validation will be as follows: 
	1. Email Address field: Required and must be valid email
	2. First Name field: Required 
	3. Last Name field: Required 
8. Component will not change states while invalid fields exist 
9. Form will not actually POST anywhere. Just console log the object that holds {email, first, last } values and toggle to ‘congratulations’ state.
10. Use Storybook to create an interactive documentation guide for:
	1. Each form state
	2. Each reusable component
	3. Each reusable container

## Interactive Documentation Guide  📙

![screenshot-of-documentation-guide](https://user-images.githubusercontent.com/26423160/69489388-7e235b00-0e45-11ea-9dab-86c9bf0b6641.png)

You can explore the interactive documentation guide and test each reusable component in isolation [here.](https://jovial-shockley-68dfcb.netlify.com)

## Built With 🔨

* [ReactJS](https://reactjs.org/) - The framework used
* [Storybook](https://storybook.js.org/) - UI component explorer used to create interactive documentation guide


## Authors  💻

* **Paul Saada** ([Portfolio](https://paulsaada.com))
