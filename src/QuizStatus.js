import Renderer from './lib/Renderer';


class QuizStatus extends Renderer{
   template() {
    const score = this.model.score;
    //  const hightScore = this.model.higthscore
    const current = this.model.asked.length;
    const total = this.model.asked.length + this.model.unasked.length;

           return `<div>
                   <p> Score: ${score}</p>
                   <p> Progress: ${current === -1 ? 'inactive': `${current} of ${total}` }</p>
                   </div>`
   }
}

export default QuizStatus;