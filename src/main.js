import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import './components/widget-block.js';
import './components/blog-block.js';
import './components/widget-container.js';
import './components/ad-widget.js';
import './components/login-widget.js';
import './components/task-manager.js';
import './components/game-widget.js';
import './components/summary-widget.js';
import './components/mood-widget.js';
import './components/calendar-widget.js';



import './components/create-task.js';
/**
 * Comp2110TaskManager component constructs the main UI of the application
 */
class Comp2110TaskManager extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    :host {
      min-height: 100vh;   
      font-size: 12pt;
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      
    }

    main {
      display: flex;
      justify-content: space-around;
      display: -webkit-flex;
      flex-direction: row;
      margin-top: 100px;
      padding-left: 30px;
      padding-right: 30px;
    }

    header {
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      justify-content: space-around;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      align-items: center;
      background: radial-gradient(ellipse at top, rgba(5, 20, 24, 0.62), rgba(63, 67, 107, 0.62));
      backdrop-filter: blur(5px);
      box-shadow: 0px 2px 8px #112d37;
      z-index: 100;
    }
    
    header>h2 {
      flex-grow: 0.1;
      padding: 2px;
      padding-top: 10px;
      padding-left: 50px;
      color: #fefffe;
      font-size: 1.5em;
      font-family: tahoma;
      text-shadow: -2px 2px 5px #112d37;
    }
    
    header>h2:before {
      content: "📝";
    }
    
    create-task{
      margin-right:auto;
    }

    login-widget{
      margin-right:auto;
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      padding: 10px;
      text-align: center;
      text-shadow: -2px 2px 3px #0b2027;
      opacity: 0.7;
      color: #ede3e3;
    }

    .app-footer a {
      margin-left: 5px;
    }
    
    #ad-block{
      display:flex;
      gap:5px;
    }

  `;

  constructor() {
    super();
    this.header = 'COMP2110 Task Manager';
  }

  render() {
    return html`
      <header>
        <h2>${this.header}</h2>
        <create-task></create-task>
        <login-widget></login-widget>
      </header>

      <main>      
        <task-manager></task-manager>     
        <widget-container class="widget-container" header="Widgets">
          <summary-widget></summary-widget>
          <div id="ad-block"><mood-widget></mood-widget><ad-widget></ad-widget></div>
          <calendar-widget></calendar-widget>
          <game-widget></game-widget>
        </widget-container>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}




customElements.define('comp2110-task-manager', Comp2110TaskManager);
