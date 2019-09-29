import React, { Component } from 'react';
import Subtitle from '../containers/Subtitle Container/Subtitle';
import UserInfo from '../containers/Email Container/UserInfo';
import Privacy from '../containers/Privacy Container/Privacy'

class Form extends Component {
   state = {
      firstName: "",
      lastName: "",
      email: "",
      errorMessage: "Required"
   };

   handleSubmit = (event) => {
      // validate current field
      event.preventDefault();
      event.stopPropagation()

      // bind information to state
   }

   render() {
      return (
         <div>
            <Subtitle />
            <form onSubmit={this.handleSubmit}>
               <UserInfo />
               <Privacy />
            </form>
         </div>
      );
   }
}

export default Form;