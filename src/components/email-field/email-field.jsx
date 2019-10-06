import React, { Component } from 'react';
import './email-field.css';

class EmailField extends Component {
   state = {}
   render() {
      return (
         <div>
            <input
               className="emailField" required={true}
               type="email" id="email" name="email"
               placeholder="enter email address"
            />
         </div>
      );
   }
}

export default EmailField;