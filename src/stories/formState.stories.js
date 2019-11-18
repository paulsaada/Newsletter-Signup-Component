import React from 'react';
import CongratsUser from '../pages/congratulations';
import Privacy from '../containers/privacy/Privacy'
import SubmitButton from '../components/submit-button/SubmitButton';
import Subtitle from '../components/subtitle/Subtitle';
import '../index.css';

export default {
   title: 'Signup Form States',
};

export const userEmailCollectionState = () => (
   <div className="story-description">
      <p>User's email address collection state</p>
      <Subtitle text="SIGN UP FOR THE TLC NEWSLETTER" />
      <form>
         <div className="story-form-wrapper">
            <input
               className="emailField" required={true}
               type="email" id="email" name="email"
               placeholder="enter email address"
            />
            <SubmitButton text="NEXT" />
         </div>
         <Privacy />
      </form>
   </div>
)

export const userNameCollectionState = () => (
   <div className="story-description">
      <p>User's first/last name collection state</p>
      <Subtitle text="ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME" />
      <form>
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
         <Privacy />
      </form>
   </div>
)

export const userCongratulationsState = () => (
   <div>
      <div className="story-description">
         <p>Users are greeted with congratulations state upon completion of signup.</p>
      </div>
      <div className="content">
         <CongratsUser />
      </div>
   </div>
)
