const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const question = [
    {
        question: 'which one of these is a javascript framework?',
        answers :[
            {text: 'python', correct:false},
            {text: 'Django', correct:false},
            {text: 'React', correct:true},
            {text: 'Eclipse', correct:false},
        ],
    },
    {
        question: 'which type of javascript language is ______ .',
        answers :[
            {text: 'Object-Oriented', correct:false},
            {text: 'Object-Based', correct:true},
            {text: 'Assembly-language', correct:false},
            {text: 'High-level', correct:false},
        ],
    },
    {
        question: 'The "function" and "var" are known as:',
        answer:[
            {text: 'Keywords', correct:false},
            {text: 'Data type', correct:false},
            {text: 'Declaration statements', correct:true},
            {text: 'Prototypes', correct:false},
        ],
    },
    {
        question: 'Which of the following variables takes precedence over the others if the names are the same?',
        answer:[
            {text: 'Global variable', correct:false},
            {text: 'The local element', correct:true},
            {text: 'The two of the above', correct:false},
            {text: 'None of the above', correct:false},
        ],
    },
    {
        question: 'Which one of the following is the correct way for calling the javascript code?',
        answers :[
            {text: 'preprocessor', correct:false},
            {text: 'Triggering Event', correct:false},
            {text: 'RMI', correct:false},
            {text: 'Function/Method', correct:true},
        ]
    }

]
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-button')

let shuffledQuestions,currectQuestionIndex;
let quizScor = 0;

startButton.addEventListener('click',startGame)

nextButton.addEventListener('click',() =>{
    correctQuestionIndex++
    setnextQuestion()
})

function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions=question.sort(() =>Math.random() -0.5);
    correctQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setnextQuestion();
    quizScor=0;
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[correctQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText.question.question;
    question.answer.forEach((answer) => { 
        const button = document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if (answer.correct){
            button,dataset.correct =answer.correct
        }
        button.addEventListener('click',selectannswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)   
    }
}
function selectannswer(e){
    const selectButton=e.target
    const correct =selectButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach((Button)=>{
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffledQuestions.length > currectQuestionIndex +1){
            nextButton.classList.remove("hide")
    }else{
        startButton.innerText = "restart"
        startButton.classList.remove("hide")
    }
    if(selectButton.dataset = correct){
        quizScor++
    }
    document.getElementById('right-answers').innerText=quizScor
}



function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}





