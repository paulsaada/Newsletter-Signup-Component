import React from 'react';
import UserEmailCollection from '../pages/user-email-collection';
import UserNameCollection from '../pages/user-name-collection';
import CongratsUser from '../pages/congratulations';
import '../index.css';



export default {
   title: 'Form States',
};

export const userEmailCollectionState = () => <UserEmailCollection />

export const userNameCollectionState = () => <UserNameCollection />

export const userCongratulationsState = () => <CongratsUser />
