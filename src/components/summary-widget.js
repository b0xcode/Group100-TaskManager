import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { TaskModel } from '../models.js';
import {BASE_URL} from '../config.js';


/**
 * WidgetBlock <widget-block header="Sample Widget">
 * Base example for a widget, used as a placeholder in design for unimplemented
 * widgets
 */
class TaskSummary extends LitElement {
  static properties = {
    header: {type: String},
    _tasks: { state: true },
    _dueToday: {state: true},
    _highestPriority: {state: true},
    _todoCount: {state:true},
    _doingCount: {state:true},
    _doneCount: {state:true},
    _totalTasks: {state:true},
  };

  static styles = css`
  :host {
    display: block;
    width: 400px;
    border: 1px solid black;
   
  }
  :host(:not([header="Widget 2"])) {
    background-color: azure;
  }
  `;

  constructor() {
    super();
    this.header = 'Task Summary';
    this._loadData();
    // set an event listener to refresh the display when the data is ready
    window.addEventListener('tasks', () => {
      this._loadData();
    });
  }

  _loadData() {
    // get the up to date task list
    this._tasks = TaskModel.getTasks();
    this._dueToday = TaskModel.getTasksForDay(new Date(Date.now()));
    this._highestPriority = TaskModel.getHighestPriority();
    this._todoCount = TaskModel.getTasks("ToDo").length;
    this._doingCount = TaskModel.getTasks("Doing").length;
    this._doneCount = TaskModel.getTasks("Done").length;
    this._totalTasks = this._doingCount + this._doneCount + this._doneCount;
    this.render();
  }



  render() {
    return html`
        <h3>${this.header}</h3>
        <div id="summary-tables">
        <table id="due-table">
            <tr>
            <th>Due Today - <span id="due-count">${this._dueToday.length} ${this._dueToday.length == 1 ? "task" : "tasks"}</span></th>
            </tr>
            ${this._dueToday.map((task) => { return html`<tr>${task.summary}</tr>`;})}
        </table>

        <table id="priority-table">
            <tr><th>Highest Priority</th></tr>
            ${this._highestPriority.map((task)=> { return html`<tr><span>${task.summary}</span></tr>`})}
        </table>
        </div>
        <div>
        <table id="status-table">
            <tr><th>Status</th></tr>
            <tr><td>Currently doing <span class="stats">${this._doingCount}</span> tasks</td></tr>
            <tr><td>Done <span class="stats">${this._doneCount}</span> tasks</td></tr>
            <tr><td><span class="stats">${this._todoCount}</span> tasks still to do</td></tr>
            <tr><td><span class="stats">${this._totalTasks}</span> total tasks</td></tr>
        </table>
        </div>
    `;
  }
}

customElements.define('summary-widget', TaskSummary);
