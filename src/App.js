import React from 'react';
import './App.css';
import Title from './components/containers/Title Container/Title';
import Subtitle from './components/containers/Privacy Container/Subtitle';
import EmailField from './components/containers/Email Container/EmailField';
import SubmitButton from './components/containers/Email Container/SubmitButton';
import UserAgreement from './components/containers/Privacy Container/UserAgreement';
import Checkbox from './components/containers/Privacy Container/Checkbox';

class App extends React.Component {
   state = {}
   render() {
      return (
         <div>
            <Title />
            <Subtitle />
            <EmailField />
            <SubmitButton />
            <UserAgreement />
            <Checkbox />
         </div>
      );
   }
}

export default App;