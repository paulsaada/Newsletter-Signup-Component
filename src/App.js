import React from 'react';
import './App.css';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import EmailField from './components/EmailField';
import SubmitButton from './components/SubmitButton';
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