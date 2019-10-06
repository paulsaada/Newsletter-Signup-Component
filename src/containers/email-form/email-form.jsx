import React, { Component } from 'react';
import EmailField from '../../components/email-field/email-field';
import SubmitButton from '../../components/submit-button/SubmitButton';
import './email-form.css'

class EmailForm extends Component {
   state = {
      submittedEmail: false,
      errorMessage: "Required",
      allFieldsValid: ""
   };

   addNameField = (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ submittedEmail: true });
   };

   handleInput = (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.reportValidity();
   }

   render() {
      return (
         <div className="userInfo">
            <EmailField />
            <SubmitButton />
         </div>
      );
   }
}

export default EmailForm;