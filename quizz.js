const quizData = [
    {
        question: 'In which period started mankind with agriculture and became sendentary?',
        a: 'The Roman period',
        b: 'The Paleolithic period',
        c: 'The Neolithic period',
        d: 'The Industrial Age',
        correct: 'c'
    },
    {
        question: 'Which Roman emperor burned ancient Rome down?',
        a: 'Caligula',
        b: 'Augustus',
        c: 'Claudius',
        d: 'Nero',
        correct: 'd'
    },
    {
        question: 'When did Belgium became an independent country?',
        a: '1492',
        b: '1830',
        c: '1969',
        d: '476',
        correct: 'b'
    },
    {
        question: 'How did people in the 19th century communicated with each other when crossing distances?',
        a: 'Facebook',
        b: 'Email',
        c: 'Letter',
        d: 'Satellite connection',
        correct: 'c'
    },
    {
        question: 'What does an archaeologist study?',
        a: 'Dinosaurs',
        b: 'Apes',
        c: 'Mankind',
        d: 'Alien astronauts',
        correct: 'c'
    }
];

const answerEls = document.querySelectorAll('.answer');
const quizz = document.querySelector('#quizz');
const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitButton = document.getElementById('submit');



let currentQuiz = 0;
let answer = undefined;
let score = 0;



const loadQuiz = () => {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}


function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}


loadQuiz();

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}



submitButton.addEventListener('click', () => {

    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onClick="location.reload()">Start Again</button>`;
        }
    }
});
