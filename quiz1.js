function populate() {

		if(quiz.isEnded()) {
			// show scores
			
			showScores();

		} else {
			// show question

			var element = document.getElementById("question");
			element.innerHTML = quiz.getQuestionIndex().text;

			// show choices

			var choices = quiz.getQuestionIndex().choices;

			for (var i = 0; i < choices.length; i++) {
				var element = document.getElementById("choice" + i);
				element.innerHTML = choices[i];
				guess("btn" + i, choices[i]);
				
			}
		} 
		// showProgress();
};


function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}

function showProgess() {
	var currentQuestion = quiz.questionIndex + 1;
	var element = document.getElementById("display");
	element.innerHTML = "Question " + currentQuestion + "of " + quiz.questions.length; 
}

function showScores() {
	var quizEndedHtml = "<h1> Result </h1>";
		quizEndedHtml += "<h2 id='score'> Your score is : " + quiz.score + " out of " + quiz.questions.length  + "</h2>";
    var element = document.getElementById("grid");
    	element.innerHTML = quizEndedHtml;
}

var questions = [
		new Question("The following are breeds of layers except?", ["Isa Brown", "Broilers", "Bovans Black", "Delkab", "Isa White"], "Broilers"),
	    new Question("Which of the options is not a route of vaccination?", ["oral", "subcutaneous", "intramuscular", "intraocular", "abdominal"], "abdominal"),
	    new Question("Pick the odd one out of the following.", ["Newcastle disease", "Fowl Cholera", "Sores Influenza", "Mareks disease", "Gumboro"], "Sores Influenza"),
	    new Question("This is not a part of a chicken's body?", ["Tooth", "Head", "Shank", "Cloaca", "Breast"], "Tooth"),
	    new Question("Which of these is not neccessary before stocking a poultry house?", ["Cleaning", "Spraying", "Medication", "Disinfection", "Deodourization"], "Deodourization"),
	    new Question("Flock Uniformity can be said to be satisfactory at which level?", ["25%", "85%", "50%", "100%", "65%"], "85%"),
	    new Question("Chick placement requires the following except?", ["House heating", "Disinfection", "Serving feed and water", "Floor preparation", "Turning off lights"], "Turning off the lights")
				];


var quiz = new Quiz(questions);


populate();
