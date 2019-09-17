import React from 'react';
import './App.css';
import Title from './components/containers/Title Container/Title';
import Subtitle from './components/containers/Subtitle Container/Subtitle';
import EmailField from './components/containers/Email Container/EmailField';
import SubmitButton from './components/containers/Email Container/SubmitButton';
import Privacy from './components/containers/Privacy Container/Privacy';

class App extends React.Component {
   state = {}
   render() {
      return (
         <div>
            <Title />
            <Subtitle />
            <EmailField />
            <SubmitButton />
            <Privacy />
         </div>
      );
   }
}

export default App;