import React, { Component } from 'react';
import './NameField.css';

class LastName extends Component {
   state = {}
   render() {
      const { values, handleChange } = this.props;
      return (
         <div>
            <input
               className="name" required={true}
               type="text" id="lastName" name="lastName"
               placeholder="Last Name" onChange={handleChange('lastName')}
               defaultValue={values.lastName}
            />
         </div>
      );
   }
}

export default LastName;