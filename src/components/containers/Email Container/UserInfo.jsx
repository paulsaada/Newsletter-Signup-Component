import React, { Component } from 'react';
import EmailField from './Email Field/EmailField';
import NameFields from './name-fields/name-fields';
import SubmitButton from './Submit Button/SubmitButton';
import './UserInfo.css'

class UserInfo extends Component {
   state = {
      submittedEmail: false,
   };

   addNameField = () => {
      console.log("here");
      this.setState({ submittedEmail: true });
   };

   render() {
      return (
         <div className="userInfo">
            {(!this.state.submittedEmail) ? <EmailField /> : <NameFields />}
            <SubmitButton
               onClick={this.addNameField}
            />
         </div>
      );
   }
}

export default UserInfo;