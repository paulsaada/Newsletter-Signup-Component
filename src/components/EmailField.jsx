import React, { Component } from 'react';
import './EmailField.css';

class EmailField extends Component {
   state = {}
   render() {
      return (
         <div>
            <input
               className="emailField" required="true"
               type="email" id="email" name="email"
               placeholder="enter email address"></input>
         </div>
      );
   }
}

export default EmailField;