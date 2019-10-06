import React, { Component } from 'react';
import UserAgreement from "./User Agreement/UserAgreement";
import Checkbox from "./Checkbox/Checkbox";
import "./Privacy.css";


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