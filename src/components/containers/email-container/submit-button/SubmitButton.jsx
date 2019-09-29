import React, { Component } from 'react';
import './SubmitButton.css';

class SubmitButton extends Component {
   state = {}

   render() {
      return (
         <div>
            <button
               className="submitBtn"
               onClick={this.props.changeField}>NEXT</button>
         </div>
      );
   }
}

export default SubmitButton;