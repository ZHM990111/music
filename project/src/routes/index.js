import React from 'react';
import { Router} from 'dva/router';
import RouterView from './RouterView';
//一级路由
import HomePage from '../views/home';
//二级路由
import DiscoverPage from '../views/home/discover';
//3
import Recommend from '../views/home/discover/recommend';
import LoginPage from '../views/login';
import PhonePage from '../views/phone';
import MyPage from '../views/home/my';
import AccountPage from '../views/home/account';
import Search from '../views/search';
import SongPage from '../views/song';

let config = {
    routes: [{
      path:'/login',
      component:LoginPage
    },{
      path:'/phone',
      component:PhonePage
    },{
      path:'/search',
      component:Search
    },{
      path:'/song',
      component:SongPage
    },{
      path: '/home',
      component: HomePage,
      children: [{
        path: '/home/discover',
        component: DiscoverPage,
        children:[{
          path: '/home/discover/recommend',
          component: Recommend
        },{
          path: '/home/discover/anchor',
          component: props=><p>{JSON.stringify(props)}</p>
        }]
      },{
        path: '/home/video',
        component: props=><p>{JSON.stringify(props)}</p>
      },{
        path: '/home/friend',
        component: props=><p>{JSON.stringify(props)}</p>
      },{
        path: '/home/my',
        component: MyPage
      },{
        path: '/home/account',
        component: AccountPage
      }]
    }, {
      path: '*',
      redirect: '/home'
    }]
}

export default function RouterConfig({ history }) {
    return (
      <Router history={history}>
        <RouterView routes={config.routes}></RouterView>
      </Router>
    );
  }
