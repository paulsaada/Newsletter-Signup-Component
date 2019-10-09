import React, { Component } from 'react';
import FirstName from '../../components/name-field/FirstName';
import LastName from '../../components/name-field/LastName';
import './name-fields.css';

class NameFields extends Component {
   state = {}
   render() {
      const { values, handleChange } = this.props;
      return (
         <div className="nameField">
            <FirstName
               handleChange={handleChange}
               values={values}
            />
            <LastName
               handleChange={handleChange}
               values={values}
            />
         </div>
      );
   }
}

export default NameFields;