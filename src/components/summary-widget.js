import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { TaskModel } from '../models.js';


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
    box-sizing:border-box;
    display: block;
    width: 400px;
    border: none;
    border-radius:5px;
    background-color: rgba(254, 255, 254, 0.52);
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 3px #fefffe;
    padding: 5px 25px 15px;
  }

  h3{
    color:#6d6a6a;
    text-align:center;
    text-shadow:0px 1px 8px #fefffe;
    font-weight:normal;
    margin:8px;
    font-size:1.3em;
  }
  table{
    padding:15px;
  }
  th{
    font-style:italic;
    color:#6d6a6a;
    font-weight: normal;
  }

  td{
    color:#0b2027;
    padding-left: 8px;
    padding-top: 6px;
    border-top: 1px dashed #7f7979;
  }

  #summary-tables{
    display:flex;
    align-items:center;
    flex-direction: row;
    justify-content: space-around;
    background-color: #e6f4f484;
    border-radius:3px;
    padding: 0px 5px;
  }

  #due-table{
    border-right: 1px dashed #7f7979;
  }

  #priority-table td{
    background-color: #fefefe88;
    padding:10px;
    border-radius:3px;
    border: 1px dashed #7f7979;
  }

  #priority-due{
    font-style:italic;
    font-size:0.8em;
    color: #6d6a6a
  }

  #status-table{
    width:100%;
    padding:0;
    padding-bottom:10px;
  }

  #status-table td{
    padding-left:28px;
  }

  #status-table span{
    color:#9a0f4d;
  }

  `;

  constructor() {
    super();
    this.header = 'Task Summary📈';
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
        <div>
        <table id="status-table">
            <tr><th>Status</th></tr>
            <tr><td>Currently doing <span>${this._doingCount}</span> ${this._doingCount == 1 ? "task" : "tasks"}</td></tr>
            <tr><td>Done <span>${this._doneCount}</span> ${this._doneCount == 1 ? "task" : "tasks"}</td></tr>
            <tr><td><span>${this._todoCount}</span> ${this._todoCount == 1 ? "task" : "tasks"} still to do</td></tr>
            <tr><td><span>${this._totalTasks}</span> total ${this._totalTasks == 1 ? "task" : "tasks"}</td></tr>
        </table>
        </div>
        <div id="summary-tables">
        <table id="due-table">
            <tr>
            <th>Due Today - <span id="due-count">${this._dueToday.length} ${this._dueToday.length == 1 ? "task" : "tasks"}</span></th>
            </tr>
            ${this._dueToday.map((task) => { return html`<tr><td>${task.summary}</td></tr>`;})}
        </table>

        <table id="priority-table">
            <tr><th>Highest Priority</th></tr>
            ${this._highestPriority.map((task)=> { return html`<tr><td>${task.summary}<br>
            <span id="priority-due">Due ${new Date(parseInt(task.due)).toLocaleDateString()}</span></td></tr>`})}
        </table>
        </div>
    `;
  }
}

customElements.define('summary-widget', TaskSummary);
