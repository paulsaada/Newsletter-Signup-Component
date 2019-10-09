import React, { Component } from 'react';
import './NameField.css';

class FirstName extends Component {
   state = {}
   render() {
      const { values, handleChange } = this.props;
      return (
         <div>
            <input
               className="name" required={true}
               type="text" id="firstName" name="firstName"
               placeholder="First Name" onChange={handleChange('firstName')}
               defaultValue={values.firstName}
            />
         </div>
      );
   }
}

export default FirstName;