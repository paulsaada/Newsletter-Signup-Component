import React, { Component } from 'react';
import './congrats-subtitle.css';

class CongratsSubtitle extends Component {
   state = {}

   static defaultProps = {
      text: "Look out for the latest news on your favorite shows"
   }

   render() {
      return (
         <div >
            <p className="text">{this.props.text}</p>
         </div >
      );
   }
}

export default CongratsSubtitle;