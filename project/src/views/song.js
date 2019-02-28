import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'dva';
import songStyle from './song.scss';
import { Slider, Button } from 'antd-mobile';
import { formatTime } from '../utils/index';
// import { changeExt } from 'upath';
import SongList from '../components/SongList';

function SongPage(props) {
    //播放
    let [isPlay, setIsPlay] = useState(true)
    //audio
    let audioEle = React.createRef();
    //播放进度
    let [progress, setProgress] = useState(0);
    //播放时长
    let [duration, setDuration] = useState(0);
    //播放列表
    let [songList, setSongList] = useState(0);
    //详情
    useEffect(() => {
        props.songDetail({ ids: props.match.params.id })
    }, []);
    //页面标题
    useEffect(() => {
        if (props.song.name) {
            document.title = props.song.name + '|' + props.song.alia[0]
        }
    }, [props.song]);

    //控制播放暂停
    useEffect(() => {
        if (audioEle.current) {
            isPlay ? audioEle.current.play() : audioEle.current.pause();
        }
    }, [isPlay]);

    //判断是否播放完成
    useEffect(() => {
        if (progress && (progress === duration)) {
            props.changeSong('next')
            // setIsPlay(false)
        }
    }, [progress]);

    //拖到进度条
    function progressChange(e) {
        setIsPlay(false);
        setProgress(e)
    }
    //拖动完成
    function afterChange(e) {
        audioEle.current.currentTime = e
        setIsPlay(true);
    }
    //播放
    function play() {
        setIsPlay(!isPlay);
        // console.log(audioEle.current, audioEle.current.duration, audioEle.current.currentTime);
    }
    //时间进度
    function timeUpdate() {
        setProgress(audioEle.current.currentTime)
    }
    // 开始播放音频
    function loadAudio() {
        setDuration(audioEle.current.duration);
    }
    //歌曲切换
    function changeSong(type) {
        // 单曲循环，切换歌曲时重置进度为0
        if (props.mode === 0) {
            audioEle.current.pause();
            audioEle.current.currentTime = 0;
            audioEle.current.play();
        } else {
            props.changeSong(type);
        }
    }
    //切换模式
    function changeMode() {
        props.changeMode({ mode: (props.mode + 1) % 3 })
    }
    // 如果没有数据，啥也不渲染
    if (!Object.keys(props.song).length) {
        return null;
    }
    return (
        <Fragment>
            <div className={isPlay ? songStyle.song : songStyle.disable}>
                <p style={{ backgroundImage: `url(${props.song.al.picUrl})` }}></p>
            </div>
            <div className={songStyle.bg} style={{ backgroundImage: `url(${props.song.al.picUrl})` }}>
            </div>
            {duration ? <section className={songStyle.slider}>
                <span>{formatTime(progress)}</span>
                <Slider
                    style={{ marginLeft: 10, marginRight: 10, flex: 1 }}
                    defaultValue={0}
                    value={progress}
                    min={0}
                    max={Math.round(duration)}
                    onChange={progressChange}
                    onAfterChange={afterChange}
                />
                <span>{formatTime(duration)}</span>
            </section> : null}
            <div className={songStyle.button}>
                <Button size="small" inline onClick={changeMode}>{props.mode === 0 ? '单曲循环' : props.mode === 1 ? '随机播放' : '列表循环'}</Button>
                <Button size="small" inline onClick={() => changeSong('prev')}>上一首</Button>
                <Button size="small" inline onClick={play}>{isPlay ? '暂停' : '播放'}</Button>
                <Button size="small" inline onClick={() => changeSong('next')}>下一首</Button>
                <Button size="small" inline onClick={() => setSongList(!songList)}>播放列表</Button>
            </div>
            <div className={songStyle.audio}>
                <audio src={props.song.url} autoPlay controls
                    ref={audioEle} onTimeUpdate={timeUpdate} onCanPlay={loadAudio}></audio>
            </div>
            {/* 播放列表 */}
            {songList ? <SongList songList={props.songs} current={props.current} /> : null}
        </Fragment>
    );
}

const mapStateToProps = state => {
    return state.play
}
const mapDispatchToProps = dispatch => {
    return {
        songDetail: payload => {
            dispatch({
                type: 'play/songDetail',
                payload
            })
        },
        changeSong: payload => {
            dispatch({
                type: 'play/changeSong',
                payload
            })
        },
        changeMode: payload => {
            dispatch({
                type: 'play/updateState',
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongPage);
