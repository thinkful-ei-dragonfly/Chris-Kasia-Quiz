import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {

  getEvents() {
    return {
      'click .start-game': 'handleStartGame',
      'submit form': `handleSubmitAnswer`,
      'click #continue-button': 'handleContinueScreen'
    };
  }

  handleStartGame() {
    this.model.startGame();
  }

  handleSubmitAnswer(event) {
      event.preventDefault();
      this.model.submitAnswer(event);
      // this._generateValidationScreen();
  }

  handleContinueScreen(event){
    event.preventDefault();
    console.log(this);
    this.model.nextQuestion();
    // this._generateAskQuestion();
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
      // console.log(question);
      if (this.model.asked.length === 0) {
        html = this._generateIntro();
      } else if (this.model.active && (!question.submittedAnswer)) {
        html = this._generateAskQuestion(question);
      } else  {
        html = this._generateValidationScreen(question);
      }
      return html;
      
    };

    _generateValidationScreen() {
        let current = this.model.currentQuestion().submittedAnswer;
        let correct = this.model.currentQuestion().correctAnswer;
        let answerResponse = '';
        if (current === correct) {
            answerResponse = `<p>You got it! The correct answer was ${correct}</p>`;
        } else {
            answerResponse = `<p>Sorry that's incorrect. You answered ${current}. The correct answer was ${correct}</p>`;
        }
        console.log(answerResponse);
        return `
                <div>
                    <p>${this.model.asked[0].text}</p>
                    ${answerResponse}
                    <button type='button' id='continue-button'>CONTINUE</button>
                </div>
        `
    }

   

}

  export default QuizDisplay;