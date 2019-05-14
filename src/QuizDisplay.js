class QuizDisplay extends Renderer {

    /**
    * This function must return an HTML string
    */
    template() {
      // if quiz is inactive and no questions are asked yet, then
      // we're at the intro state of app
      let html = '';
      if (!this.model.active && this.model.askedQuestions.length === 0) {
        html = this._generateIntro();
      }
      else {
          html = this._generateIntro();
      }
    }
  
    /**
    * This function must return an object
    */
    getEvents() {
      return {
        'click .start': 'handleStart'
      };
    }
  
    /**
    * All event handler functions should call model methods
    */ 
    handleStart() {
      this.model.startQuiz();
    }
  }