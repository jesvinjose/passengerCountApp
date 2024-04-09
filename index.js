// document.getElementById("count-el").innerText=5

// cnt+k+c or cnt+? to comment
// let firstBatch=5
// let secondBatch=7
// let count=firstBatch+secondBatch;
// console.log(count);

//Using functions to write less code
// function countdown(){
//     for(let i=5;i>0;i--){
//         console.log(i);
//     }
// }

// countdown();

//The onClick event listener

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

//camelCase
let countEl = document.getElementById("count-el"); //pass in argument

// the above technique is called working with the DOM: Document Object Model
//It is how we can use JS to modify a website
//Document in DOM: we interact with the HTML document
//Object in DOM: document keyword in JS is of datatype: object
//Model : representation in JS file--->countEl is the model of real element: h2#count-el in html

// console.log(document);
// console.log(countEl);

let count = 0;
function increment() {
  // console.log("The button was clicked");
  //Change this to use the plus equal technique you have learned
  count += 1;
  //display the count
  // console.log(count);
  // document.getElementById("count-el").innerText=count;
  countEl.textContent = count;
}

//Create a function save(), which logs out the count when it is called

let arr = [];
let countStr;
function save() {
  //Create a variable that contains both the count and the dash separater, i.e."12- "
  //Render the variable in the saveEl using innerText
  //Make sure to not delete the existing content of the paragraph
  let saveEl = document.getElementById("save-el");
  // arr.push(count)
  // saveEl.innerText=arr.join("-");
  if (countStr) {
    countStr += " - " + count;
  } else {
    countStr = " " + count;
  }

  console.log(countStr);
  saveEl.textContent = countStr;
  // console.log(count);
  count=0;
  countEl.textContent = count;
}

console.log("Let's count people on the subway!");

// document.getElementById("increment-btn").addEventListener("click",handleSubmit)
// let count=0;
// function handleSubmit(){
//     console.log("function called");
//     count++;
//     document.getElementById("count-el").innerText=count;
// }

//1. create a variable myAge and set its value to your age
//2. log the myAge variable to the cosole.
// console.log(myAge);
// let myAge=33;
// console.log(myAge);

//1. Create 2 variables, myAge and and humanDogRatio
//2. Multiply the two together and store the result in myDogAge
//3. Log myDogAge to the console

// let myAge=32;
// let humanDogRatio=7;
// let myDogAge=myAge*humanDogRatio;
// console.log(myDogAge);

// let count=5;
// console.log(count);

//1. Create a variable, bonusPoints. Initialize it as 50. Increase it to 100;
//2. Decrease it down to 25, and then finally increase it to 70
//3. console.log the value after each step

// let bonusPoints=50;
// console.log(bonusPoints);
// bonusPoints=bonusPoints+50;
// console.log(bonusPoints);
// bonusPoints=bonusPoints-75;
// console.log(bonusPoints);
// bonusPoints=bonusPoints+45;
// console.log(bonusPoints);

//Create a function (you decide the name) that logs out the number 42 to the console
//Call/invoke the function

// function logs(){
//     console.log(42);
// }
// logs();

// let lap1=34;
// let lap2=33;
// let lap3=36;

//Create a function that logs out the sum of all the lap times

// function lapSum(){
//     let sum=lap1+lap2+lap3;
//     console.log(sum);
// }

// lapSum();

// let lapsCompleted=0;

//Create a function that increments the lapsCompleted variable with one
//Run it three times

// function incLapsComp(){
//     lapsCompleted++;
// }

// for(let i=0;i<3;i++){
//     incLapsComp();
// }

// console.log(lapsCompleted);

//What is a string?

//They are written with in quotes (either single or double quotes)

//Write your first string variable

// let username='per';
// console.log(username);

//Create a variable, message that stores the string:"You have three new notifications"

// let message="You have three new notifications";
// console.log(`${message} ${username} haven't seen`);
// console.log(message+", "+username+"!");  //adding + concatenates strings

//Create a variable, messageToUser, that contains the message we have logged

// let messageToUser=message+", "+username+"!";
// console.log(messageToUser);

//Create 2 variables, name and greeting. The name variable should store your name,
//and the greeting should store e.g. "Hi, my name is "

//Create a 3rd variable, myGreeting, that concatenates the two strings
//Log myGreeting to the console

// let name="Jesvin";
// let greeting="Hi, my name is ";

// let myGreeting=greeting+name;

// console.log(myGreeting);

//Strings vs Numbers

// let name=42;
// let greeting="Hi, my name is ";

// let myGreeting=greeting+name;
// console.log(myGreeting);
// console.log(typeof(myGreeting));

//In wrestling game btn the string and a number string will always win.

// let points=4;
// let bonusPoints="10";
// let totalPoints1=bonusPoints+points;
// console.log(totalPoints1);   //104

// let totalPoints2=points+bonusPoints;
// console.log(totalPoints2);  //410

//Tell the outputs

// console.log(4+5);       //9
// console.log("2"+"4");   //24
// console.log("5"+1);     //51
// console.log(100+"100"); //100100

//Use plus equal for count

//Create the save feature
