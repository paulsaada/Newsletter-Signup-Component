import React, { Component } from 'react';
import './NameField.css';

class FirstName extends Component {
   state = {}
   render() {
      return (
         <div>
            <input
               className="name" required={true}
               type="text" id="firstName" name="firstName"
               placeholder="First Name">
            </input>
         </div>
      );
   }
}

export default FirstName;