import React, { Component } from 'react';
import './NameField.css';

class LastName extends Component {
   state = {}
   render() {
      return (
         <div>
            <input
               className="name" required="true"
               type="text" id="lastName" name="lastName"
               placeholder="Last Name">
            </input>
         </div>
      );
   }
}

export default LastName;