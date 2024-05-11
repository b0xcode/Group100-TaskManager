import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class MoodWidget extends LitElement {
  
    static styles = css `
    :host {
        display: block;
        width: 250px;
        height: 250px;
        background-color: lightblue;
        text-align: center;
        border-radius: 8px;
        
    }
    h2 {
        text-align: center;
        color: black;
        font-family: Papyrus;
    }

    .Happy {
      background: yellow;
      color: darkgreen;
      font-family: Papyrus;

    }

    .Sad{
      background: blue;
      color: white;
      font-family: Papyrus;
    }

    .Anger{
      background: red;
      font-family: Papyrus;
    }
    
    .Hope{
      background: MediumSpringGreen;
      font-family: Papyrus;
    }
    `
    happyButton(){
      this.style.background = 'yellow';
    }

    sadButton(){
      this.style.background = 'midnightblue';
    }

    angerButton(){
      this.style.background = 'crimson';
    }

    hopeButton(){
      this.style.background = 'lime';
    }

    connectedCallback() {
        super.connectedCallback();
        this.addeventListener('click',this.happyButton);
        this.addeventListener('click',this.sadButton);
        this.addeventListener('click',this.angerButton);
        this.addeventListener('click',this.hopeButton);
      }

    render (){
        return html`
        <h2>Mood Colour Setter</h2>
        <button class="Happy" @click=${this.happyButton}>Joy</button>
        <button class="Sad" @click=${this.sadButton} >Sadness</button>
        <button class="Anger" @click=${this.angerButton}>Anger</button>
        <button class="Hope" @click=${this.hopeButton}>Hopeful</button>
        `;
    }
}

customElements.define('mood-widget', MoodWidget);