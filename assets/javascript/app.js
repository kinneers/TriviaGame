/*
Developer: Sarah Kinneer
Title: Trivia Game
Description: JavaScript + jQuery Timers
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
    distractors: ["Ferret", "Platypus", "Wombat", "Quokka"],
    image: '<iframe src="https://giphy.com/embed/eW7AXuZ4w2sk8" width="480" height="384" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/funny-chewing-wombat-eW7AXuZ4w2sk8">via GIPHY</a></p>'
    },
    {
    question: "Where does a shrimp keep its heart?",
    number: "2",
    correctAnswer: "In its head",
    distractors: ["In its head", "In its stomach", "In its partner", "In its tail"],
    image: '<iframe src="https://giphy.com/embed/9QgdMczZy2u1q" width="480" height="351" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/forrest-gump-movie-9QgdMczZy2u1q">via GIPHY</a></p>'
    },
    {
    question: "How many noses do slugs have?",
    number: "3",
    correctAnswer: "Four",
    distractors: ["One", "Four", "Eight", "Ten"],
    image: '<iframe src="https://giphy.com/embed/lma5aujULEkKs" width="480" height="351" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lma5aujULEkKs">via GIPHY</a></p>'
    },
    {
    question: "Which of these animals are the deadliest?",
    number: "4",
    correctAnswer: "Mosquitos",
    distractors: ["Sharks", "Mosquitos", "Lions", "Dogs"],
    image: '<iframe src="https://giphy.com/embed/8LfaJlBxiSq2c" width="480" height="367" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/1995-mosquito-8LfaJlBxiSq2c">via GIPHY</a></p>'
    },
    {
    question: "What is a rhinoceros' horn made of?",
    number: "5",
    correctAnswer: "Hair",
    distractors: ["Hair", "Cartilage", "Skin", "Bone"],
    image: '<iframe src="https://giphy.com/embed/2wN5OlLBhBzc4" width="480" height="268" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/rhinoceros-2wN5OlLBhBzc4">via GIPHY</a></p>'
    },
    {
    question: "What is the longest amount of time a snail can sleep?",
    number: "6",
    correctAnswer: "3 Years",
    distractors: ["3 Hours", "3 Days", "3 Months", "3 Years"],
    image: '<iframe src="https://giphy.com/embed/iQ6yGuMhPGWhW" width="480" height="257" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nicki-minaj-anaconda-iQ6yGuMhPGWhW">via GIPHY</a></p>'
    },
    {
    question: "What animal's fingerprints look so close to human fingerprints that they have been confused at crime scenes?",
    number: "7",
    correctAnswer: "Koalas",
    distractors: ["Gorillas", "Red Pandas", "Koalas", "Chimpanzees"],
    image: '<iframe src="https://giphy.com/embed/IWy60FY7KKOOc" width="480" height="354" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/koala-walking-IWy60FY7KKOOc">via GIPHY</a></p>'
    },
    {
    question: "How far can cats jump?",
    number: "8",
    correctAnswer: "7 times their tail length",
    distractors: ["3 times their tail length", "5 times their tail length", "7 times their tail length", "11 times their tail length"],
    image: '<iframe src="https://giphy.com/embed/6n8kX73OlwSIM" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-running-6n8kX73OlwSIM">via GIPHY</a></p>'
    },
    {
    question: "What is the closest living animal to the Tyrannosaurus Rex?",
    number: "9",
    correctAnswer: "Chickens",
    distractors: ["Chickens", "Crocodiles", "Eagles", "Komodo Dragons"],
    image: '<iframe src="https://giphy.com/embed/Zg7clvqHE3CdW" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/chicken-spinning-disco-Zg7clvqHE3CdW">via GIPHY</a></p>'
    },
    {
    question: "How do blue jays keep other birds away?",
    number: "10",
    correctAnswer: "They mimic hawk calls",
    distractors: ["They beat them with their wings", "They fly in circles", "They pick up rocks in their beaks and throw them", "They mimic hawk calls"],
    image: '<iframe src="https://giphy.com/embed/ogQzWZFbejR28" width="480" height="229" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/heart-group-theory-ogQzWZFbejR28">via GIPHY</a></p>'
    },
];

$(document).ready(function() {
    function playGame() {
        $('#restart').hide();

        //Writes the question and answer choice buttons to the page
        function populateQuestion() {
            resetCountdown();
            startCountdown();            
            $('.questionStem').text("Question " + questions[questionCount].number);
            var stem = $('<p>');
            stem.text(questions[questionCount].question);
            $('.questionStem').append(stem);
            for (var i = 0; i < questions[questionCount].distractors.length; i++) {
                $('.questionStem').append('<button class="distractors">' + questions[questionCount].distractors[i] + '</button>');
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
                    stopCountdown();
                    $('.questionStem').empty();
                    //Show picture
                    $('.questionStem')
                        .append(
                            `<div class="answerDiv">The correct answer is: ${answer}</div>
                            ${questions[questionCount].image}`
                    )
                    //Displays total score after last question
                    if (questionCount + 1 === questions.length) {
                        setTimeout(function(){
                            $('.questionStem').empty();
                            $('.questionStem')
                                .append(`<p>Thanks for playing!</p>
                                        <p>Your Score: ${(correct/(correct+incorrect))*100}%</p>
                                        <p>Correct Answers: ${correct}</p>
                                        <p>Incorrect Answers: ${incorrect}</p>`);
                            $('#restart').show();
                            }, 5000) 
                        clearInterval(gameInterval);
                        $("#display").empty();
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
            gameInterval = setInterval(showCorrect, 30000);
        }
        //Change from directions screen to question 1- set to 2 seconds just while working out logic
        setTimeout(populateQuestion, 5000);
    }

    //Creates and displays the 30-second countdown timer (or resets) where the following functions are called in the code above
    var clockRunning = false;
    var time = 30;
    function resetCountdown() {
        time = 30;
        //Changes the "display" div to "00:00."
        $("#display").text('00:30');
    }
    function startCountdown() {
        //Uses setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
            intervalId = setInterval(count, 1000);
        }
    }
    function stopCountdown() {
        //Uses clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId);
        clockRunning = false;
    }
    function count() {
        time--;
        var newTime = timeConverter(time);
        $("#display").text(newTime);
    }
    function timeConverter(t) {
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
    }

    playGame();
    
    $('#restart').on('click tap', function() {
        correct = 0;
        incorrect = 0;
        questionCount = 0;
        $('.questionStem').text("Prepare yourself to try again.  Remember: you only have 30 seconds to answer each question!");
        playGame();
    })
})