import React, { Component } from 'react';
import Subtitle from '../components/subtitle/subtitle';
import CongratsSubtitle from '../components/congrats-subtitle/congrats-subtitle'
import './congratulations.css';

class CongratsUser extends Component {
   state = {}
   render() {
      return (
         <div className="congrats-wrapper">
            <Subtitle
               text="THANK YOU FOR SIGNING UP!"
            />
            <CongratsSubtitle />
         </div>
      );
   }
}

export default CongratsUser;