import React, { Component } from 'react';
import Subtitle from '../components/subtitle/Subtitle';
import Privacy from '../containers/privacy/Privacy'
import EmailForm from '../containers/email-form/email-form';

class UserEmailCollection extends Component {
   state = {

   };

   continue = e => {
      e.preventDefault();
      const { nextStep } = this.props;
      nextStep();
   };

   render() {
      const { values, handleChange, nextStep } = this.props;

      return (
         <div>
            <Subtitle text="SIGN UP FOR THE TLC NEWSLETTER" />
            <form onSubmit={this.continue}>
               <EmailForm
                  values={values}
                  handleChange={handleChange}
                  nextStep={nextStep}
               />
            </form>
            <Privacy />
         </div>
      );
   }
}

export default UserEmailCollection;