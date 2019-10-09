import React, { Component } from 'react';
import './SubmitButton.css';

class SubmitButton extends Component {
   state = {}

   render() {
      const { onClick } = this.props;

      return (
         <div onClick={onClick}>
            <button className="submitBtn">{this.props.text}</button>
         </div>
      );
   }
}

export default SubmitButton;