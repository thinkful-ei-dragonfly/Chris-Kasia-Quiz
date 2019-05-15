import Model from './lib/Model';

class Question extends Model{
 constructor(question) {
     super();
     this.text = question.question;
     this.allAnswers = [question.correct_answer,...question.incorrect_answers];
     this.correctAnswer = question.correct_answer;
     this.submittedAnswer = null
    }

 submitAnswer(answer) {
     this.submittedAnswer = answer;
 }

}

export default Question;
