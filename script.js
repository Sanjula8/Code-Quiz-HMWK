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

let currentQuestionIndex;
let userScore;

// Create Questions:
var questions = [
	{
		question1: "What is Javascript?",
		answers: [
			{ AnswerA: "Correct", correct: true },
			{ AnswerB: "Wrong", correct: false },
			{ AnswerC: "Wrong", correct: false },
			{ AnswerD: "Wrong", correct: false }
		]
	},
	{
		question2: "What is this other thing?",
		answers: [
			{ AnswerA: "Wrong", correct: false },
			{ AnswerB: "Wrong", correct: false },
			{ AnswerC: "Correct", correct: true },
			{ AnswerD: "Wrong", correct: false }
		]
	},
	{
		question3: "What is that thing over there?",
		answers: [
			{ AnswerA: "Wrong", correct: false },
			{ AnswerB: "Wrong", correct: false },
			{ AnswerC: "Wrong", correct: false },
			{ AnswerD: "Correct", correct: true }
		]
	},
	{
		question4: "What is my name?",
		answers: [
			{ AnswerA: "Correct", correct: true },
			{ AnswerB: "Wrong", correct: false },
			{ AnswerC: "Wrong", correct: false },
			{ AnswerD: "Wrong", correct: false }
		]
	}
];

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

function setNextQuestion() {
	showQuestion(questions[currentQuestionIndex]);
}

function showQuestion() {
	answer1.innerHTML = questions[0].answers[0].AnswerA;
	answer2.innerHTML = questions[0].answers[1].AnswerB;
	answer3.innerHTML = questions[0].answers[2].AnswerC;
	answer4.innerHTML = questions[0].answers[3].AnswerD;
}

answerButtonsEl.addEventListener("click", answer);

var lastQuestion = questions.length - 1;

// Event = on click
