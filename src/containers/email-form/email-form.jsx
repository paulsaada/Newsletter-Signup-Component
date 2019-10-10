/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import EmailField from '../../components/email-field/email-field';
import SubmitButton from '../../components/submit-button/SubmitButton';
import './email-form.css'

class EmailForm extends Component {
   state = {
   };

   render() {
      const { values, handleChange } = this.props;

      return (
         <div className="userInfo">
            <EmailField
               handleChange={handleChange}
               values={values}
            />
            <SubmitButton
               text="NEXT"
            />
         </div>
      );
   }
}

export default EmailForm;