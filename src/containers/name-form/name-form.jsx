import React, { Component } from 'react';
import NameFields from '../../containers/name-fields/name-fields';
import SubmitButton from '../../components/submit-button/SubmitButton';
import './name-form.css'

class NameForm extends Component {
   state = {

   };

   render() {
      return (
         <div className="nameForm">
            <NameFields />
            <SubmitButton text="SUBMIT" />
         </div>
      );
   }
}

export default NameForm;