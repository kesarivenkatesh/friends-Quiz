var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bgYellow('Welcome to Venkatesh friends quiz\n'));

qlist = [{
  question: chalk.rgb(15, 100, 204)("What is my Fav. color?\n\tA. Blue\n\tB. Green\n\tC. Black\n"),
  answer: "B"
}, {
  question: chalk.rgb(15, 100, 204)("What is my Fav. Tiffin?\n\tA. Idly\n\tB. Dosa\n\tC. Chapathi\n"),
  answer: "B"
}, {
  question: chalk.rgb(15, 100, 204)("Where is my hometown?\n\tA. Guntur\n\tB. Vijayawada\n\tC. Vizag\n"),
  answer: "B"
}, {
  question: chalk.rgb(15, 100, 204)("How many languages do I know?\n\tA. <3\n\tB. >=3\n"),
  answer: "B"
}, {
  question: chalk.rgb(15, 100, 204)("Who is my Fav. Hero?\n\tA. chiranjeevi\n\tB. PSPK\n\tC. Prabhas\n"),
  answer: "C"
}, {
  question: chalk.rgb(15, 100, 204)("Which of following I like the most?\n\tA. Watching a movie\n\tB. Having a talk with others\n\tC. Eating\n"),
  answer: "B"
}, {
  question: chalk.rgb(15, 100, 204)("Which one of the items I dont own?\n\tA. Bike\n\tB. Laptop\n\tC. Mobile\n"),
  answer: "A"
}, {
  question: chalk.rgb(15, 100, 204)("What\'s my nick name?\n\tA. venky\n\tB. venkatesh\n\tC. don\'t know\n"),
  answer: "A"
}
];

var score = 0;

function askQuestion(question)
{
  var uAns = readlineSync.keyIn(question.question, {limit: 'ABC'});
  if(uAns.toUpperCase() === question.answer.toUpperCase())
  {
    score += 1;
    console.log(chalk.green('correct, Your score: ' + score));
  }
  else
  {
    console.log(chalk.redBright('wrong one!!, Your score: ' + score));
  }
}
var b = false, finish = false;
while(1)
{
    for(var i=0; i<qlist.length; i++)
    {
      var direction = readlineSync.keyIn('\npress e to exit, any other letter to continue\n ', {limit: '$<A-Z>'});
      if(direction == 'e')
      {
        console.log(chalk.inverse('exited'));
        b = true;
        break;
      }
      askQuestion(qlist[i]);
      if(i == qlist.length-1)
      {
        finish = true;
      }
    }
    if(b || finish){
      console.log(chalk.cyan('\n\nThank You for Playing :)'));
      break;
    }
}