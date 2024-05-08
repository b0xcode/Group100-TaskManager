import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class GameWidget extends LitElement {
  static properties = {
    _weight: {state: true},
    _height: {state: true},
  };

  static styles = css`
    :host {
        display: block;
        width: 400px;
        height: 500px;
        background-color: #ADDFFF;
        color: #1F456E;
        text-align: center;

    }

    :host input {
        width: 5em;
    }

    .header {
      font-size: 23px;
    }
    

    .display {
        color: white;
        font-size: 25px;
        text-align: center;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .hide {
        display: none;
    }

    .BLOCK-CONTAINER {
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(3,1fr);
        width: 80%;
        height: 10%;
    }

    .grid {
        border: 1px solid white;
        min-width: 100px;
        min-height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        cursor: pointer;
    }

    .GamerA {
        color: #F94449;
        font-weight:bold;
        font-size: 20px;
    }

    .GamerB{
        color: #498AFB;
    }

    .settings {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 0.5em;
    }

    .settings button {
        color: white;
        padding: 10px;
        border-radius: 15px;
        font-size: 24px;
        border:none;
        cursor: pointer;
    }

    .restart {
        background-color: #F94449;
    }

    #restart {
        background-color: #F94449;
    }
`;


  constructor() {
    super();
    this._weight = 60;
    this._height = 1.5;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  bmi() {
    return this._weight / this._height**2;
  }

  _updateHeight(event) {
    this._height = event.target.value;
  }

  _updateWeight(event) {
    this._weight = event.target.value;
  }

  render() {
    return html`
    <body>
    <main class="background">
        <section class="header">
            <h1>Tic! Tac! Toe!</h1>
        </section>
        <section class="showcase">
             <span class="showcase GamerA">Gamer A's turn</span> 
        </section>
        <section class="BLOCK-CONTAINER">
            <div class="grid"></div>
            <div class="grid"></div>
            <div class="grid"></div>
            <div class="grid"></div>
            <div class="grid"></div>
            <div class="grid"></div>
            <div class="grid"></div>
            <div class="grid"></div>
            <div class="grid"></div>
        </section>
        <section class="display announcer hide"></section>
        <section class="settings">
            <button id="restart">Restart</button>
        </section>
    </main>
  </body>
`;
} 
  }


customElements.define('game-widget', GameWidget);
