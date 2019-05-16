import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';

import MovieList from './MovieList.jsx';
import MovieDetail from './MovieDetail.jsx';

import { Layout, Menu, Icon, notification } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Layout style={{height: '100%'}}>
        <Content>
          <Layout style={{ padding: '24px 0', background: '#fff', height: '100%' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={[this.props.match.url.split('/')[2]]}
                defaultOpenKeys={['Movie']}
                style={{ height: '100%' }}
              >
                <SubMenu key="Movie" title={<span><Icon type="laptop" />电影</span>}>
                  <Menu.Item key="in_theaters">
                    <Link to="/movie/in_theaters/1">正在热映</Link>
                  </Menu.Item>
                  <Menu.Item key="coming_soon">
                    <Link to="/movie/coming_soon/1">即将上映</Link>
                  </Menu.Item>
                  <Menu.Item key="top250">
                    <Link to="/movie/top250/1">TOP250</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="user" />暂无功能</span>}>
                  <Menu.Item key="5">待开发...</Menu.Item>
                  <Menu.Item key="6">待开发...</Menu.Item>
                  <Menu.Item key="7">待开发...</Menu.Item>
                  <Menu.Item key="8">待开发...</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />暂无功能</span>}>
                  <Menu.Item key="9">待开发...</Menu.Item>
                  <Menu.Item key="10">待开发...</Menu.Item>
                  <Menu.Item key="11">待开发...</Menu.Item>
                  <Menu.Item key="12">待开发...</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Switch>
                <Route path="/movie/detail/:id" exact component={MovieDetail} />
                <Route path="/movie/:type/:page" exact component={MovieList} />
              </Switch>
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
  componentDidMount() {
    this.openNotificationWithIcon('info')
  }
  openNotificationWithIcon = type => {
    notification[type]({
      message: '温馨提示',
      description:
        '由于数据API接口现在不可用，所以将部分数据静态化了！',
    });
  };
}