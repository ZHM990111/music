import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Icon, Carousel } from 'antd-mobile';
import recomm from './recommend.scss'
//图片
import sou from '../../../assets/sou.png';
import video from '../../../assets/video_active.png';
import yin from '../../../assets/yin.png';
import audio from '../../../assets/audio.png';

function Recommend(props) {
    useEffect(() => {
        props.getBanner();
    }, [])
    return (
        <div className={recomm.recommend}>
            <Carousel autoplay={true} infinite>
                {props.index.banner.map((item, index) => {
                    return <a key={index} href={item.url ? item.url : 'javascript:void(0)'}>
                        <img src={item.imageUrl} alt={item.typeTitle} />
                    </a>
                })}
            </Carousel>
            <ul className={recomm.IconImg}>
                <li>
                    <div>
                        <img src={sou} alt='' />
                    </div>
                    <p>私人FM</p>
                </li>
                <li>
                    <div>
                        <img src={audio} alt='' />
                    </div>
                    <p>每日推荐</p>
                </li>
                <li>
                    <div>
                        <img src={yin} alt='' />
                    </div>
                    <p>歌单</p>
                </li>
                <li>
                    <div>
                        <img src={video} alt='' />
                    </div>
                    <p>排行榜</p>
                </li>
            </ul>
            <p className={recomm.listTop}>
                <b>推荐歌单</b>
                <Icon type="right" size="sm" color="#666" />
            </p>
            <div className={recomm.list}>

            </div>
        </div>
    );
}

Recommend.propTypes = {
};
const mapStateToProps = state => {
    return state
};
const mapDispatchToProps = dispatch => {
    return {
        getBanner: () => dispatch({
            type: 'index/getBanner'
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);

