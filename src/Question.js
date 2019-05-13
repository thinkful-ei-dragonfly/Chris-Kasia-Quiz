class Question {
 constructor(question) {
     this.text = '';
     this.incorrectAnswers = [];
     this.correctAnswer = '';
     this.submittedAnswer = '';
 }

 submitAnswer(answer) {
     this.submittedAnswer = answer;
 }

}

export default Question;
