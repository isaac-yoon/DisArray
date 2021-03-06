import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => {
        this.setState({
          username: '',
          password: ''
        });
        this.props.closeModal();
        this.props.history.push('/channels/@me');
      });
  }

  componentDidMount() {
    if (this.props.formType === 'demo-login') {
      this.demo()
    }
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  demo() {
    const eInput = document.getElementById('username-input');
    const pInput = document.getElementById('password-input');
    const demoEmail = "demo@user.com";
    const demoPass = "12345678";
    let ei = 0;
    let pi = 0;

    const typePass = () => {
      if (pi <= demoPass.length) {
        pInput.value = demoPass.substr(0, pi++);
        setTimeout(() => typePass(), 50);
      } else {
        setTimeout(() => this.props.processForm({
          username: 'DemoLogin',
          password: '123456'
        }).then(() => this.props.closeModal()).then(() => this.props.history.push('/channels/@me')), 200)
      }
    }

    const typeEmail = () => {
      if (ei <= demoEmail.length) {
        eInput.value = demoEmail.substr(0, ei++);
        setTimeout(() => typeEmail(), 75);
      } else typePass()
    }

    typeEmail();
  }

  render() {
    let form;

    if (this.props.formType === 'login') {
      form =
        <form onSubmit={this.handleSubmit}>
          <label className = "session-form-label">USERNAME
            <br/>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              placeholder="Enter a username"
              className = "session-form-input"
            />
            <br/>
          </label>

          <br />

          <label className="session-form-label">PASSWORD
            <br/>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder="Enter your password"
              className="session-form-input"
            />
            <br/>
          </label>

          <br/>

          <button 
            className="session-form-button" 
            id="session-form-login-button"
          >LOGIN</button>
        </form>;
    }

    if (this.props.formType === 'demo-login') {
      form =
        <form onSubmit={this.handleSubmit}>
          <label className="session-form-label">USERNAME
            <br />
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              placeholder="Enter a username"
              className="session-form-input"
              id="username-input"
            />

            <br />
          </label>

          <br />

          <label className="session-form-label">PASSWORD
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder="Enter your password"
              className="session-form-input"
              id="password-input"
            />
            <br />
          </label>

          <br />

          <button
            onClick={this.demo}
            className="session-form-button"
            id="session-form-login-button"
          >LOGIN</button>
        </form>;
    }

    if (this.props.formType === 'signup') {
      form =
        <form onSubmit={this.handleSubmit}>
          <label className = "session-form-label">USERNAME
            <br/>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              placeholder="Choose a username"
              className="session-form-input"
            />
            <br/>
          </label>
          <br />
          <label className="session-form-label">EMAIL
            <br/>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleInput('email')}
              placeholder="Write your email"
              className="session-form-input"
            />
            <br/>
          </label>
          <br />
          <label className="session-form-label">PASSWORD
            <br/>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder="Choose a password"
              className="session-form-input"
            />
            <br/>
          </label>
          <br/>
          <button 
            className="session-form-button" 
            id="session-form-signup-button"
          >SIGN UP</button>
        </form>;
    }

    return (
      <div className="session-form">
        {this.props.errors.map(error => {
          return (
            <ul className="session-errors">
              <li id="session-errors-error">{error}</li>
            </ul>
          )
        })}
        {form}
      </div>
    );
  }
}

export default SessionForm;