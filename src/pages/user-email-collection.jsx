import React, { Component } from 'react';
import Subtitle from '../components/subtitle/Subtitle';
import Privacy from '../containers/privacy/Privacy'
import EmailForm from '../containers/email-form/email-form';

class UserEmailCollection extends Component {
   state = {

   };

   render() {
      const { values, handleChange, nextStep } = this.props;

      return (
         <div>
            <Subtitle text="SIGN UP FOR THE TLC NEWSLETTER" />
            <EmailForm
               values={values}
               handleChange={handleChange}
               nextStep={nextStep}
            />
            <Privacy />
         </div>
      );
   }
}

export default UserEmailCollection;