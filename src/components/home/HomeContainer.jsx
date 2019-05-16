import React from 'react';

import HomeCarousel from './HomeCarousel.jsx';
import HomeStatistics from './HomeStatistics.jsx';
import HomeCalendar from './HomeCalendar.jsx';

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <HomeCarousel></HomeCarousel>
        <HomeStatistics></HomeStatistics>
        <HomeCalendar></HomeCalendar>
      </div>
    );
  }
}