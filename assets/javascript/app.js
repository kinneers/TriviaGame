/*
Developer: Sarah Kinneer
Title: Trivia Game
Description: Homework 5 (JavaScript + jQuery Timers)
Date: 12-11-2018
*/

$(document).ready(function() {
    var correct = 0;
    var incorrect = 0;
    var questionCount = 0;
    
    var questions = [
        {
        question: "Which animal poops cubes?",
        number: "1",
        correctAnswer: "Wombats",
        distractors: ["Ferret", "Platypus", "Wombat", "Quokka"],  //Be sure to make these display in random order
        image: ""
        },
        {
        question: "This is the second question",
        number: "2",
        correctAnswer: "Second Correct Answer",
        distractors: ["Second Correct Answer", "Distractor 1", "Distractor 2", "Distractor 3"],
        image: ""
        }
    ];

    //Writes the question and answer choice buttons to the page
    function populateQuestion() {
        $('#mainContent').text("Question " + questions[questionCount].number);
        var stem = $('<p>');
        stem.text(questions[questionCount].question);
        $('#mainContent').append(stem);
        for (var i = 0; i < questions[questionCount].distractors.length; i++) {
            $('#mainContent').append('<button>' + questions[questionCount].distractors[i]);
        }
        

        function questionTimer() {
            $('#mainContent').on('click tap', $('<button>'), function() {
                console.log("Working so far");
            })
        
        }
        setInterval(questionTimer, 20000);
        questionTimer();
    }

    setTimeout(populateQuestion, 5000);
/*

var timeoutID = scope.setTimeout(function[, delay, param1, param2, ...]);
var timeoutID = scope.setTimeout(function[, delay]);
var timeoutID = scope.setTimeout(code[, delay]);

timeoutID is a numerical ID, which can be used in conjunction with clearTimeout() to cancel the timer.
scope refers to the Window interface or the WorkerGlobalScope interface.
function is the function to be executed after the timer expires.
code (in the alternate syntax) is a string of code to be executed.
delay is the number of milliseconds by which the function call should be delayed. If omitted, this defaults to 0.

You'll create a trivia game that shows only one question until the player answers it or their time runs out.

Questions can be written as objects:

Displaying each question and distractors will be done using jQuery

if (selection === correctAnswer) {
    show a screen congratulating them for choosing the right option (image). After a few seconds, display the next question -- do this without user input.
    correct++;
}
else if (selection !== correctAnswer) {
    If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
    incorrect++;
    Wait a few seconds, then show the next question.
}
else {
    If the player runs out of time, tell the player that time's up and display the correct answer.
    incorrect--;
    Wait a few seconds, then show the next question.
}

On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

function restart() {
    correct = 0;
    incorrect = 0;
    //Clear old content and show question 1
}
*/
})