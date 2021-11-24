

var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What's Your name? ");

console.log("Welcome " + userName + " to DO YOU KNOW Kunal ");
console.log("Type the appropriate option i.e a or b or c");
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer)
{
  console.log("You Are Right..!");
  score = score + 1;
}
else
{
  console.log("You Are Wrong..!");
}
console.log("Current score : ", score)
console.log("-------------------");
}
var questions =
[
  {
    question:"1. Where does Kunal live ? a. Mumbai b. Pune c. Nagpur ",
    answer : "c"
  },
  {
    question : "2. What's Kunal's favourite food ?  a. Sandwich b. Burger c. Noodels ",
    answer : "b"
  },
  {
    question : "3. What's his favourite sport ? a. Football b.Cricket c. Card Games ",
    answer : "a"
  },
  {
    question : "4. Which is Kunal's favourite subject ? a. Maths b. programming c. Physics ",
    answer : "b"
  },  
  {
    question : "5. Which is Kunal's favourite Tourist spot in India ? a. Manali b. Kashmir c. Kerala ",
    answer : "a"
  }
  
];
for (var i = 0; i<questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("There You go , You have scored : ", score);
console.log("Send a screen-shot of your score");
  


