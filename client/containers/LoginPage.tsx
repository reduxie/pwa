import React, { Component } from 'react';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { Redirect } from 'react-router-dom'

import SignupBox from './../components/Signup';
import LoginBox from './../components/LoginBox';

import Reduxie from 'reduxie';

import { loginUserAsync, signupUserAsync } from '../actions/actions';



const mapStateToProps = (store: any) => ({

  userId: store.user.userId,

});

const mapDispatchToProps = (dispatch: any) => ({

  loginUser : (userName: string, password: string) => {
    dispatch(loginUserAsync(userName, password));
  },

  signupUser: (userName: string, password: string) => {
    dispatch(signupUserAsync(userName, password));
  },

  getIDBState: Reduxie.GetReduxieState('mrjbabys pinterest', dispatch),

});

interface IProps {
    userId: number | undefined;
    loginUser: (name: string, pw: string) => void;
    signupUser: (name: string, pw: string) => void;
    getIDBState: () => void;
}

const LoginPage: React.FC<IProps> = (props) => {

      // hooked up!
      React.useEffect(props.getIDBState, []);

      return props.userId ?
        (<Redirect to="/home"></Redirect>) :
        (
        <div id="login">
          <h1 className="title"> Welcome to Mr. JBABY!'s Pinterest Clone! </h1>
          <LoginBox loginUser={props.loginUser} > </LoginBox>
          <SignupBox signupUser={props.signupUser}> </SignupBox>
        </div>
        )
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage);
