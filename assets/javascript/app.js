$("document").ready(function(){
//create variables
var timer;
var question;
var answer;
var qIndex;
var correct;
var wrong;
var qCountDown;
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
    qIndex = 0;
    }

//create question timer (timerQues)
function question(){
    timer = 25;

    timerQues = setInterval(qCountDown, 1000);    
}

function qCountDown(){
    timer--;

    $("#timer").html("<h2>" + timer + "</h2>");

    if (timer === 0) {
        
        clearInterval(timerQues);

        timesUp();

    }
}

//create answer timer (timerAns)
function answer(){
    timer = 10;

    timerAns = setInterval(aCountDown, 1000);
}

function aCountDown(){
    timer--;

    console.log(timer);

    if (timer === 0) {
        qIndex++;
        clearInterval(timerAns);

        question();
    }
}
//create timer display (countDown)

//create questions (objects?)

//create conditional statements

//create correct answer display

//create wrong answer display

//call game reset
reset();
});