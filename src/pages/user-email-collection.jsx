import React, { Component } from 'react';
import Subtitle from '../components/subtitle/subtitle';
import Privacy from '../containers/privacy/privacy'
import EmailForm from '../containers/email-form/email-form';

class UserEmailCollection extends Component {
   state = {

   };

   render() {
      return (
         <div>
            <Subtitle text="SIGN UP FOR THE TLC NEWSLETTER" />
            <EmailForm />
            <Privacy />
         </div>
      );
   }
}

export default UserEmailCollection;