import React, { Component } from 'react';
import UserAgreement from "../../components/user-agreement/user-agreement";
import Checkbox from "../../components/checkbox/checkbox";
import './privacy.css'


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