import React from 'react';

class CreateServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
    const server = Object.assign({}, this.state)
    this.props.createServer(server)
      .then(() => {
        this.setState({
          name: '',
        });
        this.props.closeModal();
      })
      // .then(() => this.props.history.push('/channels/@me'));
  }

  render() {
    return (
      <div className = "create-server-form">
        {this.props.errors.map(error => {
          return (
            <ul className="session-errors">
              <li id="session-errors-error">{error}</li>
            </ul>
          )
        })}

        <form onSubmit={this.handleSubmit}>
          <label className="create-server-label">
            <br/>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput('name')}
              placeholder="Choose a name"
              className="create-server-input"
            >
            </input>
            <br/>

            <button
              className="create-server-button"
            >
            Create Server
            </button>

          </label>
        </form>

        This is the Create Server Form
        TESTING
        TESTING

      </div>
    );
  }
};

export default CreateServerForm;