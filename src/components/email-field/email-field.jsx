import React, { Component } from 'react';
import './email-field.css';

class EmailField extends Component {
   state = {}
   render() {
      const { values, handleChange } = this.props;
      return (
         <div>
            <input
               className="emailField" required={true}
               type="email" id="email" name="email"
               placeholder="enter email address"
               onChange={handleChange('email')} defaultValue={values.email}
            />
         </div>
      );
   }
}

export default EmailField;