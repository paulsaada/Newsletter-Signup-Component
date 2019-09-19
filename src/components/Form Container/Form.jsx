import React, { Component } from 'react';
import Subtitle from '../containers/Subtitle Container/Subtitle';
import UserInfo from '../containers/Email Container/UserInfo';
import Privacy from '../containers/Privacy Container/Privacy'

class Form extends Component {
   state = {
      firstName: "",
      lastName: "",
      email: ""
   };

   render() {
      return (
         <div>
            <Subtitle />
            <form onSubmit={this.addEmail()}>
               <UserInfo />
               <Privacy />
            </form>
         </div>
      );
   }

   addEmail() {


   }
}

export default Form;