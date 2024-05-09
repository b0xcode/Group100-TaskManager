import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


class GameWidget extends LitElement {
  static properties =  {
    GamerPlaying: { type: String },
    GameFrame: { type: Array },
    GameStatus: { type: Boolean }
  };


  constructor() {
    super();
    this.GamerPlaying = 'O';
    this.GameFrame = ['', '', '', '', '', '', '', '', ''];
    this.GameStatus = true;
  }



static styles = css`
    :host {
        display: block;
        width: 400px;
        height: 550px;
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




ManagingGameResult() {
  const victoryRequirements = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let requirement of victoryRequirements) {
    const [a, b, c] = requirement;

    if (this.GameFrame[a] && this.GameFrame[a] === this.GameFrame[b] && this.GameFrame[a] === this.GameFrame[c]) {
      return this.GameFrame[a];
    }
  }

  if (!this.GameFrame.includes('')) {
    return 'TIE :)';
  }




  return null;
}
}






  





