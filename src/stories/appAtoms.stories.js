import React from 'react';
import SubmitButton from '../components/submit-button/SubmitButton';
import FirstName from '../components/name-field/FirstName';
import LastName from '../components/name-field/LastName';
import EmailField from '../components/email-field/email-field';
import Subtitle from '../components/subtitle/Subtitle';
import CongratsSubtitle from '../components/congrats-subtitle/congrats-subtitle';
import Checkbox from '../components/checkbox/Checkbox';
import UserAgreement from '../components/user-agreement/user-agreement';
import Title from '../components/title/Title';
import '../index.css';


export default {
   title: 'Signup Form Atoms',
};

export const titleWithDefaultProps = () => <Title />

export const titleWithCongratulationsProps = () => <Title text="Congratulations!" />

export const buttonWithNextProps = () => <SubmitButton text="NEXT" />

export const buttonWithSubmitProps = () => <SubmitButton text="SUBMIT" />

export const firstNameField = () => <FirstName />

export const lastNameField = () => <LastName />

export const emailFieldContainer = () => <EmailField />

export const subtitleWithEmailPromptText = () => <Subtitle text="SIGN UP FOR THE TLC NEWSLETTER" />

export const subtitleWithNamePromptText = () => <Subtitle text="ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME" />

export const subtitleWithCongratulationsText = () => <Subtitle text="THANK YOU FOR SIGNING UP!" />

export const congratulationsSubheader = () => <CongratsSubtitle />

export const checkbox = () => <Checkbox />

export const UserAgreementText = () => <UserAgreement />
