import React, { Component } from 'react';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { Redirect } from 'react-router-dom'

import SignupBox from './../components/Signup';
import LoginBox from './../components/LoginBox';

import { loginUserAsync } from '../actions/actions';



const mapStateToProps = (store: any) => ({

  userId: store.user.userId,

});

const mapDispatchToProps = (dispatch: any) => ({

  loginUser : (userName: string, password: string) => {
    dispatch(loginUserAsync(userName, password));
  },

});

interface IProps {
    userId: number | undefined;
    loginUser: (name: string, pw: string) => void;
}


const LoginPage: React.FC<IProps> = (props) => {
      console.log(props);
      return props.userId ?
        (<Redirect to="/home"></Redirect>) :
        (
        <div>
          <h1> Welcome to Mr. JBABY!'s Pinterest Clone! </h1>
          <LoginBox loginUser={props.loginUser}> </LoginBox>
          <SignupBox> </SignupBox>
        </div>
  )
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage);
