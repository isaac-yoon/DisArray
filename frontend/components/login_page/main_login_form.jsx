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
        <div className="session-form">
          <h2>Login</h2>
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

            <label className = "session-form-label">Username:
              <input
                type="text"
                className="session-form-input"
                value={this.state.username}
                onChange={this.handleInput('username')}
              />
            </label>

            <label className = "session-form-label">Password:
              <input
                type="password"
                className = "session-form-input"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>

            <br/>

            <button 
              className="session-form-button" 
              onClick={this.handleSubmit}
            >Login</button>
            
          </form>
        </div>
      </div>
    );
  }
};

export default LoginForm;