import React from 'react';

import './App.css';

import img from './assets/hand.jpeg';
import img2 from './assets/itworks.png';

const App = () => {
  return (
    <div class="bkg_img">
      <img src={img} class="img1" />
      <div class="bro_bigtext">
        <h1> Job Me Bro! </h1>
        {/* <h4> Our Proven System WORKS!!! </h4> */}
      </div>
      <div class="bro_signup_cont">
        <div class="bro_signup">
          <h1> Sign Up Today! </h1>
          <button class="ripple"> I'm a Seeker </button>
          <button class="ripple"> I'm a Recruiter </button>
          <p> Already have an account?</p>
          <button class="ripple"> Log-In </button>
        </div>
      </div>
    </div>
  );
};

export default App;
