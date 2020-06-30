import React from 'react';

class CreateServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      photoFile: null,
      photoUrl: null,
      inviteCode: Math.random().toString(18).toUpperCase().slice(3),
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleImageClick() {
    $("#create-server-add-photo").trigger('click');
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

    formData.append('server[inviteCode]', this.state.inviteCode)
    
    this.props.createServer(formData).then(() => {
        this.setState({
          name: '',
          photoFile: '',
          inviteCode: Math.random().toString(18).toUpperCase().slice(3)
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
        
        <div id="create-server-header">
          CREATE YOUR SERVER
        </div>

        <div id="create-server-message">
          By creating a server, you will have access to free
            <br/>
          text chat to use amongst your friends.
        </div>

        <div className="create-server-inputs">
          <div className="text-input-area">
            <div id="server-name-text">
              SERVER NAME
            </div>
            <br/>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput('name')}
              placeholder="Choose a name"
              className="create-server-text-input"
            />
          </div>

          <div 
            className="image-preview"
            onClick={this.handleImageClick}
          >
            <input 
              type="file" 
              name="" 
              id="create-server-add-photo"
              onChange={this.handleFile}
              style={{display: "none"}}
            />
            <div id="actual-image-preview">
              {preview}
            </div>
          </div>
        </div>

        <div className="bottom-nav-links">
          <div
            // onClick={() => openModal('create-join-server')}
          >BACK
          </div>
          <button
            onClick={this.handleSubmit}
            className="create-server-button"
          >Create Server
          </button>
        </div>

      </div>
    );
  }
};

export default CreateServerForm;