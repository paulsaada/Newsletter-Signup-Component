import React, { Component } from 'react';
import Subtitle from '../containers/Subtitle Container/Subtitle';
import UserInfo from '../containers/Email Container/UserInfo';
import Privacy from '../containers/Privacy Container/Privacy'

class Form extends Component {
   state = {
      firstName: "",
      lastName: "",
      email: "",
   };

   handleSubmit = (event) => {
      event.preventDefault();
      event.stopPropagation();
      // validate current field
      return this.form.current.reportValidity();
      // bind information to state
   }

   render() {
      return (
         <div>
            <Subtitle />
            <form onSubmit={this.handleSubmit} ref={this.form}>
               <UserInfo />
               <Privacy />
            </form>
         </div>
      );
   }
}

export default Form;