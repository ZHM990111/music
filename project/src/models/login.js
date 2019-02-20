import { login,People } from '../services/index';
import { setToken, getToken } from '../utils/index'
import { routerRedux } from 'dva/router'

export default {
    //命名空间
    namespace: 'login',
    state: {
        status: '',
        account: {}
    },
    //监听页面切换
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            return history.listen(({ pathname }) => {
                if (pathname.indexOf('/login') === -1) {
                    if (!getToken()) {
                        dispatch(routerRedux.replace({
                            pathname: `/login?redirect=${decodeURIComponent(pathname)}`,
                        }))
                    }
                }
            })
        },
    },

    //异步抄做，用generator函数去控制时序
    effects: {
        *login({ payload }, { call, put }) {
            let res = yield call(login, payload.phone, payload.passwd);
            console.log('login', login, res)
            if (res.data && res.data.code === 200) {
                setToken(res.data.account.id)
                People(res.data.account.id) 
                yield put({
                    type: 'updateState',
                    payload: { status: 'ok', account: res.data.account }
                })
            } else {
                yield put({
                    type: 'updateState',
                    payload: { status: 'fail' }
                })
            }

        },
         
    },

    reducers: {
        updateState(state, { payload }) {
            return { ...state, ...payload };
        },
    },

};
