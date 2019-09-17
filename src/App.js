import React from 'react';
import './App.css';
import Title from './components/containers/Title Container/Title';
import Subtitle from './components/containers/Form Container/Subtitle';
import EmailField from './components/containers/Form Container/Email Container/EmailField';
import SubmitButton from './components/containers/Form Container/Email Container/SubmitButton';
import UserAgreement from './components/containers/Form Container/Privacy Container/UserAgreement';
import Checkbox from './components/containers/Form Container/Privacy Container/Checkbox';

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