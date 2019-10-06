import React, { Component } from 'react';
import './UserAgreement.css';

class UserAgreement extends Component {
   state = {}
   render() {
      return (
         <div>
            <p className="userAgreement">
               I agree to receive information from Discovery Communications in accordance with the following Privacy Policy
            </p>
         </div>
      );
   }
}

export default UserAgreement;