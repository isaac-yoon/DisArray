import React from 'react';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.register(this.state)
      .then(() => this.props.history.push('/channels/@me'));
  }

  render() {
    return (
      <div className="main-login-form-container">
        <div className="session-form" id="main-login-form">
          <p id="main-login-form-welcome-message-1">Welcome back!</p>
          <br />
          <p id="main-login-form-welcome-message-2">We're so excited to see you again!</p>
          <form>
            <div className="session-form">
              {this.props.errors.map(error => {
                return (
                  <ul className="session-errors">
                    <li id="session-errors-error">{error}</li>
                  </ul>
                )
              })
              }
            </div>
            <br />
            <label className="session-form-label">Username:
            <br />
              <input
                type="text"
                className="session-form-input"
                id="main-login-form-username-input"
                value={this.state.username}
                onChange={this.handleInput('username')}
              />
            </label>

            <br />

            <label className="session-form-label">Email:
            <br />
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleInput('email')}
                className="session-form-input"
                id = "main-login-form-email-input"
              />
              <br />
            </label>


            <label className="session-form-label">Password:
            <br />
              <input
                type="password"
                className="session-form-input"
                id="main-login-form-password-input"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>

            <br />
            <br />
            <button
              className="session-form-button"
              onClick={this.handleSubmit}
              id="main-login-form-button"
            >Register</button>

          </form>
        </div>
      </div>
    );
  }
};

export default RegisterForm;