import React from 'react';
import SubmitButton from '../components/submit-button/SubmitButton';
import Subtitle from '../components/subtitle/Subtitle';
import CongratsSubtitle from '../components/congrats-subtitle/congrats-subtitle';
import Checkbox from '../components/checkbox/Checkbox';
import UserAgreement from '../components/user-agreement/user-agreement';
import Title from '../components/title/Title';
import './story-stylesheet.css';
import '../index.css';


export default {
   title: 'Signup Form Atoms',
};

export const titleWithDefaultProps = () => (
   <div>
      <div className="story-description">
         <p>Title component with default props that remain until the final stage of user signup.</p>
      </div>
      <Title />
   </div>
)

export const titleWithCongratulationsProps = () => (
   <div>
      <div className="story-description">
         <p>Title component with congratulations text being passed down to it via props. User sees this during the final stage of signup.</p>
      </div>
      <Title text="Congratulations!" />
   </div>
)

export const buttonWithNextProps = () => (
   <div>
      <div className="story-description">
         <p>Submit button with "Next" text being passed down via props. This component is reused in later stages of user signup.</p>
      </div>
      <div className="content">
         <SubmitButton className="content" text="NEXT" />
      </div>
   </div>
)

export const buttonWithSubmitProps = () => (
   <div>
      <div className="story-description">
         <p>Submit button with "Submit" text being passed down via props. This component is being reused from an earlier stage of user signup.</p>
      </div>
      <div className="content">
         <SubmitButton className="content" text="SUBMIT" />
      </div>
   </div>
)

export const firstNameField = () => (
   <div>
      <div className="story-description">
         <p>Name field component that's used to collect user's first name during user name collection state.</p>
      </div>
      <input
         className="name content" required={true}
         type="text" id="firstName" name="firstName"
         placeholder="First Name"
      />
   </div >
)

export const lastNameField = () => (
   <div className="story-description">
      <p>Name field component that's used to collect user's last name during user's first/last name collection state.</p>
      <input
         className="name" required={true}
         type="text" id="lastName" name="lastName"
         placeholder="Last Name"
      />
   </div>
)

export const emailFieldContainer = () => (
   <div className="story-description">
      <p>Email field component that's used to collect user's email address during user email collection state.</p>
      <input
         className="emailField" required={true}
         type="email" id="email" name="email"
         placeholder="enter email address"
      />
   </div>
)

export const subtitleWithEmailPromptText = () => (
   <div className="story-description">
      <p>Subtitle component with text prompting user for an action. Text is being passed down to it via props. This particular text is for the email signup collection state.</p>
      <Subtitle text="SIGN UP FOR THE TLC NEWSLETTER" />
   </div>
)

export const subtitleWithNamePromptText = () => (
   <div className="story-description">
      <p>Subtitle component with text prompting user for an action. Text is being passed down to it via props during the user first/last name collection state.</p>
      <Subtitle text="ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME" />
   </div>
)

export const subtitleWithCongratulationsText = () => (
   <div className="story-description">
      <p>Subtitle component with user prompt text being passed down to it via props when the user has completed signing up.</p>
      <Subtitle text="THANK YOU FOR SIGNING UP!" />
   </div>
)

export const congratulationsSubheader = () => (
   <div className="story-description">
      <p>Subheader component with descriptive text when the user has finished signing up.</p>
      <CongratsSubtitle />
   </div>
)

export const checkbox = () => (
   <div className="story-description">
      <p>Checkbox component belonging to the privacy agreement. Uses native browser validation to make sure it was checked at time of signup.</p>
      <Checkbox />
   </div>
)

export const UserAgreementText = () => (
   <div className="story-description">
      <p>Text component belonging to the privacy agreement.</p>
      <UserAgreement />
   </div>
)
