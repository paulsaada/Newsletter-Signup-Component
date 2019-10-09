import React, { Component } from 'react';
import NameFields from '../../containers/name-fields/name-fields';
import SubmitButton from '../../components/submit-button/SubmitButton';
import './name-form.css'

class NameForm extends Component {
   state = {

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
               handleChange={handleChange}
               values={values}
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