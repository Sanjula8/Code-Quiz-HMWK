// DOM Elements

var startButton = document.getElementById("start-quiz");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var QuestionDisplay = document.getElementById("question-title");
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
		question4: "What is that thing right here?",
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

// Starting Quiz will also start counter

// Hitting start will display next Question and Answer buttons:

function showQuestion() {
	QuestionDisplay.textContent = questions[0].question1;
	answer1.innerHTML = questions[0].answers[0].AnswerA;
	answer2.innerHTML = questions[0].answers[1].AnswerB;
	answer3.innerHTML = questions[0].answers[2].AnswerC;
	answer4.innerHTML = questions[0].answers[3].AnswerD;
}

// Show Question too!

// Selecting correct answer will move to next question and display "correct"
// Selecting correct answer will count towards user score

function setNextQuestion() {
	showQuestion(questions[currentQuestionIndex]);
}

answerButtonsEl.addEventListener("click", function selectAnswer() {
	for (let i = 0; i < questions.length; i++) {
		const element = questions[i];
		if (answers === true) {
			setNextQuestion();
			userScore++;
		} else {
			alert("wrong");
		}
	}
});

// Selecting wrong answer will display "Incorrect/Wrong" and continue to next question
// Selecting wrong answer will not count towards user score
// Selecting wrong answer will subtract 15 seconds to user score

// After finishing all answers, user will be redirected to Submit Score Page
// At last question, will redirect to submit score page

// var lastQuestion = questions.length - 1;

// User is able to save the score in local storage and able to display High Scores
