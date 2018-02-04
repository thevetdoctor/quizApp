function populate() {

		if(quiz.isEnded()) {
			// show scores

			showScores();


		} else {
			// show question

			var element = document.getElementById("question");
			element.innerHTML =  quiz.getQuestionIndex().text;

			// show choices

			var choices = quiz.getQuestionIndex().choices;

			for (var i = 0; i < choices.length; i++) {
				var element = document.getElementById("choice" + i);
				element.innerHTML = choices[i];
				guess("btn" + i, choices[i]);

			}
		showProgress();
		}
};


function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}

function showProgress() {
	var currentQuestion = quiz.questionIndex + 1;
	// var currentQuestion = quiz.questionIndex + 1;
	var element = document.getElementById("display");
	element.innerText = currentQuestion;
	// var qLength = document.getElementById("qLength");
	// qLength.innerText = quiz.questions.length;
	element.innerHTML = "Question " + currentQuestion + " of " + quiz.questions.length;
	// console.log(qLength.innerHTML);
}

function showScores() {
	var quizEndedHtml = "<h1> Result </h1>";
		quizEndedHtml += "<h2 id='score'> Your score is : " + quiz.score + " out of " + quiz.questions.length  + "</h2>";
    var element = document.getElementById("grid");
    	element.innerHTML = quizEndedHtml;

    	if(quiz.score >= 5 && quiz.score < 8){
    		element.innerHTML += "<h3> Good, keep it up</h3>";

    		}else if(quiz.score >= 8){
    			element.innerHTML += "<h3>Excellent job. Hurray!</h3>";
    		}
    		else {
    			element.innerHTML += "<h3>Not too good, make extra effort!</h3>";

    	}
    	element.innerHTML += '<a class="btn btn-success" href="">Start again</a>';
    	// element.innerHTML += '<button class="btn btn-success">' + Start again + '</button>';
}

var questions = [
		new Question("The following are breeds of layers except?", ["Isa Brown", "Broilers", "Bovans Black", "Delkab", "Isa White"], "Broilers"),
	    new Question("Which of the options is not a route of vaccination?", ["oral", "subcutaneous", "intramuscular", "intraocular", "abdominal"], "abdominal"),
	    new Question("Pick the odd one out of the following.", ["Newcastle disease", "Fowl Cholera", "Sores Influenza", "Mareks disease", "Gumboro"], "Sores Influenza"),
	    new Question("This is not a part of a chicken's body?", ["Tooth", "Head", "Shank", "Cloaca", "Breast"], "Tooth")
	    ,
	    new Question("Which of these is not necessary before stocking a poultry house?", ["Cleaning", "Spraying", "Medication", "Disinfection", "Deodourization"], "Deodourization"),
	    new Question("Flock Uniformity can be said to be satisfactory at which level?", ["25%", "85%", "50%", "100%", "65%"], "85%"),
	    new Question("Chick placement requires the following except?", ["House heating", "Disinfection", "Serving feed and water", "Floor preparation", "Turning off the lights"], "Turning off the lights"),
	    new Question("The following are viral diseases of poultry except?", ["Mareks Disease", "Fowl Cholera", "Infectious Bursal Disease", "Newcastle Disease", "Avian Encephalomyelitis"], "Fowl Cholera"),
	    new Question("The best approach to checking incidence or outbreak of viral diseases on a poultry farm is: ", ["Sanitation", "Administering antibiotics", "Feeding adequately", "Vaccination", "Proper inspection"], "Vaccination"),
	    new Question("The expected gestation period of a poultry is:", ["22 days", "18 days", "19 days", "32 days", "21 days"], "21 days")  	];


var quiz = new Quiz(questions);

var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arra1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
console.log(shuffle(questions));
// console.log(shuffle(quiz.choices));

populate();
