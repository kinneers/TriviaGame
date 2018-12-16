/*
Developer: Sarah Kinneer
Title: Trivia Game
Description: Homework 5 (JavaScript + jQuery Timers)
Date: 12-11-2018
*/

//globals
var correct = 0;
var incorrect = 0;
var questionCount = 0;
var gameInterval;
var questions = [
    {
    question: "Which animal poops in cubes?",
    number: "1",
    correctAnswer: "Wombat",
    distractors: ["Ferret", "Platypus", "Wombat", "Quokka"],  //Be sure to make these display in random order
    image: '<iframe src="https://giphy.com/embed/eW7AXuZ4w2sk8" width="480" height="384" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/funny-chewing-wombat-eW7AXuZ4w2sk8">via GIPHY</a></p>'
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
    function playGame() {
        $('#restart').hide();
        //Writes the question and answer choice buttons to the page
        function populateQuestion() {
            $('#mainContent').text("Question " + questions[questionCount].number);
            var stem = $('<p>');
            stem.text(questions[questionCount].question);
            $('#mainContent').append(stem);
            for (var i = 0; i < questions[questionCount].distractors.length; i++) {
                $('#mainContent').append('<button class="distractors">' + questions[questionCount].distractors[i] + '</button>');
            }

            $('.distractors').on('click tap', function() {
                //Determines whether user chose correct answer
                if ($(this).text() === questions[questionCount].correctAnswer) {
                    correct++;
                    checkAnswer(questions[questionCount].correctAnswer)
                } else {
                    incorrect++;
                    checkAnswer(questions[questionCount].correctAnswer);
                }
            })
            
            //This function shows the correct answer after each question has been answered or displayed for 20 seconds
            function checkAnswer(answer) {
                    clearInterval(gameInterval);
                    $('#mainContent').empty();
                    //Show picture
                    $('#mainContent')
                        .append(
                            `<div class="answerDiv">The correct answer is: ${answer}</div>
                            ${questions[questionCount].image}`
                    )
                    if (questionCount + 1 === questions.length) {
                        setTimeout(function(){
                            $('#mainContent').empty();
                            $('#mainContent')
                                .append(`<p>Thanks for playing!</p>
                                        <p>Your Score: </p>
                                        <p>Correct Answers: ${correct}</p>
                                        <p>Incorrect Answers: ${incorrect}</p>`);
                            $('#restart').show();
                            }, 5000) 
                        clearInterval(gameInterval);
                    } else {
                        questionCount++;
                        setTimeout(populateQuestion, 5000);
                    }
            }

            //This function will force the correct answer to show if nothing has been clicked within 20 seconds
            function showCorrect() {
                incorrect ++;
                checkAnswer(questions[questionCount].correctAnswer);
            }
            //Sets a 20 second pause before the correct answer is shown when no answer is chosen
            gameInterval = setInterval(showCorrect, 20000);
        }
        //Change from directions screen to question 1- set to 2 seconds just while working out logic
        setTimeout(populateQuestion, 5000);
    }

    playGame();
    
    $('#restart').on('click tap', function() {
        correct = 0;
        incorrect = 0;
        questionCount = 0;
        $('#mainContent').text("Prepare yourself to try again.  Remember: you only have 20 seconds to answer each question!");
        playGame();
    })
})