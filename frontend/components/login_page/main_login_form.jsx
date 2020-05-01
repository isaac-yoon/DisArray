import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/channels/@me'));
  }

  render() {
    return (
      <div className="main-login-form-container">
        <div className="session-form" id="main-login-form">
          <p id="main-login-form-welcome-message-1">Welcome back!</p>
          <br/>
          <p id="main-login-form-welcome-message-2">We're so excited to see you again!</p>
          <form>
            <div className="session-form">
              {this.props.errors.map(error => {
                return (
                  <ul className="session-errors">
                    <li id="session-errors-error">{error}</li>
                  </ul>
                )})
              }
            </div>
              <br/>
            <label className = "session-form-label">Username:
            <br/>
              <input
                type="text"
                className="session-form-input"
                id="main-login-form-input"
                value={this.state.username}
                onChange={this.handleInput('username')}
              />
            </label>

            <br/>

            <label className = "session-form-label">Password:
            <br/>
              <input
                type="password"
                className = "session-form-input"
                id="main-login-form-input"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>

            <br/>
            <br/>
            <button 
              className="session-form-button" 
              onClick={this.handleSubmit}
              id="main-login-form-button"
            >Login</button>

            <br />
            <br />
            <button
              className="session-form-button"
              onClick={this.handleSubmit}
              id="main-login-form-button"
            >Try the Demo</button>  

          </form>
        </div>
      </div>
    );
  }
};

export default LoginForm;