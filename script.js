// DOM Elements
var startButton = document.getElementById("start-quiz");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

let shuffleQuestions, currentQuestionIndex;

// Start Quiz
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
	currentQuestionIndex++;
	setNextQuestion();
});

function startQuiz() {
	startButton.classList.add("hide");
	currentQuestionIndex = 0;
	userScore = 0;
	questionContainerEl.classList.remove("hide");
	setNextQuestion();
}

// Questions

function setNextQuestion() {
	resetState();
	showQuestion(shuffleQuestions[currentQuestionIndex]);
}
function showQuestion() {
	resetState();
	showQuestion(shuffleQuestions[currentQuestionIndex]);
	answer1.firstElementChild.innerHTML = current.choices[0];
	answer2.firstElementChild.innerHTML = current.choices[1];
	answer3.firstElementChild.innerHTML = current.choices[2];
	answer4.firstElementChild.innerHTML = current.choices[3];
}

var lastQuestion = questions.length - 1;

answerButtonsEl.addEventListener("click", setNextQuestion);
if (currentQuestion < lastQuestion) {
	currentQuestion++;
	questionCycle();
} else {
	toSubmit();
}

function selectAnswer() {}

// Countdown
// function countdownTimer()(, 1000){}

// Create Questions:
var questions = [
	{
		question: "What is Javascript?",
		answers: [
			{ AnswerA: "Correct", correct: true },
			{ AnswerB: "Wrong", correct: false },
			{ AnswerC: "Wrong", correct: false },
			{ AnswerD: "Wrong", correct: false }
		]
	},
	{
		question: "What is this other thing?",
		answers: [
			{ AnswerA: "Wrong", correct: false },
			{ AnswerB: "Wrong", correct: false },
			{ AnswerC: "Correct", correct: true },
			{ AnswerD: "Wrong", correct: false }
		]
	},
	{
		question: "What is that thing over there?",
		answers: [
			{ AnswerA: "Wrong", correct: false },
			{ AnswerB: "Wrong", correct: false },
			{ AnswerC: "Wrong", correct: false },
			{ AnswerD: "Correct", correct: true }
		]
	},
	{
		question: "What is my name?",
		answers: [
			{ AnswerA: "Correct", correct: true },
			{ AnswerB: "Wrong", correct: false },
			{ AnswerC: "Wrong", correct: false },
			{ AnswerD: "Wrong", correct: false }
		]
	}
];

// Event = on click
