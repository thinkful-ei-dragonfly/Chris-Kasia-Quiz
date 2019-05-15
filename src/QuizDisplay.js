import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {

  getEvents() {
    return {
      'click .start-game': 'handleStartGame',
      'submit form': `handleSubmitAnswer`
    };
  }

  handleStartGame() {
    this.model.startGame();

  }

  handleSubmitAnswer(event) {
      event.preventDefault();
      let answer = event.target.answer.value;
      this.model.currentQuestion().submittedAnswer = answer;
      console.log(answer);
      this.model.nextQuestion();
  }

  handContinueQuiz() {

  }

    _generateIntro() {
      return  `<div>
        <p>Welcome to the Quiz!</p>
        <p><button class="start-game">Start</button></p>
        </div>`
      
    }

    _generateAskQuestion() {
        const currentAnswers = this.model.currentQuestion().allAnswers.map((answer, index) => {
                    return `<input type ="radio" name="answer" id="${index}" value="${answer}"/>
                    <label for="${index}">${answer}</label>`
                }).join(''); 
        return `
                <div>
                    <p>${this.model.asked[0].text}</p>
                    <form id="submit-form">
                    ${currentAnswers}
                    <div>
                    <input type="submit"/>
                    </div>
                    </form>
                </div>
        `
    }
    /**
    * This function must return an HTML string
    */
    template() {
      let html;
      const question = this.model.currentQuestion();
      if (this.model.asked.length === 0) {
        html = this._generateIntro();
        console.log('intro')
      } else if (this.model.active && (!question.userAnswer)) {
        html = this._generateAskQuestion(question);
      }
      return html;
    };

    generateContinueScreen() {
        return `
                <div>
                    <p>${this.model.asked[0].text}</p>
                    <form id="submit-form">
                    ${currentAnswers}
                    <div>
                    <input type="submit"/>
                    </div>
                    </form>
                </div>
        `
    }

}

  export default QuizDisplay;