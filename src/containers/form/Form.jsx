import React, { Component } from 'react';
import Subtitle from '../../components/subtitle/subtitle';
import UserInfo from '../user-info/user-info';
import Privacy from '../privacy/privacy'

class Form extends Component {
   state = {
      firstName: "",
      lastName: "",
      email: "",
   };

   handleSubmit = (event) => {
      // prevent refresh
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