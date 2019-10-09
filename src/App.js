import React from 'react';
import './App.css';
import Title from './components/title/title';
import UserNameCollection from './pages/user-name-collection';
import UserEmailCollection from './pages/user-email-collection';
import CongratsUser from './pages/congratulations';

class App extends React.Component {
   state = {
      step: 1,
      email: '',
      firstName: '',
      lastName: ''
   }

   // proceed to next step
   nextStep = () => {
      const { step } = this.state;
      this.setState({
         step: step + 1
      });
   }

   // handle change upon submit
   handleChange = input => e => {
      this.setState({ [input]: e.target.value });
   };

   // console.log user signup data
   signUp = () => {
      console.log(App.state);
   };

   render() {
      const { step, email, firstName, lastName } = this.state;
      const values = { email, firstName, lastName };

      switch (step) {
         case 1:
            return (
               <div className="appComponent">
                  <Title />
                  <UserEmailCollection
                     nextStep={this.nextStep}
                     handleChange={this.handleChange}
                     values={values}
                  />
               </div>
            )

         case 2:
            return (
               <div className="appComponent">
                  <Title />
                  <UserNameCollection
                     nextStep={this.nextStep}
                     handleChange={this.handleChange}
                     values={values}
                  />
               </div>
            )

         case 3:
            return (
               <div className="appComponent">
                  {console.log(values)}
                  <Title
                     text="Congratulations!"
                  />
                  <CongratsUser />
               </div>
            )
         default:
         // do nothing
      }
   }
}

export default App;