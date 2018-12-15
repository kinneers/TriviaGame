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
    var gameInterval;
    
    var questions = [
        {
        question: "Which animal poops cubes?",
        number: "1",
        correctAnswer: "Wombat",
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
            $('#mainContent').append('<button>' + questions[questionCount].distractors[i] + '</button>');
        }

        $('button').on('click tap', function() {
            if ($(this).text() === questions[questionCount].correctAnswer) {
                correct++;
                checkAnswer(questions[questionCount].correctAnswer)
            } else {
                incorrect++;
                checkAnswer(questions[questionCount].correctAnswer);
            }
        })
        
        function checkAnswer(answer) {
                clearInterval(gameInterval);
                $('#mainContent').empty();
                //Show picture
                $('#mainContent')
                .append(
                    `<div class="answerDiv">The correct answer is ${answer}</div>`
                    //Add image here ``
                )
                if (questionCount + 1 === questions.length) {
                    setTimeout(function(){
                        $('#mainContent').empty();
                        $('#mainContent').append(`<div>This will be the report</div>`);
                    }, 2000)
                    clearInterval(gameInterval);
                   
                } else {
                    questionCount++;
                    setTimeout(populateQuestion, 2000);
                }
        }

        //This function will force the correct answer to show if nothing has been clicked within 20 seconds
        function showCorrect() {
            incorrect ++;
            checkAnswer(questions[questionCount].correctAnswer);
        }

        gameInterval = setInterval(showCorrect, 20000); //Sets a 20 second pause before the correct answer is shown 
        
    }

    //Change from directions screen to question 1- set to 2 seconds just while working out logic
    setTimeout(populateQuestion, 2000);
/*

var timeoutID = scope.setTimeout(function[, delay, param1, param2, ...]);
var timeoutID = scope.setTimeout(function[, delay]);
var timeoutID = scope.setTimeout(code[, delay]);

You'll create a trivia game that shows only one question until the player answers it or their time runs out.

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