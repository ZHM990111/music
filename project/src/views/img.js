import React, { useEffect } from 'react';
import { connect } from 'dva';
import Img from './img.scss'

function ImgPages(props) {
    useEffect(() => {
        props.getBanner();
    }, [])

   function loadImg() {
        var img = this.$refs.lazy.getElementsByClassName("lazyImg"); 
        // 已滚动高度+可视区高度
        var top = this.$refs.lazy.scrollTop + this.$refs.lazy.clientHeight;
        
        for(var i = 0; i < img.length; i++) {
            if(img[i].offsetTop <= top) {  // 在可视区内则显示图片
                img[i].src = img[i].getAttribute("datasrc");
            }
        }
    }
    function lazyLoad() { 
        loadImg();
        console.log(0)
    }

    return (
        <div className={Img.img}  onScroll={() => lazyLoad()}>
            {props.index.banner.map((item, index) => {
                return <a key={index} href={item.url ? item.url : 'javascript'}>
                    <img src="##" alt={item.typeTitle} data-src="src"  />
                </a>
            })}
        </div>
    );
}


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

export default connect(mapStateToProps, mapDispatchToProps)(ImgPages);




