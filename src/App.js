import React from 'react';
import './App.css';
import Title from './components/containers/Title Container/Title';
import Form from './components/containers/Form Container/Form'

class App extends React.Component {
   state = {}
   render() {
      return (
         <div>
            <Title />
            <Form />
         </div>
      );
   }
}

export default App;