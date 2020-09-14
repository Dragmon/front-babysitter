import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import App from './App';
import Auth0ProviderWithHistory from './utils/Auth0ProviderWithHistory';
import { BrowserRouter as Router } from 'react-router-dom';
import ListUsersContext from './components/Contex/ListUsersContext';
import UserContext from './components/Contex/UserContext';
/* import * as serviceWorker from './serviceWorker'; */

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <ListUsersContext>
        <UserContext>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </UserContext>
      </ListUsersContext>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
