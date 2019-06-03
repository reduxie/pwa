import React, { Component } from 'react';

interface Props {
  signupUser: (un: string, pw: string) => void;
}

const SignupBox: React.FC<Props> = props => (
  <div>
    <input type="text" placeholder="username..." id="signupBoxUserName" />
    <input type="password" placeholder="password..." id="signupBoxPassword" />
    {/* React prop-types issue */}
    <button
      onClick={() => {
        const userNameText = document.getElementById(
          'signupBoxUserName'
        ) as HTMLInputElement;
        const passwordText = document.getElementById(
          'signupBoxPassword'
        ) as HTMLInputElement;
        props.signupUser(userNameText.value, passwordText.value);
      }}
    >
      Signup
    </button>
  </div>
);

export default SignupBox;
