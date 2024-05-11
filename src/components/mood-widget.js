import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


class MoodWidget extends LitElement {
    static properties = {

    }

    static styles = css `
    :host {
        display: block;
        width: 250px;
        height: 250px;
        background-color: beige;
        text-align: center;
        
    }
    h2 {
        text-align: center;
    }

    .Happy {
      background: yellow;
      color: darkgreen;

    }

    .Sad{
      background: blue;
      color: white;
    }

    .Anger{
      background: red;
    }
    `
    connectedCallback() {
        super.connectedCallback();
      }


    render (){
        return html`
        <h2>Mood Setter</h2>
        <button class="Happy">Joy</button>
        <button class="Sad">Sadness</button>
        <button class="Anger">Anger</button>

        
        
        `;
    }





}

customElements.define('mood-widget', MoodWidget);