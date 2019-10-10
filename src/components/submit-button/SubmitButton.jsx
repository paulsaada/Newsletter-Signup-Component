import React, { Component } from 'react';
import './SubmitButton.css';

class SubmitButton extends Component {
   state = {}

   render() {
      const { onSubmit } = this.props;

      return (
         <div onSubmit={onSubmit}>
            <button className="submitBtn">{this.props.text}</button>
         </div>
      );
   }
}

export default SubmitButton;