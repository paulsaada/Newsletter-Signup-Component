import React, { Component } from 'react';
import Subtitle from '../components/subtitle/Subtitle';
import Privacy from '../containers/privacy/Privacy'
import NameForm from '../containers/name-form/name-form';

class UserNameCollection extends Component {
   state = {

   };

   render() {
      const { values, handleChange, nextStep } = this.props;

      return (
         <div>
            <Subtitle text="ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME" />
            <NameForm
               values={values}
               handleChange={handleChange}
               nextStep={nextStep}
            />
            <Privacy />
         </div>
      );
   }
}

export default UserNameCollection;