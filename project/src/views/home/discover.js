import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd-mobile';
import home from './discover.scss';
import { NavLink } from 'dva/router'
import RouterView from '../../routes/RouterView';

function DiscoverPage(props) {
    function goSearch() {
        props.history.push({
            pathname: '/search'
        })
    }
    return (
        <div>
            <header>
                <Icon type="search" size='sm' color='#fff' />
                <p className={home.input} onClick={() => goSearch()}>猜你喜欢  浮生</p>
                <Icon type="ellipsis" size='sm' color='#fff' />
            </header>
            <section className={home.home}>
                <div className={home.nav}>
                    <NavLink to="/home/discover/recommend">
                        <p>个性推荐</p>
                    </NavLink>
                    <NavLink to="/home/discover/anchor">
                        <p>主播电台</p>
                    </NavLink>
                </div>
                <RouterView routes={props.routes}></RouterView>
            </section>
        </div>
    );
}

export default connect(null)(DiscoverPage);

