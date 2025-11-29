// Quiz Questions
var quizQuestions = [
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is the largest mammal on Earth?", answer: "blue whale" },
    { question: "Who wrote the play 'Romeo and Juliet'?", answer: "william shakespeare" },
    { question: "What gas do plants absorb from the atmosphere?", answer: "carbon dioxide" },
    { question: "How many continents are there on Earth?", answer: "7" }
];

// Quiz Function
function runQuiz() {
    var score = 0;

    for (var i = 0; i < quizQuestions.length; i++) {
        var userAns = prompt(quizQuestions[i].question);
        
        if (!userAns) {
            alert("No answer entered.");
            continue;
        }

        var cleanAns = userAns.toLowerCase().trim();

        if (cleanAns === quizQuestions[i].answer) {
            alert("Correct!");
            score++;
        } else {
            alert("Wrong! Correct answer is: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz Finished! Your Score: " + score + " / " + quizQuestions.length);
}

// Run the quiz
runQuiz();
