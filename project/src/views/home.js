import React from 'react';
import { Icon} from 'antd-mobile';
import RouterView from '../routes/RouterView';
import {NavLink} from 'dva/router';
import home from './home.scss';

function HomePage(props) {
    return <div className={home.wrap}>
      <RouterView routes={props.routes}></RouterView>
      <footer>
        <NavLink to="/home/discover">
         <p>
             <Icon type="search" size='sm' color='#666'/>
             <span>发现</span>
         </p>
        </NavLink>
        <NavLink to="/home/video"> 
         <p>            
             <Icon type="search" size='sm' color='#666'/>
             <span>视频</span>
         </p>
        </NavLink>
        <NavLink to="/home/friend"> 
          <p>         
             <Icon type="search" size='sm' color='#666'/>
             <span>朋友</span>
          </p>
        </NavLink>
        <NavLink to="/home/my">  
          <p>        
             <Icon type="search" size='sm' color='#666'/>
             <span>我的</span>
          </p>
        </NavLink>
        <NavLink to="/home/account"> 
          <p>       
             <Icon type="search" size='sm' color='#666'/>
             <span>账号</span>
          </p>
        </NavLink>
      </footer>
    </div>
  }

export default HomePage;
