import { getBanner } from '../services/index';

export default {

    namespace: 'index',

    state: {
        banner: []
    },

    effects: {
        *getBanner({ payload }, { call, put }) {
            let data = yield getBanner();
            yield put({
                type:'updateState',
                payload:{
                    banner:data.data.banners
                }
            })
        },
    },

    reducers: {
        updateState(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
