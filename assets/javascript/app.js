/*
Developer: Sarah Kinneer
Title: Trivia Game
Description: Homework 5 (JavaScript + jQuery Timers)
Date: 12-11-2018
*/

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

$(document).ready(function() {
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
                        $('#mainContent')
                            .append(`<div>
                                    <p>Thanks for playing!</p>
                                    <p>Your Score: </p>
                                    <p>Correct Answers: ${correct}</p>
                                    <p>Incorrect Answers: ${incorrect}</p>
                                    <button id="restart">Try Again!</button>
                                    </div>`);  //Backticks are fun! :)
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
})