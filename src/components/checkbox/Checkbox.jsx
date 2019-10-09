import React from 'react';
import './checkbox.css';

const Checkbox = () => {
   return (
      <div className="checkbox">
         <input type="checkbox" required={true}></input>
      </div>
   );
}

export default Checkbox;