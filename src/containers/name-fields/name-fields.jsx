import React, { Component } from 'react';
import FirstName from '../../components/name-field/FirstName';
import LastName from '../../components/name-field/LastName';
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