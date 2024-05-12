import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import {getUser, storeUser, deleteUser} from '../auth.js';
import {BASE_URL} from '../config.js';

/**
 * LoginWidget <login-widget>
 * Present a login form and handle user authentication, if a user
 * is logged in, display their name and a logout button
 */
class LoginWidget extends LitElement {
  static properties = {
    _loginUrl: {type: String, state: true},
    _user: {type: String, state: true},
    _errorMessage: {type: String, state: true},
  };

  static styles = css`
    :host {
        display: block;
        color: #fefffe;
        line-height: 1em;
    }
    p{
      margin-bottom:5px;
    }
    button {
      background: none;
      border:none;
      padding: 0;
      font-style: italic;
      font-size: 0.9em;
      color: #c1b9b9;
      transition: 0.25s;
    }
    button:hover {
      color: #fefffe;
    }

    .field{
      box-sizing:border-box;
      border: none;
      border-radius: 3px;
      padding:7px;
      height: 25px;
      margin: 5px;
      background-color: rgba(230, 245, 245, 0.62);
      box-shadow: 3px 5px 8px #cdd6da inset;
      color: #0b2027;
      font-family:sans-serif;
      font-size:12pt;
      transition: .25s;
    }
    .field::placeholder {
      color: #0b2027;
    }

    .field:focus{
      outline: none;
      background-color: #fefffe;
    }

    #login-button{
      border: none;
      padding: 5px 10px;
      border-radius: 3px;
      background-color: #dedede;
      box-shadow: 0px 2px #6e6e6e;
      transition: 0.25s;
    }

    #login-button:hover{
      background-color: #fefefe;
    }

    #login-button:active{
      transform: translateY(2px);
      box-shadow:none;
    }
  
    `;

  constructor() {
    super();
    this._loginUrl = `${BASE_URL}users/login`;
    const user = getUser();
    if (user) {
      this._user = user;
    }
  }

  _submitForm(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    fetch(this._loginUrl, {
      method: 'post',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'},
    }).then((result) => result.json()).then((response) => {
      if (response.error) {
        this._errorMessage = response.error;
      } else {
        this._user = response;
        storeUser(response);
      }
    });
  }

  _logout() {
    deleteUser();
    this._user = null;
  }

  render() {
    if (this._user) {
      return html`<p>Logged in as ${this._user.name}</p>
              <button @click=${this._logout}>Logout</button>`;
    }
    return html`
      <p>${this._errorMessage}</p>
      <form @submit=${this._submitForm}>
          <input class="field" name="username" placeholder="Username">
          <input class="field" type="password" name="password" placeholder="Password">
          <input id="login-button" type='submit' value='Login'>
      </form>`;
  }
}

customElements.define('login-widget', LoginWidget);
