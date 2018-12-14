/*
Developer: Sarah Kinneer
Title: Trivia Game
Description: Homework 5 (JavaScript + jQuery Timers)
Date: 12-11-2018
*/

$(document).ready(function() {
    var correct = 0;
    var incorrect = 0;
    var intervalId;
    

    //An idea that may or may not be helpful
    var windowTimeout = setTimeout(function() {
        twentySeconds();
       }, 20000);

/*
You'll create a trivia game that shows only one question until the player answers it or their time runs out.

Questions can be written as objects:
question1 {
    question: "The question stem goes here",
    correctAnswer: "Correct Answer Text" (must match correct in string below),
    distractors: ["Correct Answer Text", "Distractor 1", "Distractor 2", "Distractor 3"],  //Be sure to make these display in random order
    image: Image to display with correct answer
}

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