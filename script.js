"use strict"

let randomNumber = Math.floor(Math.random() * 11);
let answer = "";

function getQuestion() {
	let question = document.getElementById("question").value;
	return question
}

function getAnswer() {
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

function printAnswer() {
	document.getElementById("answer").value = "You asked: \"" + getQuestion() + "\". \n" + "The answer is: \"" + getAnswer() + "\".";
}

document.getElementsByTagName("button")[0].addEventListener("click", printAnswer);