import React from 'react';
import { action } from '@storybook/addon-actions';
import App from '../App';
import SubmitButton from '../components/submit-button/SubmitButton'
import '../index.css';

export default {
   title: 'App',
};

export const app = () => <App />

export const button = () => <SubmitButton
   text="NEXT"
   onClick={action('clicked')}
/>