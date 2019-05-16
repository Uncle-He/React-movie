import React from 'react';

import {Button, Icon, Alert, Spin, Typography, List, Avatar } from 'antd';
const { Paragraph } = Typography;
const ButtonGroup = Button.Group;

import mediaImg from '../../images/media.jpg';
import '../../css/MovieDetail.css';

import fetchJSONP from 'fetch-jsonp';

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      renderInfo: [
        {
          title: '',
          description: ''
        }
      ],
      isLoading: true
    }
  }
  render() {
    return this.renderInfo()
  }
  componentWillMount() {
    // douban API

    // const url = `https://api.douban.com/v2/movie/subject/${this.props.match.params.id}`;
    // fetchJSONP(url)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       info: data,
    //       isLoading: false
    //     })
    //   })

    // static data
    setTimeout(() => {
      const data = require('../test_data/detail.json');

      data.subjects.forEach( item => {
        if (item.id == this.props.match.params.id) {
          this.setState({
            info: item,
            renderInfo: [
              {
                title: item.title,
                detailInfo: (
                  <div>
                    <p>导演：{item.directors[0].name}</p>
                    <p>
                      主演：
                      {
                        item.casts.map(item => {
                          return item.name
                        }).join(' / ')
                      }
                    </p>
                    <p>
                      类型：{item.genres.join(' / ')}
                    </p>
                  </div>
                )
              }
            ],
            isLoading: false
          })
        }
      })

    },2000)

  }

  renderInfo = () => {
    if (this.state.isLoading) {
      return (
        <Spin tip="Loading...">
          <Alert
            message="精彩内容马上呈现"
            description="已启用火力全开模式，全力加载数据中..."
            type="info"
          />
        </Spin>
      )
    } else {
      return (
        <div>
          <ButtonGroup onClick={this.goBack}>
            <Button type="primary">
              <Icon type="left" />
              Go back
            </Button>
          </ButtonGroup>
          <List
            style={{ marginTop: '50px'}}
            itemLayout="vertical"
            dataSource={this.state.renderInfo}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={mediaImg} />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.detailInfo}
                />
              </List.Item>
            )}
          />
          <Typography style={{textAlign: 'center'}}>
            <Paragraph>
              超人离去，举世陷入哀悼之中。可是世界并未就此和平，恶势力蠢蠢欲动，犯罪气焰重新抬头。更为糟糕的是，来自远古的可怕威胁正渐渐逼近。在很久很久以前，亚特兰蒂斯人、亚马逊人和神族联合对抗邪恶的荒原狼。历经艰苦的斗争，荒原狼最终战败，被迫流放，而他留在地球上的三个盒子则分别由亚特兰蒂斯人、亚马逊人和普通人类看管。如今荒原狼卷土重来，地球被邪恶的阴影笼罩。值此危急关头，神奇女侠戴安娜（盖尔·加朵 Gal Gadot 饰）、蝙蝠侠布鲁斯·韦恩（本·阿弗莱克 Ben Affleck 饰）、海王（杰森·莫玛 Jason Momoa 饰）、闪电侠（埃兹拉·米勒 Ezra Miller 饰）、钢骨维克多·斯通（雷·费舍尔 Ray Fisher 饰）等五名正义战士走到一起。
              他们结成正义联盟，与荒原狼大军展开殊死之战……
            </Paragraph>
          </Typography>
        </div>
      )
    }
  };
  goBack = () => {
    this.props.history.go(-1);
  }
}