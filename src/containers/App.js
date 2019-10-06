import React from 'react';
import './App.css';
import Title from '../components/title/title';
import Form from './form/form'

class App extends React.Component {
   state = {}
   render() {
      return (
         <div className="appComponent">
            <Title />
            <Form />
         </div>
      );
   }
}

export default App;