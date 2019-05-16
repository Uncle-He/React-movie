import React from 'react';

import MovieItem from './MovieItem.jsx';

import fetchJSONP from 'fetch-jsonp';

import {Spin, Alert, Pagination, Row} from 'antd';

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      total: 0,
      nowPage: parseInt(props.match.params.page) || 1,
      pageSize: 12,
      movieType: props.match.params.type,
      isLoading: true
    }
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }

  componentWillMount() {
    this.getData()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      nowPage: parseInt(nextProps.match.params.page) || 1,
      isLoading: true,
      movieType: nextProps.match.params.type
    }, () => {
      this.getData()
    });

  }

  getData = () => {
    // douban API
    const start = this.state.pageSize * (this.state.nowPage - 1);
    const url = `https://api.douban.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`;

    // fetchJSONP(url)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       movies: data.subjects,
    //       total: data.total,
    //       isLoading: false
    //     })
    //   })

    // static data
    setTimeout(() => {
      const data = require('../test_data/' + this.state.movieType + '.json');
      this.setState({
        movies: data.subjects,
        total: data.total,
        isLoading: false
      })
    }, 2000)
  };
  renderList = () => {
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
          <Row gutter={24}>
            {
              this.state.movies.map((item, i) => {
                return <MovieItem {...item} key={item.id} history={this.props.history}></MovieItem>
              })
            }
          </Row>
          <Pagination defaultCurrent={this.state.nowPage} total={this.state.total} pageSize={this.state.pageSize}
                      defaultPageSize={this.state.pageSize} onChange={this.changePage} style={{textAlign: 'right'}}/>
        </div>
      )
    }
  };
  changePage = (page, pageSize) => {
    this.props.history.push('/movie/' + this.state.movieType + '/' + page)
  }
}