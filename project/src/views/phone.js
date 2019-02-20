import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'dva';
import phoneStyle from './phone.css';
import { Icon, Toast } from 'antd-mobile';

function PhonePage(props) {
    //用useState创建用户名和密码
    let [phone, setPhone] = useState(17600194842);
    let [passwd, setPasswd] = useState('147852..');

    //用useEffect监听登录状态
    useEffect(() => {
        if (props.status === 'fail') {
            Toast.info('登陆失败!');
        } else if (props.status === 'ok') {
            let redirect = '/home/discover';
            if (props.location.search) {
                redirect = decodeURIComponent(props.location.search.replace('?redirect=', ''))
            }
            props.history.replace(redirect);
        }
    }, [props.status])

    //登录
    function submit() {
        if (!/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(phone)) {
            Toast.info('请输入正确的手机号码');
            return false;
        }
        if (!passwd) {
            Toast.info('请输入密码');
            return false;
        }
        props.dLogin({
            phone, passwd
        })
    }

    return (
        <Fragment>
            <div className={phoneStyle.login}>
                <div className={phoneStyle.top}>
                    <Icon type="left" size="md" color="#fff" />
                    <p>手机号登录</p>
                    <p></p>
                </div>
                <div className={phoneStyle.input}>
                    <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
                    <input type="text" value={passwd} onChange={e => setPasswd(e.target.value)} />
                </div>
                <button onClick={() => submit()}>登录</button>
            </div>
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        status: state.login.status
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dLogin: payload => {
            dispatch({
                type: 'login/login',
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhonePage);
