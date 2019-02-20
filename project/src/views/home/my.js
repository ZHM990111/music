import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd-mobile';
import My from './my.scss';

function MyPage(props) {
    return (
        <div className={My.my}>
            <header className={My.header}>
                <Icon type="search" size='sm' color='#fff' />
                <p className={My.myMusic}>我的音乐</p>
                <Icon type="ellipsis" size='sm' color='#fff' />
            </header>
            <section className={My.list}>
                <ul>
                    <li>
                        <p>
                            <Icon type="search" size='md'/>
                            <span>本地音乐</span>
                        </p>
                        <p>                            
                            <span>1</span>
                            <Icon type="right" size='sm' color='#ccc' />
                        </p>
                    </li>
                    <li>
                        <p>
                            <Icon type="check-circle-o" size='md'/>
                            <span>最近播放</span>
                        </p>
                        <p>                            
                            <span>110</span>
                            <Icon type="right" size='sm' color='#ccc' />
                        </p>
                    </li>
                    <li>
                        <p>
                            <Icon type="check-circle-o" size='md'/>
                            <span>我的电台</span>
                        </p>
                        <p>                            
                            <span>1</span>
                            <Icon type="right" size='sm' color='#ccc' />
                        </p>
                    </li>
                    <li>
                        <p>
                            <Icon type="search" size='md'/>
                            <span>我的收藏</span>
                        </p>
                        <p>                            
                            <span>专辑/歌手/视频/专辑</span>
                            <Icon type="right" size='sm' color='#ccc' />
                        </p>
                    </li>
                    <li>
                        <p>
                            <Icon type="search" size='md'/>
                            <span>Sati空间</span>
                        </p>
                        <p>                            
                            <span>特别的聆听模式</span>
                            <Icon type="right" size='sm' color='#ccc' />
                        </p>
                    </li>
                </ul>
                <div className={My.create}>
                    <div className={My.top}>
                       <p>
                         <Icon type="down" size='sm' color='#666' />
                         <span>我创建的歌单</span>
                       </p>
                       <Icon type="ellipsis" size='sm' color='#666' />
                    </div>
                     <dl>
                         <dt></dt>
                         <dd>
                            <p>我喜欢的音乐</p> 
                            <p></p> 
                         </dd>
                     </dl>
                </div>
            </section>
        </div>
    );
}

MyPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);


