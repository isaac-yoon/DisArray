import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }


  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  };

  demo(e) {
    e.preventDefault();
    const { login, clearErrors } = this.props;

    const eInput = document.getElementById('main-login-form-username-input');
    const pInput = document.getElementById('main-login-form-password-input');
    const demoEmail = "demo@user.com";
    const demoPass = "12345678";
    let ei = 0;
    let pi = 0;

    const typePass = () => {
      if (pi <= demoPass.length) {
        pInput.value = demoPass.substr(0, pi++);
        setTimeout(() => typePass(), 50);
      } else {
        setTimeout(() => login({
          username: 'DemoLogin',
          password: '123456'
        }).then(() => this.props.history.push('/channels/@me')))
      }
    }

    const typeEmail = () => {
      if (ei <= demoEmail.length) {
        eInput.value = demoEmail.substr(0, ei++);
        setTimeout(() => typeEmail(), 75);
      } else typePass()
    }

    typeEmail();
    // thanks TJ for the base code! 
    // integrating this into my code proved a bit challenging because modal forms were used but was successful!
  }

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
                id="main-login-form-username-input"
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
                id="main-login-form-password-input"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>

            <div className="main-login-form-register">
              <p id="register-message">
                Need an account?
              </p>
              &nbsp;
              &nbsp;
              <Link to="/register" id="register-button">
                Register
              </Link>

            </div>
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
              onClick={this.demo}
              id="main-login-form-demo-button"
            >Try the Demo</button>  

          </form>
        </div>
      </div>
    );
  }
};

export default LoginForm;