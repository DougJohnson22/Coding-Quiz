// TODO:Create a start button
// TODO:Click function start, starts timer
// TODO:Click function, start quiz and display first question
// TODO:4 questions total, one at a time
// TODO:Answers will act as the button itself
// TODO:If question is answered correctly, move on to next question, else, -10 on the timer, move on
// TODO:If timer hits 0 before the end, your score is 0, else score = timer

// Set Global Variables

var playerOptionsEl = document.querySelector(".playerOptions")
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
var questionCounterEl = document.querySelector("#question-counter")
var questionContainerEl = document.querySelector("#questionContainer")

var secondsLeft = 100;
var questionIndex = 0;
var questionList = [
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

function startQuizSelected() {
    startTimer();
    homepageEl.remove();
    questContainerEl.classList.remove("questionContainer");
    questionEl.textContent = questionsList[0].question;
    for (var i = 0; i < 4; i++) {
        var answer = document.querySelector(".option" + (i + 1));
        answer.textContent = questionsList[questionIndex].answers[i];
    }
}

function handleWrongAnswerSelected() {
    secondsLeft -= 10;
    alert("Wrong! -10 Points");
}

function option1Selected() {
    if (option1El.textContent !== questionsList[questionIndex].correctAnswer) {
        handleWrongAnswerSelected();
    }
    nextQuestion();

function option2Selected() {
    if (option2El.textContent !== questionsList[questionIndex].correctAnswer) {
        handleWrongAnswerSelected();
    }
    nextQuestion();

function option3Selected() {
    if (option3El.textContent !== questionsList[questionIndex].correctAnswer) {
        handleWrongAnswerSelected();
    }
    nextQuestion();

function option4Selected() {
    if (option4El.textContent !== questionsList[questionIndex].correctAnswer) {
        handleWrongAnswerSelected();
    }
    nextQuestion();

// function that runs to input second question in place of the first

function nextQuestion() {

    questionIndex++;

    if (questionIndex > questionsList.length - 1) {
      endQuiz();
      return;}

    questionEl.textContent = questionsList[questionIndex].question;
    for (var i = 0; i < questionsList.length + 1; i++) {
      var answer = document.querySelector(".option" + (i + 1));
      answer.textContent = questionsList[questionIndex].answers[i];
    }
  }
  
  // Display results

  // Stop timer when this function runs
  // Local storage
  // Hide Questions
  function endQuiz() {
    finalScore.style.display = "block"
}