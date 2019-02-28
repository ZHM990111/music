import React from 'react';
import { Router } from 'dva/router';
import RouterView from './RouterView';

//路由懒加载
import dynamic from 'dva/dynamic';
//一级路由
// import HomePage from '../views/home';
const HomePage = dynamic({
  component:()=>import('../views/home')
})
//二级路由
const DiscoverPage = dynamic({
  component:()=>import('../views/home/discover')
})
// import DiscoverPage from '../views/home/discover';
//3
const Recommend = dynamic({
  component:()=>import('../views/home/discover/recommend')
})
// import Recommend from '../views/home/discover/recommend';
const LoginPage = dynamic({
  component:()=>import('../views/login')
})
// import LoginPage from '../views/login';
const PhonePage = dynamic({
  component:()=>import('../views/phone')
})
// import PhonePage from '../views/phone';
const MyPage = dynamic({
  component:()=>import('../views/home/my')
})
// import MyPage from '../views/home/my';
const AccountPage = dynamic({
  component:()=>import('../views/home/account')
})
// import AccountPage from '../views/home/account';
const Search = dynamic({
  component:()=>import('../views/search')
})
// import Search from '../views/search';
const SongPage = dynamic({
  component:()=>import('../views/song')
})
// import SongPage from '../views/song';

const ImgPage = dynamic({
  component:()=>import('../views/img')
})

let config = {
  routes: [{
    path: '/login',
    component: LoginPage
  }, {
    path: '/phone',
    component: PhonePage
  }, {
    path: '/search',
    component: Search
  }, {
    path: '/song/:id?',
    component: SongPage
  }, {
    path: '/home',
    component: HomePage,
    children: [{
      path: '/home/discover',
      component: DiscoverPage,
      children: [{
        path: '/home/discover/recommend',
        component: Recommend
      }, {
        path: '/home/discover/anchor',
        component: props => <p>{JSON.stringify(props)}</p>
      }]
    }, {
      path: '/home/video',
      component: ImgPage
    }, {
      path: '/home/friend',
      component: props => <p>{JSON.stringify(props)}</p>
    }, {
      path: '/home/my',
      component: MyPage
    }, {
      path: '/home/account',
      component: AccountPage
    }]
  }, {
    path: '*',
    redirect: '/home'
  }
  ]
}

export default function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <RouterView routes={config.routes}></RouterView>
    </Router>
  );
}
