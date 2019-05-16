import React from 'react';

import { Carousel } from 'antd';

import '../../css/Carousel.css';

export default class HomeCarousel extends React.Component {
  constructor(porps) {
    super(porps);
    this.state = {}
  }
  render() {
    return (
      <Carousel autoplay>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    );
  }
}