import React, { Component } from 'react';
import NameFields from '../../containers/name-fields/name-fields';
import SubmitButton from '../../components/submit-button/SubmitButton';
import './name-form.css'

class NameForm extends Component {
   state = {

   };

   signUp = e => {
      e.preventDefault();
      const { displayData } = this.props;
      displayData();
   };

   continue = e => {
      e.preventDefault();
      const { nextStep } = this.props;
      nextStep();
   };

   render() {
      const { values, handleChange } = this.props;
      return (
         <div className="nameForm">
            <NameFields
               onChange={handleChange}
               defaultValue={values.firstName && values.lastName}
            />
            <SubmitButton
               text="SIGN UP"
               onClick={this.continue}
            />
         </div>
      );
   }
}

export default NameForm;