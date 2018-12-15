"use strict"

let answer = "";

function getQuestion() {
	let question = document.getElementById("question").value;
	return capitalise(question);
}

function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getAnswer() {
	let randomNumber = Math.floor(Math.random() * 11);

	switch(randomNumber) {
		case 0:
		answer = "Sure";
		break;
		case 1:
		answer = "Probably not";
		break;
		case 2:
		answer = "Maybe in the future";
		break;
		case 3:
		answer = "Work hard";
		break;
		case 4:
		answer = "Don't think so";
		break;
		case 5:
		answer = "The chance is pretty low";
		break;
		case 6:
		answer = "HELL YES";
		break;
		case 7:
		answer = "Nope, sorry";
		break;
		case 8:
		answer = "Are you serious";
		break;
		case 9:
		answer = "Why are you even asking";
		break;
		case 10:
		answer = "Hmmmmm, could be";
		break;
		case 11:
		answer = "Yes";
		break;
		case 12:
		answer = "No";
		break;
		case 13:
		answer = "It's very likely";
		break;
		case 14:
		answer = "Yep, of course";
		break;
		case 15:
		answer = "Nah, don't even bother";
		break;
	}
	return answer;
}

function printResults() {
	document.getElementById("user-input").innerHTML = getQuestion();

	if (getQuestion() !== "" && getQuestion() !== " " && getQuestion() !== "  ") {
		document.getElementById("answer").innerHTML = getAnswer() + ".";
	}
	window.scrollTo(0,document.body.scrollHeight);
}

document.getElementsByTagName("button")[0].addEventListener("click", printResults);

document.addEventListener('keypress', function (e) {
	let key = e.which || e.keyCode;

	if (key === 13) {
		printResults();
	}
});
