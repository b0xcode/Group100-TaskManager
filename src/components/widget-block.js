import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


/**
 * WidgetBlock <widget-block header="Sample Widget">
 * Base example for a widget, used as a placeholder in design for unimplemented
 * widgets
 */
class WidgetBlock extends LitElement {
  static properties = {
    header: {type: String},
  };

  static styles = css`
    :host {
        display: block;
        width: 250px;
        height: 250px;
        background-color: lightblue;
        border: 1px solid red;
    }
  `;

  constructor() {
    super();
    this.header = 'Widget';
  }

  render() {
    return html`
        <h3>${this.header}</h3>
        <h3>Rock, Paper, Scissors Game</h3>
        <button @click="${() => this.startplaying('rock')}">Rock</button>
        <button @click="${() => this.startplaying('paper')}">Paper</button>
        <button @click="${() => this.startplaying('scissors')}">Scissors</button>
        <p id="outcome"></p>
      `;
    }
  
    startplaying(playerSelection) {
      const selections = ['rock', 'paper', 'scissors'];
      const systemSelection = selections[Math.floor(Math.random() * selections.length)];
      const resultFeature = this.shadowRoot.getElementById('outcome');
      const outcome = this.WinORLoss(playerSelection, systemSelection);
      resultFeature.textContent = `You chose ${playerSelection}. Computer chose ${systemSelection}. ${outcome}`;
    }
  
    WinORLoss(playerSelection, systemSelection) {
      if (playerSelection === systemSelection) {
        return "tie!";
      } else if (
        (playerSelection === 'rock' && systemSelection === 'scissors') ||
        (playerSelection === 'paper' && systemSelection === 'rock') ||
        (playerSelection === 'scissors' && systemSelection === 'paper')
      ) {
        return 'win!';
      } else {
        return 'System wins!';
      }
    }
  }
  

customElements.define('widget-block', WidgetBlock);
