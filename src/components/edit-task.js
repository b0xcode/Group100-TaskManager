import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import {TaskModel} from '../models.js';

/** EditTask <edit-task id=N>
 * Task edit for a given task id (N).  Displays as a button which when clicked
 * shows a modal dialog containing a form to update the task properties.
 * Submitting the form updates the task via the TaskModel.
 */
class EditTask extends LitElement {
  static properties = {
    id: 0,
    _task: {state: true},
  };

  static styles = css`
        button{
          border: none;
          padding: 7px;
          padding-left: 20px;
          padding-right: 20px;
          border-radius: 3px;
        }

        dialog{
          border:none;
          border-radius:5px;
          box-shadow:0px 0px 10px #112d37
          
        }

        #edit-button{
          color: #fefffe;
          background-color: #5db02d;
          box-shadow: 0px 2px #259123;
          transition: 0.25s;
        }

        #edit-button:hover{
          background-color: #259123;
        }
        
        #cancel-button{
          background: none;
          color: #7f7979;
          transition: 0.25s;
        }
        
        #cancel-button:hover{
          color: #b3124a;
        }

        form {
            display: flex;
            flex-direction: column;
            padding: 5px 40px 2px 10px;
            
        }
        form div {
            display: grid;
            grid-template-columns: 1fr 3fr;
            padding:8px 5px;
            
        }

        form div label {
          justify-self:end;
          align-self:center;
          padding-right:10px;
          color: #7f7979;
          font-style:italic;
          font-size:10pt;
        }

        form div input{
          border: none;
          border-radius: 5px;
          height: 30px;
          padding-left: 7px;
          background-color: rgba(230, 245, 245, 0.62);
          box-shadow: 3px 5px 8px #cdd6da inset;
          color: #0b2027;
          font-family:sans-serif;
          font-size:12pt;
          transition: .25s;
        }

        form div textarea{
          border: none;
          border-radius: 5px;
          height: 60px;
          resize:vertical;
          max-height:350px;
          min-height:60;
          padding: 7px;
          background-color: rgba(230, 245, 245, 0.62);
          box-shadow: 3px 5px 8px #cdd6da inset;
          color: #0b2027;
          font-family:sans-serif;
          font-size:12pt;
          transition: .25s;
        }

        form div input:focus{
          outline: none;
          background-color: #fefffe;
        }

        form div textarea:focus{
          outline: none;
          background-color: #fefffe;
        }

        input[type="submit"] {
            justify-self:end;
            padding:7px;
            padding-left: 20px;
            padding-right: 20px;
            border-radius: 3px;
            border:none;
            color: #fefffe;
            background-color: #5db02d;
            box-shadow: 0px 2px #259123;
            transition: 0.25s;
            font-size:10pt;
        }

        input[type="submit"]:hover {
            background-color: #259123;
        }
      `;

  connectedCallback() {
    super.connectedCallback();
    this._task = TaskModel.getTask(this.id);
  }

  /**
   * _submit - private method to handle form submission. Constructs
   * a new task from the form values and then updates the task via TaskModel
   * @param {Object} event - the click event
   */
  _submit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const due = new Date(formData.get('due'));
    const newTask = {
      summary: formData.get('summary'),
      text: formData.get('text'),
      priority: formData.get('priority'),
      due: due.valueOf(),
    };
    TaskModel.updateTask(this.id, newTask);
    this._hideModal(event);
  }


  /**
   * click handler for the button to show the editor dialog
   */
  _showModal() {
    const dialog = this.renderRoot.querySelector('#edit-task-dialog');
    dialog.showModal();
  }

  /**
   * click handler to close the editor dialog
   * @param {Object} event - the click event
   */
  _hideModal(event) {
    event.preventDefault();
    const dialog = this.renderRoot.querySelector('#edit-task-dialog');
    dialog.close();
  }

  render() {
    // convert due date from milliseconds time to an ISO string
    // suitable for the datetime-local form input
    const isoString = new Date(this._task.due).toISOString();
    const due = isoString.substring(0, isoString.indexOf('T') + 6);
    return html`
        <button @click=${this._showModal} id="edit-button">Edit</button>
        <dialog id="edit-task-dialog">
            <form @submit="${this._submit}">
                <div>
                    <label for="summary">Summary</label>
                    <input name="summary" value=${this._task.summary}>
                </div>
                <div>
                    <label for="text">Text</label>
                    <textarea name="text">${this._task.text}</textarea> 
                </div>
                <div>
                    <label for="priority">Priority</label>
                    <input name="priority" 
                           type="number" 
                           value=${this._task.priority}> 
                </div>
                <div>
                    <label for="due">Due</label>
                    <input name="due" type="datetime-local" value=${due}>
                </div>
                <div>
                    <button @click="${this._hideModal}" id="cancel-button">Cancel</button>
                    <input value='Update' type=submit>
                </div>
            </form>
        </dialog>`;
  }
}

customElements.define('edit-task', EditTask);
