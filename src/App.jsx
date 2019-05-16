import React from 'react';
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import AppStyle from './css/App.scss';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

import HomeContainer from './components/home/HomeContainer.jsx';
import MovieContainer from './components/movie/MovieContainer.jsx';
import AboutContainer from './components/about/AboutContainer.jsx';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: window.location.hash.split('/')[1] || 'home'
    }
  }
  render() {
    return (
      <HashRouter>
        <Layout className="layout" style={{ height: '100%' }}>
          <Header>
            <div className={ AppStyle.logoImg } />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={ [window.location.hash.split('/')[1] === undefined ? 'home' : window.location.hash.split('/')[1]] }
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="home">
                <Link to="/home">首页</Link>
              </Menu.Item>
              <Menu.Item key="movie">
                <Link to="/movie/in_theaters/1">电影</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/about">关于</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ backgroundColor: '#fff', minHeight: 'auto' }}>
            <Switch>
              <Route path="/" exact component={HomeContainer} />
              <Route path="/home" component={HomeContainer} />
              <Route path="/movie/:type/:page" component={MovieContainer} />
              <Route path="/about" component={AboutContainer} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </HashRouter>
    );
  }
}