import React from 'react';
import CongratsUser from '../pages/congratulations';
import SubmitButton from '../components/submit-button/SubmitButton';
import '../index.css';

export default {
   title: 'Signup Form States',
};

export const userEmailCollectionState = () => (
   <div className="story-description">
      <p>UserEmailCollection</p>
      <div className="story-form-wrapper">
         <input
            className="emailField" required={true}
            type="email" id="email" name="email"
            placeholder="enter email address"
         />
         <SubmitButton text="NEXT" />
      </div>
   </div>
)

export const userNameCollectionState = () => (
   <div className="story-description">
      <p>UserNameCollection</p>
      <div className="story-form-wrapper">
         <input
            className="name" required={true}
            type="text" id="firstName" name="firstName"
            placeholder="First Name"
         />
         <input
            className="name" required={true}
            type="text" id="lastName" name="lastName"
            placeholder="Last Name"
         />
         <SubmitButton text="SUBMIT" />
      </div>
   </div>
)

export const userCongratulationsState = () => (
   <div>
      <div className="story-description">
         <p>Title component with default props that remain until the final stage of user signup.</p>
      </div>
      <div className="content">
         <CongratsUser />
      </div>
   </div>
)
