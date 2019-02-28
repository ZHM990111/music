import { searchHot, searchResult, searchSuggest } from '../services/index'

export default {
    //命名空间
    namespace: 'search',
    state: {
        searchResult: [],
        searchSuggest: [],
        searchHot: [],
        songCount: 0
    },
    //异步抄做，用generator函数去控制时序
    effects: {
        //热门
        *searchHot(action, { call, put }) {
            let data = yield call(searchHot);
            console.log('data', data)
            yield put({
                type: 'updateState',
                payload: {
                    searchHot: data.data.result.hots
                }
            })
        },
        //建议
        *searchSuggest({ payload }, { call, put }) {
            let data = yield call(searchSuggest, payload);
            // console.log('searchSuggest', data, payload);
            //拼接
            let suggest = [];
            let result = data.data.result;
            if (Object.keys(result).length) {
                result.order.forEach((item, index) => {
                    // 类型拼接到数据里
                    result[item].forEach(value => {
                        value.type = item
                    })
                    suggest = [...suggest, ...result[item]]
                })
            }
            yield put({
                type: 'updateState',
                payload: {
                    searchSuggest: suggest
                }
            })
        },
        * searchResult({ payload }, { call, put }) {
            let data = yield call(searchResult,payload);
            console.log('searchResult',data)
            yield put({
                type: 'updateState',
                payload: {
                    searchResult: data.data.result.songs,
                    songCount: data.data.result.songCount
                }
            })
        }
    },

    reducers: {
        updateState(state, { payload }) {
            return { ...state, ...payload };
        },
    },

};
