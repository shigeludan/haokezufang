//项目根组件   路由配置页面

import React, { Component } from 'react'
import {HashRouter, BrowserRouter, Route, Link} from 'react-router-dom'

//导入页面组件
import Home from './pages/Home'
import CityList from './pages/CityList'


export default function App() {
    return (
      <HashRouter>
        {/* <Button type="primary">点我</Button> */}

        {/* 导航 */}
        <ul>
          <li>
          <Link to='/home'>首页</Link>
          </li>
          <li>
          <Link to='/citylist'>城市选择页面</Link>
          </li>
        </ul>

        {/* 路径和页面组件的关系 */}
        <Route path="/home" component={Home} />
        <Route path="/citylist" component={CityList} />
      </HashRouter>
    )
}
