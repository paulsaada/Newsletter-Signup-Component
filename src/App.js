import React from 'react';
import './App.css';
import Title from './components/title/title';
import UserNameCollection from './pages/user-name-collection';
import UserEmailCollection from './pages/user-email-collection';
import CongratsUser from './pages/congratulations';

class App extends React.Component {
   state = {}
   render() {
      return (
         <div className="appComponent">
            <Title />
            <UserEmailCollection />
            <UserNameCollection />
            <CongratsUser />
         </div>
      );
   }
}

export default App;