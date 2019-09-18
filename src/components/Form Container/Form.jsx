import React, { Component } from 'react';
import Subtitle from './containers/Subtitle Container/Subtitle';
import UserInfo from './containers/Email Container/UserInfo.jsx';

class Form extends Component {
   state = {}
   render() {
      return (
         <div>
            <Subtitle />
            <UserInfo />
         </div>
      );
   }
}

export default Form;