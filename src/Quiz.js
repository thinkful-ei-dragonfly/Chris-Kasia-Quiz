import Question from './Question';
import TriviaApi from './TriviaApi';
import Model from './lib/Model';

class Quiz extends Model {

  static DEFAULT_QUIZ_LENGTH = 5;

  constructor() {
    super();
    // Array of Question instances
    this.unasked = [];
    // Array of Question instances
    this.asked = [];
    this.active = false;
    this.score = 0;
    this.scoreHistory = 0;
    // TASK: Add more props here per the exercise

  }

  // Example method:
  startGame() {
    this.active = true;
    const triviaGame = new TriviaApi();
    triviaGame.baseFetchMethod().then(res => {
        let array = res.results;
        array.forEach(element => {
        let question = new Question();
        question.text = element.question;
        question.answers = [element.correct_answer,...element.incorrect_answers]; //this is an array
        question.correctAnswer = element.correct_answer;
        question.submittedAnswer = ''; 
        this.unasked.push(question);
        this.update();
    });
    askQuestions(this.unasked)

  })
  .catch(error => {
    console.log(error);
  });
  console.log(this.unasked);
};

 askQuestions(questions) {
   questions.forEach(question => {
    //display the question 
        //something like. $('div').html(generateString(question))
    //take in a user answer
        //question.submittedAnswer = $('click').event.Target().val()
    //compare the user answer to the correct one, plus one if correct
        //if (question.submittedAnswer === question.correctAnswer)
            //scorechange() 
   });
   scoreHistory + scoreChange();
   endGame();
 }


  questionsAsked() {
    this.asked.push(this.unasked.pop());
    console.log(this.asked);
    console.log(this.unasked);
  }

  scoreChange() {
    this.score = this.score + 1;
  }


  endGame() {
    this.active = false;
  }

  
}

export default Quiz;
