# DisArray

[Link to DisArray](www.disarray.herokuapp.com) </br>
DisArray is a chat messaging app based closely on Discord. DisArray allows users to create servers, channels within servers, and chat with friends. I designed DisArray using Ruby on Rails and React/Redux. 

## Features
* Secure authentication for user login and signup
* Servers: creation and deletion
* Channels: creation and deletion within servers, and editing
* Supports users uploading images for their servers using Amazon Web Services
* Chatting: universal chat message room for all users using Action Cable

## Implementation
  * Conditional Rendering of Components
      There are many moving parts in DisArray. Based on whatever frontend route a user is on, certain components need to be rendered displaying information about a server, channel, or even the current user. Because there are so many moving parts, designing the overall structure of the app and making it modular in nature proved to be a challenge. I solved this using a mixture of Switch statements and component destructuring within different levels of my app. 

      ```javascript
        const App = () => (
          <div>
            <Modal />
            
            <Switch>
              <AuthRoute exact path="/" component= {Splash} />
              <AuthRoute exact path="/login" component = { MainLoginFormContainer } />
              <AuthRoute exact path="/register" component = { MainRegisterFormContainer } />
              <ProtectedRoute path="/channels/@me" component= { Main } />
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

  * Chatting
    1. Functionality
    2. Development Challenge
    3. Implementation

## Technologies
- Backend
  * Ruby on Rails
    * Action Cable
  * PostgreSQL database
  * Amazon Web Services

- Frontend
  * React/Redux
  * REACT DOM
  * React Router
  * jQuery
  * Webpack

## Future Additions
  * Enable users to join servers
  * Implement chatting within channels only rather than having a universal chat room for all users
  * Add styling and have channel messages display username and timestamp
  * Add direct messaging capabilities between users