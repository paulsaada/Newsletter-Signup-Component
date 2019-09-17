import React, { Component } from 'react';
import './UserAgreement.css';

class UserAgreement extends Component {
   state = {}
   render() {
      return (
         <div>
            <p className="userAgreement">
               I agree to receive information from Discovery Communications in accordance with the following <a href="index.html">Privacy Policy</a>
            </p>
         </div>
      );
   }
}

export default UserAgreement;