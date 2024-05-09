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
}
