import React from 'react';
import './App.css';
import Title from './components/containers/Title Container/Title';
import Subtitle from './components/containers/Subtitle Container/Subtitle';
import Privacy from './components/containers/Privacy Container/Privacy';
import UserInfo from './components/containers/Email Container/UserInfo'

class App extends React.Component {
   state = {}
   render() {
      return (
         <div>
            <Title />
            <Subtitle />
            <UserInfo />
            <Privacy />
         </div>
      );
   }
}

export default App;