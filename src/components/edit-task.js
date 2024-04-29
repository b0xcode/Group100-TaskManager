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
        }
        form div {
            display: grid;
            grid-template-columns: 1fr 3fr;
        }
        input[type="submit"] {
            width: 100%;
            border:none;
            color: #fefffe;
            background-color: #5db02d;
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
