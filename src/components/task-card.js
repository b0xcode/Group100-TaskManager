import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { TaskModel } from '../models.js';
import './edit-task.js';

/**
 * TaskCard <task-card id=N>
 * Display the details of the task with id N in a 'card'
 * as part of the task board
 */
class TaskCard extends LitElement {
  static properties = {
    id: 0,
    _task: { state: true },
  };

  static styles = css`
    :host {
        display: block;
        background-color: #fefffe;
        padding: 0.1px 25px 23px;
        margin-bottom: 7px;
        border-radius: 3px;
        box-shadow: 0px 2px #c1b9b9;
    }
    :host input {
        width: 5em;
    }
    .task-timestamp {
      color: #7f7979;
      font-size: smaller;
      font-style: italic;
    }
    .task-due {
     color: #b3124a;
    }
    .task-due:before {
      content: "⏰";
      display: inline-block;
    }
    :host p{
      margin: 0.5em;
    }

    #delete-task{
      color: #7f7979;
      transition: 0.25s;
      background:none;
      border:none;
      float:right;
      padding-top: 7px;
    }

    #delete-task:hover{
      color: #b3124a;
    }

    .task-content {
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      line-height: 1em;
    }
    div{
      position:relative;
    }
    .content-hover{
      display:none;
      position:absolute;
      top:70px;
      line-height: 1em;
      backdrop-filter:blur(3px);
      box-shadow: 0px 2px 8px #112d37;
      background-color:rgba(180, 195, 200, 0.7);
      padding: 10px;
      border-radius:5px;
      z-index:100;
    }

  `;

  connectedCallback() {
    super.connectedCallback();
    this._loadData();
    // set up an event listener to load new tasks when they change
    window.addEventListener('tasks', () => {
      this._loadData();
    });
  }



  _loadData() {
    this._task = TaskModel.getTask(this.id);
  }

  render() {
    if (this._task) {
      const ts = new Date(parseInt(this._task.timestamp));
      const due = new Date(parseInt(this._task.due));
      return html`
      <div>
        <div @mouseleave="${this.contentHoverLeave}" class='content-hover'>${this._task.text}</div>
        <h4>${this._task.summary}</h4>
        <p class='task-timestamp'>${ts.toDateString()}</p>
        <p class='task-due'>${due.toDateString()}</p>
        <p @mouseenter="${this.contentHoverEnter}"  class='task-content'>${this._task.text}</p>
        <p class='task-priority'>${this._task.priority}</p>

        <edit-task id=${this.id}></edit-task>
        <button id="delete-task" @click="${this._deleteTask}">Delete</button>
      </div>
      `;
    } else {
      return html`<div>Loading...</div>`;
    }
  }

  _deleteTask(){
    TaskModel.deleteTask(this.id);
  }

  contentHoverEnter(event){
    const isClamped = event.target.scrollHeight > event.target.clientHeight
    if(isClamped){
      this.renderRoot.querySelector('.content-hover').style.display = "block";
    }
  }

  contentHoverLeave(event){
    this.renderRoot.querySelector('.content-hover').style.display = "none";
  }

}
customElements.define('task-card', TaskCard);
