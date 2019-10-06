import React, { Component } from 'react';
import Subtitle from '../../components/subtitle/subtitle';
import Privacy from '../privacy/privacy'
import EmailForm from '../containers/email-form/email-form';

class UserEmailCollection extends Component {
   state = {

   };

   render() {
      return (
         <div>
            <Subtitle />
            <form onSubmit={this.handleSubmit}>
               <EmailForm />
               <Privacy />
            </form>
         </div>
      );
   }
}

export default UserEmailCollection;