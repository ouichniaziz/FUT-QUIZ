var quizCards = [
    {
        card: "img/etoo_empty.png",
        correctcard : "img/samuel.png",
        a:'Sterling',
        b:"Eto'o",
        c:'Mané',
        d:'George Weah',
        correct:'b'
    },
    {
        card: "img/fati_empty.png",
        correctcard : "img/fati.png",
        a:'Modric',
        b:'Buffon',
        c:'Mbappé',
        d:'Fati',
        correct:'d'
        
    },
    {
        card:"img/mendy_empty.png",
        correctcard : "img/mendy.png",
        a:'Marquinhos',
        b:'Varane',
        c:'Neymar',
        d:'Mendy',
        correct:'d'
    },
    {
        card:"img/sane_empty.png",
        correctcard : "img/sane.png",
        a:'Sané',
        b:'Verratti',
        c:'Gnabry',
        d:'Adama',
        correct:'a'
    },
    {
        card:"img/ribery_empty.png",
        correctcard : "img/RIBÉRY.png",
        a:"Hernandéz",
        b:"Ribéry",
        c:"Robertson",
        d:"Aouar",
        correct:'b'
    },
    {
        card: "img/cancelo_empty.png",
        correctcard : "img/CANCELO.png",
        a:"Ricardo Pereira",
        b:"Di Maria",
        c:"Cancelo",
        d:"Yuri Berchiche",
        correct: "c"
    },
    {
        card: "img/choudhury_empty.png",
        correctcard : "img/CHOUDHURY.png",
        a:"Vardy",
        b:"Van Djik",
        c:"Choudhury",
        d:"Ben Yedder",
        correct:"c"
    },
    {
        card: "img/gullit_empty.png",
        correctcard : "img/GULLIT.png",
        a:"Cruyff",
        b:"Gullit",
        c:"Koeman",
        d:"Depay",
        correct:"b"
    },
    {
        card: "img/plea_empty.png",
        correctcard : "img/PLEA.png",
        a:"Ajorque",
        b:"Coman",
        c:"Koeman",
        d:"Plea",
        correct:"d"
    },
    {
        card: "img/sanches_empty.png",
        correctcard : "img/SANCHES.png",
        a:"Sanches",
        b:"Nabil Fekir",
        c:"Bruno Fernandes",
        d:"Bernardo Silva",
        correct:"a"
    },
]

var quiz = document.getElementById('quiz')
var answersElements = document.querySelectorAll('.answer')
var imagesElements = document.getElementById('cards')
var a_text = document.getElementById('a_text')
var b_text = document.getElementById('b_text')
var c_text = document.getElementById('c_text')
var d_text = document.getElementById('d_text')
var submitButton = document.getElementById('btn')
var currentQuiz = 0
var score = 0


getQuiz();

function getQuiz () { // QUIZ UPDATE

    unselectAnswers()  

    var currentQuizCard = quizCards[currentQuiz]

    imagesElements.src = currentQuizCard.card
    a_text.innerText = currentQuizCard.a
    b_text.innerText = currentQuizCard.b
    c_text.innerText = currentQuizCard.c
    d_text.innerText = currentQuizCard.d
}

function changeCard() { // CHANGE IMAGE TO SHOW THE CORRECT ANSWER

    unselectAnswers()

    var currentQuizCard = quizCards[currentQuiz]
    imagesElements.src = currentQuizCard.correctcard
}

function unselectAnswers() {  // UNSELECT ANSWER BEFORE SWITCH
    for (var i = 0 ; i < answersElements.length; i++) {
        var item = answersElements[i]
        item.checked = false;
    }
}

function getSelected () { // MATCHING THIS ANSWERS
    var answer;
    for (var i = 0 ; i < answersElements.length ; i++) {
        if (answersElements[i].checked) {      
            answer = answersElements[i].id
        }
    }
      return answer
}

submitButton.addEventListener('click',function(){ // EVENTS FOR THE BUTTON 
    var answer = getSelected()
    
        if (answer === quizCards[currentQuiz].correct) {
            console.log(answer)
            score++
            changeCard()
        }
        currentQuiz++
        if (currentQuiz < quizCards.length) {
            setTimeout(function(){
                getQuiz()  
               },1300)

        } else {

            setTimeout(function(){
                quiz.innerHTML = `
                <h2>You answer correct at ${score}
                /${quizCards.length}</h2>
    
                <button onclick="location.reload()
                ">Play Again</button>
                `
    
            },1500)
         
        }
})




