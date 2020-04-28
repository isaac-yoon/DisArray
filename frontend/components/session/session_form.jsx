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
    this.props.processForm(user);
    this.setState({
      username: '',
      password: ''
    });
    this.props.closeModal();
  }

  render() {
    let header;
    let form;

    if (this.props.formType === 'login') {
      header = <h2>Login</h2>;

      form =
        <form onSubmit={this.handleSubmit}>
          <label className = "session-form-label">USERNAME
            <br/>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              placeholder="enter a username"
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
              placeholder="enter your password"
              className="session-form-input"
            />
            <br/>
          </label>

          <br/>

          <button>LOGIN</button>
        </form>;
    }

    if (this.props.formType === 'signup') {
      header = <h2>SignUp</h2>;

      form =
        <form onSubmit={this.handleSubmit}>
          <label className = "session-form-label">USERNAME
            <br/>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              placeholder="choose a username"
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
              placeholder="write your email"
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
              placeholder="choose a password"
              className="session-form-input"
            />
            <br/>
          </label>
          <br/>
          <button>SIGN UP</button>
        </form>;
    }

    return (
      <div className="session-form">
        {this.props.errors.map(error => {
          return (
            <strong>
              {error}
            </strong>
          )
        })}
        {header}
        {form}
      </div>
    );
  }
}

export default SessionForm;