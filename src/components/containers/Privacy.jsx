import React, { Component } from 'react';
import "./Privacy Container/UserAgreement";
import "./Privacy Container/Checkbox";
import "./Privacy.css";
import UserAgreement from './Privacy Container/UserAgreement';
import Checkbox from './Privacy Container/Checkbox';


class Privacy extends Component {
   state = {}
   render() {
      return (
         <div className="userAgreement">
            <Checkbox />
            <UserAgreement />
         </div>
      );
   }
}

export default Privacy;