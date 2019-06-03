/* eslint-disable react/prop-types */
import React from 'react';

interface Props {
  loginUser: (un: string, pw: string) => void;
}

const LoginBox: React.FC<Props> = props => (
  <div>
    <input type="text" placeholder="username..." id="loginBoxUserName" />
    <input type="password" placeholder="password..." id="loginBoxPassword" />
    <button
      type="submit"
      onClick={() => {
        const userNameText = document.getElementById(
          'loginBoxUserName'
        ) as HTMLInputElement;
        const passwordText = document.getElementById(
          'loginBoxPassword'
        ) as HTMLInputElement;
        props.loginUser(userNameText.value, passwordText.value);
      }}
    >
      Login
    </button>
  </div>
);

export default LoginBox;
