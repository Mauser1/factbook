import React, { Component } from 'react';

import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';

const Loading = () => (
  <CircularProgress size={60} thickness={7} />
);

class CountryDisplay extends Component {
  renderData(topicData) {
    let header;
    let paragraph;
    const parsedData = [];

    for (const topicKey in topicData) {
      if (topicData.hasOwnProperty(topicKey) && topicData[topicKey].text) {
        header = <b>{topicKey}</b>;
        parsedData.push(header);
        paragraph = <p>{topicData[topicKey].text}</p>;
        parsedData.push(paragraph);
      }
    }
    return parsedData.map(jsxData => jsxData);
  }

  render() {
    const { topic, countryData, loaded } = this.props;
    if (!loaded) {
      return <Loading />;
    }
    if (countryData) {
      return this.renderData(countryData[topic]);
    }
    return null;
  }
}

CountryDisplay.propTypes = {
  topic: PropTypes.string.isRequired,
  loaded: PropTypes.bool.isRequired,
  countryData: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
  }).isRequired
};
export default CountryDisplay;
