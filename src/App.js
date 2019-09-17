import React from 'react';
import './App.css';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import SubmitButton from './components/SubmitButton';

class App extends React.Component {
   state = {}
   render() {
      return (
         <div>
            <Title />
            <Subtitle />
            <SubmitButton />
         </div>
      );
   }
}

export default App;