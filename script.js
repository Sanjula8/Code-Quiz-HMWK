// DOM Elements

var startButton = document.getElementById("start-quiz");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var QuestionDisplay = document.getElementById("question-title");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var answer1 = document.getElementById("Answer1");
var answer2 = document.getElementById("Answer2");
var answer3 = document.getElementById("Answer3");
var answer4 = document.getElementById("Answer4");
var timerEl = document.getElementById("timer");
var messageEl = document.getElementById("message");
var submitBtn = document.getElementById("submit");

let currentQuestionIndex;
let userScore;
var timerID;

// Create Questions:
var questions = [
	{
		question: "What is Javascript?",
		answers: [
			{ answer: "Correct", correct: true },
			{ answer: "Wrong", correct: false },
			{ answer: "Wrong", correct: false },
			{ answer: "Wrong", correct: false }
		]
	},
	{
		question: "What is this other thing?",
		answers: [
			{ answer: "Wrong", correct: false },
			{ answer: "Wrong", correct: false },
			{ answer: "Correct", correct: true },
			{ answer: "Wrong", correct: false }
		]
	},
	{
		question: "What is that thing over there?",
		answers: [
			{ answer: "Wrong", correct: false },
			{ answer: "Wrong", correct: false },
			{ answer: "Wrong", correct: false },
			{ answer: "Correct", correct: true }
		]
	},
	{
		question: "What is that thing right here?",
		answers: [
			{ answer: "Correct", correct: true },
			{ answer: "Wrong", correct: false },
			{ answer: "Wrong", correct: false },
			{ answer: "Wrong", correct: false }
		]
	},
	{
		question: "dfdfdght here?",
		answers: [
			{ answer: "Correct", correct: true },
			{ answer: "Wrong", correct: false },
			{ answer: "Wrong", correct: false },
			{ answer: "Wrong", correct: false }
		]
	}
];

var time = questions.length * 15;
// Start Quiz
startButton.addEventListener("click", startQuiz);

function startQuiz() {
	startButton.classList.add("hide");
	currentQuestionIndex = 0;
	userScore = 0;
	timerID = setInterval(clockTick, 1000);

	questionContainerEl.classList.remove("hide");
	setNextQuestion();
}

// Starting Quiz will also start counter
function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		submitScore();
	}
}
// Hitting start will display next Question and Answer buttons:

function showQuestion() {
	QuestionDisplay.textContent = questions[currentQuestionIndex].question;
	answer1.innerHTML = questions[currentQuestionIndex].answers[0].answer;
	answer2.innerHTML = questions[currentQuestionIndex].answers[1].answer;
	answer3.innerHTML = questions[currentQuestionIndex].answers[2].answer;
	answer4.innerHTML = questions[currentQuestionIndex].answers[3].answer;
}

// Selecting correct answer will move to next question and display "correct"
// Selecting correct answer will count towards user score

function setNextQuestion() {
	showQuestion();
}

answerButtonsEl.addEventListener("click", function selectAnswer(event) {
	console.log(this);
	console.log(event.target.getAttribute("data-index"));

	var dataIndex = event.target.getAttribute("data-index");
	// console.log(questions[currentQuestionIndex].answers[dataIndex]);
	if (questions[currentQuestionIndex].answers[dataIndex].correct === true) {
		userScore++;
		messageEl.textContent = "Correct";
		messageEl.setAttribute("style", "color:green");
	} else if (
		questions[currentQuestionIndex].answers[dataIndex].correct === false
	) {
		// Selecting wrong answer will subtract 15 seconds to user score
		// Selecting wrong answer will not count towards user score
		time -= 15;
		timerEl.textContent = time;
		messageEl.textContent = "Wrong";
		messageEl.setAttribute("style", "color:red");
	}

	currentQuestionIndex++;
	if (currentQuestionIndex === questions.length) {
		submitScore();
	} else {
		setNextQuestion();
	}
});

// Selecting wrong answer will display "Incorrect/Wrong" and continue to next question

function submitScore() {
	clearInterval(timerID);
	var endScreen = document.getElementById("end-screen");
	endScreen.classList.remove("hide");
	var score = document.getElementById("score");
	score.textContent = time;
	var questionsEl = document.getElementById("question-container");

	questionsEl.setAttribute("class", "hide");
}
submitBtn.onclick = saveHighScore;

// After finishing all answers, user will be redirected to Submit Score Page
// At last question, will redirect to submit score page

// User is able to save the score in local storage and able to display High Scores
function saveHighScore() {
	var initialsEl = document.getElementById("initials");
	var initials = initialsEl.value;
	if (initials !== "") {
		var highScores =
			JSON.parse(window.localStorage.getItem("highScores")) || [];
		var newScore = {
			score: time,
			initials: initials
		};
		highScores.push(newScore);
		window.localStorage.setItem("highScores", JSON.stringify(highScores));
		window.location.href = "highScores.html";
	}
}
