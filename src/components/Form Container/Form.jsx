import React, { Component } from 'react';
import Subtitle from '../containers/Subtitle Container/Subtitle';
import UserInfo from '../containers/Email Container/UserInfo';
import Privacy from '../containers/Privacy Container/Privacy'

class Form extends Component {
   state = {}
   render() {
      return (
         <div>
            <Subtitle />
            <form onSubmit={console.log("Next!")}>
               <UserInfo />
               <Privacy />
            </form>
         </div>
      );
   }
}

export default Form;