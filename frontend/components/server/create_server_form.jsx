import React from 'react';

class CreateServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      photoFile: null,
      photoUrl: null
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
    // const server = Object.assign({}, this.state);

    const formData = new FormData();
    formData.append('server[name]', this.state.name)
    if (this.state.photoFile) {
      formData.append('server[photo]', this.state.photoFile)
    }
    
    this.props.createServer(formData).then(() => {
        this.setState({
          name: '',
          photoFile: ''
        });
        this.props.closeModal();
      })
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        photoFile: file, 
        photoUrl: fileReader.result,
      });
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    console.log(this.state);
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;

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
            <input 
              type="file" 
              name="" 
              id=""
              onChange={this.handleFile.bind(this)}
            />

            <h3>Image Preview</h3>
            {preview}
            <button
              className="create-server-button"
            >
            Create Server
            </button>

          </label>
        </form>
      </div>
    );
  }
};

export default CreateServerForm;