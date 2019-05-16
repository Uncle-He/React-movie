import React from 'react';

import {Row, Col, Rate} from 'antd';

import '../../css/MovieItem.css';

import fczlm4 from '../../images/movieDetail.jpg';

export default class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="gutter-example">
        <Col className="gutter-row" span={6}>
          <div className="gutter-box" title={this.props.title} onClick={this.goDetail}>
            {/*<img src={item.images.small} alt=""/>*/}
            <img src={fczlm4} alt=""/>
            <h4 className="title">电影名称：{this.props.title}</h4>
            <h4>上映年份：{this.props.year}</h4>
            <h4>电影类型：{this.props.genres}</h4>
            <Rate disabled defaultValue={this.props.rating.average / 2}/>
          </div>
        </Col>
      </div>
    )
  }

  goDetail = () => {
    this.props.history.push('/movie/detail/' + this.props.id);
  }
}