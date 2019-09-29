import React, { Component } from 'react';
import EmailField from './Email Field/EmailField';
import NameFields from './name-fields/name-fields';
import SubmitButton from './Submit Button/SubmitButton';
import './UserInfo.css'

class UserInfo extends Component {
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
            <form onSubmit="this.handleInput">
               {(!this.state.submittedEmail) ? <EmailField /> : <NameFields />}
               <SubmitButton
                  changeField={this.addNameField}
               />
            </form>
         </div>
      );
   }
}

export default UserInfo;