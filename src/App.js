import React from 'react';
import './App.css';
import Title from './components/title/title';
// import UserEmailCollection from './pages/user-email-collection';
import UserNameCollection from './pages/user-name-collection';

class App extends React.Component {
   state = {}
   render() {
      return (
         <div className="appComponent">
            <Title />
            <UserNameCollection />
         </div>
      );
   }
}

export default App;