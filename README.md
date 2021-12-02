# DisArray

[Link to LIVE-SITE](http://disarray.herokuapp.com/#/) </br>
DisArray is a chat messaging app based on Discord. DisArray allows users to create servers, channels within servers, and chat with friends. I designed DisArray using Ruby on Rails and React/Redux. 

## Features
* Secure authentication for user login and signup
* Servers: creation and deletion
* Channels: creation, deletion, and editing within servers, inviting other users using an invite code
* Supports users uploading images for their servers using Amazon Web Services
* Chatting: chat rooms that broadcasts to all members part of a channel that updates in real time using Action Cable

## Implementation
  * Conditional Rendering of Components <br/>
      There are many moving parts in DisArray. Based on whatever frontend route a user is on, certain components need to be rendered displaying information about a server, channel, or even the current user. Because there are so many moving parts, designing the overall structure of the app and making it modular in nature proved to be a challenge. I solved this using a mixture of Switch statements and component destructuring within different levels of my app. 

      ```javascript
        const App = () => (
          <div>
            <Modal />
            
            <Switch>
              <AuthRoute exact path="/" component= {Splash} />
              <AuthRoute exact path="/login" component = {MainLoginFormContainer} />
              <AuthRoute exact path="/register" component = {MainRegisterFormContainer} />
              <ProtectedRoute path="/channels/@me" component= {Main} />
              <Redirect path = "/" to = "/" />
            </Switch>

          </div>
        );
      ```
      This is the main app structure. Nested within the structure are multiple other sub-components that will conditionally render based on the URL. Peeking into the main component reveals...

      ```javascript
      const Main = () => {
        return(
          <div className = "main-app">
            <NavBarContainer />
            <div className = "main-app-content-page">
              <div className = "main-app-content-container">
                <div id="main-app-content-side-bar">
                  <SideBar />
                </div>
                ...
      ```

      Even more nested components. Peeking into the sidebar component reveals...

      ```javascript
      const SideBar = () => {
        return (
          <div className="main-app-side-bar">
            
            <div className="main-app-side-bar-name-container">
              <Switch>
                <ProtectedRoute path= "/channels/@me/:server_id" component = {TopContainer} />
                <ProtectedRoute exact path= "/channels/@me" component = {TopHomePage} />
              </Switch>
            </div>

            <div className="main-app-side-bar-content">
              <Switch>
                <ProtectedRoute path= "/channels/@me/:server_id" component = {ChannelIndexContainer} />
              </Switch>
            </div>

            <div className="main-app-side-bar-bottom">
              <BottomName />
            </div>

          </div>
        )
      }
      ```

      Even more subcomponents that will render conditionally based on the URL.

  * Chatting <br/>
    DisArray utilizes Action Cable, a technology that integrates Websockets into the Rails. However, it proved to be challenge to integrate Action Cable into the redux cycle. Based on the current set up of my app, sending a message through Action Cable will create messages on the Rails backend. However, it will utilize the local state of the chatroom to populate the room with chat messages. Upon the component mounting, it will fetch all the channel messages and update the channel messages slice of state. Using the redux cycle, the app will filter through all of the channel messages inside of the global state based on the server id and channel id, rendering the appropriate messages. This method will be not as efficient for larger, enterprise level projects, as filtering through the entire log of messages in order to display the appropriate channel messages will be a bottleneck on the frontend side. For the purposes of this hobby project, however, this method is adequate.

    ```javascript
      createActionCableSubscription(channelId) {
        App.seek = App.cable.subscriptions.create(
          {
            channel: "ChatChannel",
            channelId: channelId,
          },
          {
            received: data => {
              switch (data.type) {
                case 'message':
                  this.setState({
                    messages: this.state.messages.concat(data)
                  });
                  break;
              }
            },
            speak: function (data) {
              return this.perform("speak", data)
            },
          }
        );
      }
    ```

    ```javascript
      class ChatRoom extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
            messages: [],
            channelId: this.props.match.params.channelId,
          }

          this.props.fetchChannelMessages()
            .then(
              () => this.setState({
                messages: filterChannelMessages(this.props.messages, this.props.match.params.channelId) 
              })
            );

          this.bottom = React.createRef();
          this.formatTimestamp = this.formatTimestamp.bind(this);
          this.createActionCableSubscription = this.createActionCableSubscription.bind(this);
        }
    ```

## Technologies
- Backend
  * Ruby on Rails
    * Action Cable
  * PostgreSQL database
  * Amazon Web Services

- Hosting
  * Heroku

- Frontend
  * React/Redux
  * REACT DOM
  * React Router
  * jQuery
  * Webpack

## Future Additions
  - [ ] Add direct messaging capabilities between users
