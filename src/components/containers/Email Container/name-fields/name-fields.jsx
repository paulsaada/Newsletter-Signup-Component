import React, { Component } from 'react';
import FirstName from './fields/FirstName';
import LastName from './fields/LastName';
import './name-fields.css';

class NameFields extends Component {
   state = {}
   render() {
      return (
         <div className="nameField">
            <FirstName />
            <LastName />
         </div>
      );
   }
}

export default NameFields;