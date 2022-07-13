const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
// To suffle the question


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const questions = [
    {
      question: 'Which of the following is/are the versions of the Ramayana that have emerged outside India?  ',
      answers: [
        { text: 'Combodia', correct: false },
        { text: 'Thailand', correct: false },
        { text: 'Burma', correct: false },
        { text: 'All of the above', correct: true }
      ]
    },
    {
      question: 'Lakshmana is considered to be the incarnation of whom?',
      answers: [
        { text: 'Lord Vishnu', correct: false },
        { text: 'Lord Shiva', correct: false },
        { text: 'Lord Brahma', correct: false },
        { text: 'Sheshnag', correct: true }
      ]
    },
    {
        question: 'Badrinath is situated on which bank of river?',
 answers: [
            { text: 'Ganga', correct: false },
            { text: 'Yamuna', correct: false },
            { text: 'Alaknanda', correct: true },
            { text: 'Sarswati', correct: false }
        ]
    },
    {
      question: 'Who had composed the original Ramayana?',
      answers: [
        { text: 'Rishi Valmiki', correct: true },
        { text: 'Tusli Das', correct: false},
        { text: 'Sant Ek Nath', correct: false },
        { text: 'Anihanda', correct: false }
      ]
    },

    {
        question: 'Badrinath is situated on which bank of river?',
 answers: [
            { text: 'Ganga', correct: false },
            { text: 'Yamuna', correct: false },
            { text: 'Alaknanda', correct: true },
            { text: 'Sarswati', correct: false }
        ]
    },
   
    {
        question: 'Who is Lord Rama?',
 answers: [
            { text: 'Prince', correct: true },
            { text: 'Priest', correct: false },
            { text: 'Sage', correct: false },
            { text: 'Philospher', correct: false }
        ]
    },
   
    {
        question: 'Meaning of word Dalit?',
 answers: [
            { text: 'Leaders', correct: false },
            { text: 'seers', correct: false },
            { text: 'hairy ones', correct: false },
            { text: 'oppressed', correct: true }
        ]
    },

    {
        question: 'Which holday encourages mischeft and mayhem?',
 answers: [
            { text: 'Holi', correct: true },
            { text: 'Diwali', correct: false },
            { text: 'Navaratri', correct: false },
            { text: 'Vijay Dashmi', correct: false }
        ]
    },
    {
        question: 'What is sacred text of Hinduism?',
 answers: [
            { text: 'The Vedas', correct: false },
            { text: 'The Bhagavad Gita', correct: false },
            { text: 'The epics of Mahabharata and the Ramayana', correct: false },
            { text: 'All of the above', correct: true }
        ]
    },
    {
        question: 'What is meaning of Dharma?',
 answers: [
            { text: 'Virtous Path', correct: false },
            { text: 'higher Truth', correct: false },
            { text: 'The right dury of a person', correct: false },
            { text: 'All of the above', correct: true }
        ]
    },
    {
        question: 'Which is the diety river in the Rigveda?',
 answers: [
            { text: 'The Brahmaputra ', correct: false },
            { text: 'The Yamuna', correct: false },
            { text: 'The Ganges', correct: false },
            { text: 'The Sarswati', correct: true }
        ]
    },
   
    {
        question: 'What is the meaning of "Manish"😉 ?',
 answers: [
            { text: 'God of Mind', correct: false },
            { text: 'Lovable', correct: false },
            { text: 'Smart & Funny', correct: false },
            { text: 'All of the above', correct:true }
        ]
    },
   
    {
        question: 'Who was the greatest king of ancient Indian history ?',
 answers: [
            { text: 'Akbar', correct: false },
            { text: 'Ashoka', correct: true },
            { text: 'Shri PrithviRaj Chauhan', correct: false },
            { text: 'Chhatrapati Shivaji', correct: false }
        ]
    }

]