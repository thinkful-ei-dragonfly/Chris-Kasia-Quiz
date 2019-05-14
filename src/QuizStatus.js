import Renderer from './lib/Renderer';


class QuizStatus extends Renderer{
    template() {
        if (!this.model.active) {
            return `<div> 
                    Game Not Started
                    </div>`
        }
        return `<div>Question ${this.model.asked.length} of the ${this.model.asked.length + this.model.unasked.length}</div>`;
    }
}

export default QuizStatus;