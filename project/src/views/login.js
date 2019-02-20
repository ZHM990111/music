import React, { Fragment } from 'react';
import { connect } from 'dva';
import Login from './login.css';
import logo1 from '../assets/logo1.png'

function LoginPage(props) {
  function login(){
    props.history.push('/phone')
  }
  return (
    <Fragment>
      <div className={Login.login}>
        <img src={logo1} alt=""/>
        <button>手机号登录</button>
        <button onClick={() => login()}>注册</button>
      </div>
    </Fragment>
  );
}

LoginPage.propTypes = {
};

export default connect()(LoginPage);
