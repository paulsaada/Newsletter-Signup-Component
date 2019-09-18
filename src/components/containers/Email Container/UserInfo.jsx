import React, { Component } from 'react';
import EmailField from './Email Field/EmailField';
// import NameFields from './name-fields/name-fields';
import SubmitButton from './Submit Button/SubmitButton';
import './UserInfo.css'

class UserInfo extends Component {
   state = {}
   render() {
      return (
         <div className="userInfo">
            <EmailField />
            {/* <NameFields /> */}
            <SubmitButton />
         </div>
      );
   }
}

export default UserInfo;