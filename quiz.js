
(function(){
    // Functions
    function buildQuiz(){
     
      const output = [];
  
      
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          const answers = [];
  
         
          for(letter in currentQuestion.answers){
  
            
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      
      let numCorrect = 0;
  
      
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        
        if(userAnswer === currentQuestion.correctAnswer){
          
          numCorrect++;
  
        
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
      
        else{
         
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
     
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What is the symbol of the LGBT community?",
        answers: {
          a: " A 6-pointed star",
          b: "A rainbow flag",
          c: "A colourful rose"
        },
        correctAnswer: "b"
      },
      {
        question: "According to the Guinness World Records, which country holds the world record for having the largest Pride parade in the world?",
        answers: {
          a: "Brazil",
          b: "The United States",
          c: "Mexico"
        },
        correctAnswer: "a"
      },
      {
        question: "What does the letter T in LGBT stands for?",
        answers: {
          a: "Telegender",
          b: "Transgender",
          c: "Trigender"
        },
        correctAnswer: "b"
      },
      {
        question: "Which of the following famous CEOs publicly came out as gay?",
        answers: {
          a: "Jeff Bezos",
          b: "Tim Cook",
          c: "Richard Branson"
        },
        correctAnswer: "b"
      },
      {
        question: "Which is the first country to legalise same-sex marriage in 2001?",
        answers: {
          a: "Norway",
          b: "France",
          c: "The Netherlands"
        },
        correctAnswer: "c"
      },
      {
        question: "Which Oscar-winning movie depicts the sexual and emotional relationship between two gay cowboys named Jack Twist and Ennis Del Mar?",
        answers: {
          a: " Brokeback Mountain",
          b: " Call Me by Your Name",
          c: "Blue is the Warmest Colour"
        },
        correctAnswer: "a"
      },
      {
        question: "Which of the following words does not refer to the LGBT community?",
        answers: {
          a: "Homophobia",
          b: "Homophile",
          c: "Homosexuality"
        },
        correctAnswer: "a"
      },
      {
        question: "We all know that men are from Mars and women are from Venus. So which planet is a symbol often used by the transgendered community?",
        answers: {
          a: "Saturn",
          b: "Mercury",
          c: "Jupiter"
        },
        correctAnswer: "b"
      },
      {
        question: "The first gay bookstore in the world was opened in New York City in 1967 and named after which famous writer?",
        answers: {
          a: "Oscar Wilde",
          b: "Mark Twain",
          c: "Charles Dickens"
        },
        correctAnswer: "a"
      }
    ];
  
  
    buildQuiz();
  
    
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
   
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  