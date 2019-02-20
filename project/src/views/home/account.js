import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Icon } from 'antd-mobile';
// import { People } from '../../services/index';
import Account from './account.scss';
import people from '../../assets/people.jpg';

function AccountPage(props) {
    // console.log('props', props)
    useEffect(() => {
        props.PeopleData();
    }, [])
    return (
        <div className={Account.account}>
            <header className={Account.header}>
                <p></p>
                <p className={Account.myMusic}>账号</p>
                <Icon type="ellipsis" size='sm' color='#fff' />
            </header>
            <section className={Account.list}>
                <div className={Account.material}>
                    <div className={Account.dl}>
                        <div className={Account.dt}>
                           <img src={people} alt=""/>
                           <p>
                             <span>张晓宇——</span>
                             <span>LV6</span>
                           </p>
                        </div>
                        <div className={Account.dd}>
                           <p>
                             <Icon type="search" size='sm' color='#000' />    
                             <span>签到</span>
                           </p>
                        </div>
                    </div>
                    <ol className={Account.dayta}>
                        <li>
                            <p>动态</p>
                            <p>1</p>
                        </li>
                        <li>
                            <p>关注</p>
                            <p>3</p>
                        </li>
                        <li>
                            <p>粉丝</p>
                            <p>1</p>
                        </li>
                        <li>
                             <Icon type="search" size='sm' color='#000' />  
                             <p>我的资料</p>
                        </li>
                    </ol>
                </div>
                <ul>
                    <li className={Account.weight}>
                        <p>
                            <Icon type="search" size='md'/>
                            <span>我的消息</span>
                        </p>
                        <p>                            
                            <span>1</span>
                            <Icon type="right" size='sm' color='#ccc' />
                        </p>
                    </li>
                    <li>
                        <p>
                            <Icon type="check-circle-o" size='md'/>
                            <span>会员中心</span>
                        </p>
                        <p>                            
                            <span></span>
                            <Icon type="right" size='sm' color='#ccc' />
                        </p>
                    </li>
                    <li>
                        <p>
                            <Icon type="check-circle-o" size='md'/>
                            <span>商城</span>
                        </p>
                        <p>                            
                            <span>1</span>
                            <Icon type="right" size='sm' color='#ccc' />
                        </p>
                    </li>
                    <li>
                        <p>
                            <Icon type="search" size='md'/>
                            <span>游戏推荐：明日之后</span>
                        </p>
                        <p>                            
                            <span>黑胶技撸狗</span>
                            <Icon type="right" size='sm' color='#ccc' />
                        </p>
                    </li>
                    <li className={Account.weight}>
                        <p>
                            <Icon type="search" size='md'/>
                            <span>在线听歌免流量</span>
                        </p>
                        <p>                            
                            <Icon type="right" size='sm' color='#ccc' />
                        </p>
                    </li>
                    <li>
                        <p>
                            <Icon type="search" size='md'/>
                            <span>设置</span>
                        </p>
                        <p>                            
                            <Icon type="right" size='sm' color='#ccc' />
                        </p>
                    </li>
                    <li>
                        <p>
                            <Icon type="search" size='md'/>
                            <span>扫一扫</span>
                        </p>
                        <p>                            
                            <Icon type="right" size='sm' color='#ccc' />
                        </p>
                    </li>
                    <li>
                        <p>
                            <Icon type="search" size='md'/>
                            <span>个性换肤</span>
                        </p>
                        <p>                            
                            <Icon type="right" size='sm' color='#ccc' />
                        </p>
                    </li>
                    <li>
                        <p>
                            <Icon type="search" size='md'/>
                            <span>夜间模式</span>
                        </p>
                        <p>                            
                            <Icon type="right" size='sm' color='#ccc' />
                        </p>
                    </li>
                </ul>
            </section>
        </div>
    );
}

AccountPage.propTypes = {
};
const mapStateToProps = state => {
    return state
};
const mapDispatchToProps = dispatch => {
    return {
        PeopleData: () => dispatch({
            type: 'index/getBanner'
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);


