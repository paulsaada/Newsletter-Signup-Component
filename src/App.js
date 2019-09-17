import React from 'react';
import './App.css';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import submitButton from './components/submitButton';

class App extends React.Component {
   state = {}
   render() {
      return (
         <div>
            <Title />
            <Subtitle />
            <submitButton />
         </div>
      );
   }
}

export default App;