import Model from './lib/Model';

class Question extends Model{
 constructor(question) {
     super();
     this.text = question.question;
     this.allAnswers = [question.correct_answer,...question.incorrect_answers];
     this.correctAnswer = question.correct_answer;
     this.submittedAnswer = null
     this.shuffle = this.shuffle(this.allAnswers);
     console.log(this.allAnswers); 
    }
 shuffle(answers) {
        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
        }
    };
    

 submitAnswer(answer) {
     this.submittedAnswer = answer;
 }

}

export default Question;
