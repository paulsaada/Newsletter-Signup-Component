/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import EmailField from '../../components/email-field/email-field';
import SubmitButton from '../../components/submit-button/SubmitButton';
import './email-form.css'

class EmailForm extends Component {
   state = {
   };

   continue = e => {
      e.preventDefault();
      this.props.nextStep();
   };

   render() {
      const values = this.props;
      const handleChange = this.props;

      return (
         <div className="userInfo">
            <EmailField
               onChange={handleChange('email')}
               defaultValue={values.email}
            />
            <SubmitButton
               text="NEXT"
               onClick={this.continue}
            />
         </div>
      );
   }
}

export default EmailForm;