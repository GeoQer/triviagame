//create variables
var timer;
var question;
var answer;
var correct;
var wrong;
var countDown;
var submit;
var index;
var questions;
var intervalId;
var decrement;
var timeOut;
var ansCorrect;
var ansWrong;

//create game reset
function reset(){
    correct = 0;
    wrong = 0;
    index = 0;
    }

//create question timer (timerQues)
function question(){
    timer = 25;

    timerQues = setInterval(countDown, 1000);    
}

function countDown(){
    timer--;

    $("#timer").html("<h2>" + timer + "</h2>");

    if (timer === 0) {
        
        clearInterval(timerQues);

        $("#timer").html("<h1>Time's Up!</h1>");
        $("#display").html()

    }
}

//create timer display (countDown)

//create questions (objects?)

//create conditional statements

//create correct answer display

//create wrong answer display

//call game reset