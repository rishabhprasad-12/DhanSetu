import React from 'react'
import Hero from "./Hero";
import SignUp from './SignUp';
import Investment from './Investment';
import Steps from './Steps';
import Benefits from './Benefits';
import DiffAccountType from './DiffAccountType';
import FAQs from './FAQs';
import OpenAccount from  '../OpenAccount';

export default function SignUpPage() {
  return (
    <div>
      <Hero />
      <SignUp />
      <Investment />  
      <Steps />
      <Benefits />
      <DiffAccountType />
      <FAQs />
      <OpenAccount />
    </div>
  )
}
