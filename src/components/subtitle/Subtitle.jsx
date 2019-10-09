import React, { Component } from 'react';
import './Subtitle.css';

class Subtitle extends Component {
   state = {}
   render() {
      return (
         <div>
            <p className="subtitle">{this.props.text}</p>
         </div>
      );
   }
}

export default Subtitle;