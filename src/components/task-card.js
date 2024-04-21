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
        display: inline-block;
        background-color: #fefffe;
        padding: 22px;
        padding-top: 2px;
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
        <h4>${this._task.summary}</h4>
        <p class='task-timestamp'>${ts.toDateString()}</p>
        <p class='task-due'>${due.toDateString()}</p>
        <p class='task-content'>${this._task.text}</p>
        <p class='task-priority'>${this._task.priority}</p>

        <edit-task id=${this.id}></edit-task>
      </div>
      `;
    } else {
      return html`<div>Loading...</div>`;
    }
  }
}
customElements.define('task-card', TaskCard);
