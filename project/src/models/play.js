import { songDetail, songUrl } from '../services/index'

export default {
    //命名空间
    namespace: 'play',
    state: {
        mode: 0,  // 0表示单曲，1表示随机，2表示列表
        current: -1, // 当前播放歌曲下标
        song: {}, // 当前播放歌曲详情
        songs: window.localStorage.getItem('songList') && JSON.parse(window.localStorage.getItem('songList')) || []
    },
    //异步抄做，用generator函数去控制时序
    effects: {
        * songDetail({ payload }, { call, put, select }) {
            let data = yield call(songDetail, payload.ids);
            let urls = yield call(songUrl, payload.ids);
            //获取
            let state = yield select(state => state.play)
            console.log('searchResult', data, urls)
            //把播放url放到歌曲详情里面
            data.data.songs.forEach(item => {
                urls.data.data.forEach(value => {
                    if (item.id === value.id) {
                        item.url = value.url;
                    }
                }) 
            });

            if (payload.ids.indexOf(',') !== -1) {
                window.localStorage.setItem('songList',JSON.stringify(data.data.songs))
                state = {
                    songs: data.data.songs
                }
            } else {
                //获取当前播放的下标
                let current = state.songs.findIndex(item=>item.id === data.data.songs[0].id)
                //播放列表
                state = {
                    song: data.data.songs[0],
                    current
                }
            }
            yield put({
                type: 'updateState',
                payload: state
            })
            //获取整个列表的歌曲详情
        }
    },
    //同步操作
    reducers: {
        updateState(state, { payload }) {
            return { ...state, ...payload };
        },
        changeSong(state, {payload}){
            let current = 0;
            if(payload === 'prev'){
              // 上一首
              if (state.mode === 1){
                current = Math.round(Math.random()*state.songs.length);
              }else{
                current = (state.current-1+state.songs.length)%state.songs.length;
              }
            }else{
              // 下一首
              if (state.mode === 1){
                current = Math.round(Math.random()*state.songs.length);
              }else{
                current = (state.current+1)%state.songs.length;
              }
            }
            return {...state, current, song: state.songs[current]}
          }
    },

};
