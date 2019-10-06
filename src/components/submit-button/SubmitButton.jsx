import React, { Component } from 'react';
import './SubmitButton.css';

class SubmitButton extends Component {
   state = {}

   render() {
      return (
         <div>
            <button className="submitBtn">{this.props.text}</button>
         </div>
      );
   }
}

export default SubmitButton;