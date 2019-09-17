import React, { Component } from 'react';
import EmailField from './Email Field/EmailField';
import SubmitButton from './Submit Button/SubmitButton';
import './UserInfo.css'

class UserInfo extends Component {
   state = {}
   render() {
      return (
         <div className="userInfo">
            <EmailField />
            <SubmitButton />
         </div>
      );
   }
}

export default UserInfo;