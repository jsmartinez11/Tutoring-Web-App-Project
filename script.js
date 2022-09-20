const quizData = [
{
    question: "Which of these is an adverb?",
    a: "Strong",
    b: "Quickly",
    c: "Singing",
    d: "Into",
    correct: "b",
}, {
    question: "Which of these is not one of your 60 prepositions?",
    a: "About",
    b: "By",
    c: "Near",
    d: "Prior",
    correct: "d",
}, {
    question: "Choose the most appropriate answer for the following statement. The woman, who has been missing for 10 days, is believed _____.",
    a: "to be abducted",
    b: "to be aducting",
    c: "to have been abducted",
    d: "to have been abducting",
    correct: "c",
}, {
    question: "Which of these words is spelt incorrectly?",
    a: "recieve",
    b: "bizarre",
    c: "laboratory",
    d: "maneuver",
    correct: "a",
}, {
    question: "What time of figurative language is this: 'That suitcase weighed a thousand pounds.'",
    a: "Simile",
    b: "Metaphor",
    c: "Hyperbole",
    d: "Personification",
    correct: "c",
}
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
            answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly! Keep up the good work!</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});