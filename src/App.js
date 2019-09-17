import React from 'react';
import './App.css';
import Title from './components/Title';
import Subtitle from './components/Subtitle'

class App extends React.Component {
   state = {}
   render() {
      return (
         <div>
            <Title />
            <Subtitle />
         </div>
      );
   }
}

export default App;