// Set Global Variables

// HTML Elements
var landingPageEl = document.querySelector("#landingPage")
var timerEl = document.querySelector("#timer")
var questionEl = document.querySelector("#question")
var startButtonEl = document.querySelector("#startButton")
var option1El = document.querySelector("#option1")
var option2El = document.querySelector("#option2")
var option3El = document.querySelector("#option3")
var option4El = document.querySelector("#option4")
var finalScoreEl = document.querySelector(".final-score")
var goBackEl = document.querySelector("#goBack")
var clearEl = document.querySelector("#clear")
var questContainerEl = document.querySelector(".questionContainer")
var scoreDisplayEl = document.querySelector("#displayScore")
var thankYouEl = document.querySelector("#thankYou")
var clearHighScoresEl = document.querySelector("#clearHighScores")
var startOverEl = document.querySelector("#startOver")
var HighScoreListEl = document.querySelector("#HighScoreList")

// Function variables
var secondsLeft = 100;
var questionIndex = 0;
var highScoreArr = []

// Object with Questions and Answers and indicated correct answer
var questionsList = [
    {
        question: "What year was the first edition of Dungeons and Dragons published?",
        answers: ["1974", "1983", "1969", "1982",],
        correctAnswer: "1974",
    },

    {
        question: "What is the name of the God that Orcs worship?",
        answers: ["Lolth", "Tiamat", "Gruumsh", "Kurtulmak"],
        correctAnswer: "Gruumsh",
    },
    {
        question: "What was the first official campaign setting created for Dungeons and Dragons?",
        answers: ["The Forgotten Realms", "Birthright", "Ravenloft", "Greyhawk"],
        correctAnswer: "Greyhawk",
    },
    {
        question: "What kind of special breath does a silver dragon have?",
        answers: ["Fire Breath", "Cold Breath", "Acid Spray", "Lightning Breath"],
        correctAnswer: "Cold Breath",
    },
    {
        question: "What kind of undead is Count Strahd von Zarovich?",
        answers: ["A Revenant", "A Vampire", "A Mummy Lord", "A Lich"],
        correctAnswer: "A Vampire",
    },
];


// Function that triggers start of quiz (remove landing page, start the timer, remove the "questionContainer" class to reveal questions and run a for loop to propegate question array)

function startQuizSelected() {
    startTimer();
    landingPageEl.remove();
    questContainerEl.classList.remove("questionContainer");
    questionEl.textContent = questionsList[0].question;
    for (var i = 0; i < 4; i++) {
        var answer = document.querySelector("#option" + (i + 1));
        answer.textContent = questionsList[questionIndex].answers[i];
    }

}

// Function to deduct 10 seconds and alert user to wrong answer
function handleWrongAnswerSelected() {
    secondsLeft -= 10;
    alert("Wrong! -10 Points");
}

// Option 1 selected: run if statement that triggers wrong answer function if the user selection is wrong
function option1Selected() {
    if (option1El.textContent !== questionsList[questionIndex].correctAnswer) {
        handleWrongAnswerSelected();
    }
    nextQuestion();
}
// Option 2 selected: run if statement that triggers wrong answer function if the user selection is wrong
function option2Selected() {
    if (option2El.textContent !== questionsList[questionIndex].correctAnswer) {
        handleWrongAnswerSelected();
    }
    nextQuestion();
}
// Option 3 selected: run if statement that triggers wrong answer function if the user selection is wrong
function option3Selected() {
    if (option3El.textContent !== questionsList[questionIndex].correctAnswer) {
        handleWrongAnswerSelected();
    }
    nextQuestion();
}
// Option 4 selected: run if statement that triggers wrong answer function if the user selection is wrong
function option4Selected() {
    if (option4El.textContent !== questionsList[questionIndex].correctAnswer) {
        handleWrongAnswerSelected();
    }
    nextQuestion();
}
// function that replaces question objects with next in array

function nextQuestion() {

    questionIndex++;

    if (questionIndex > questionsList.length - 1) {
        endQuiz();
        return;
    }
    // Display Questions and Answers
    questionEl.textContent = questionsList[questionIndex].question;
    for (var i = 0; i < questionsList.length + 1; i++) {
        var answer = document.querySelector("#option" + (i + 1));
        answer.textContent = questionsList[questionIndex].answers[i];
    }
}


function startTimer() {
    setInterval(function () {
        if (secondsLeft > 0) {
            secondsLeft--;
            timerEl.textContent = secondsLeft;
        } else {
            endQuiz()
        }
    }, 1000)
}


// Ends the Quiz, displays the User score, prompts for initials
function endQuiz() {
    questContainerEl.classList.add("questionContainer")
    var initals = prompt("Please enter your initials", initals)
    finalScoreEl.classList.remove("final-score")
    thankYouEl.textContent = "Thank you for playing " + initals + "!"
    scoreDisplayEl.textContent= "Your score is " + secondsLeft
    
    var HighScore = {}
    HighScore[initals] = HighScore.init
    HighScore[secondsLeft] = HighScore.score
    highScoreArr.push({HighScore})
    console.log(highScoreArr)
    
    for (var i = 0; i < highScoreArr.length+1; i++) {
        var newScore = HighScoreListEl.createElement("li")
        newScore.textContent = highScoreArr[i]
        HighScoreListEl.appendChild(newScore)
    }
}
// Event Listeners for User Click
startButtonEl.addEventListener("click", startQuizSelected)

option1El.addEventListener("click", option1Selected)
option2El.addEventListener("click", option2Selected)
option3El.addEventListener("click", option3Selected)
option4El.addEventListener("click", option4Selected)
