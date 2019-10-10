import React, { Component } from 'react';
import NameFields from '../../containers/name-fields/name-fields';
import SubmitButton from '../../components/submit-button/SubmitButton';
import './name-form.css'

class NameForm extends Component {
   state = {

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
            />
         </div>
      );
   }
}

export default NameForm;