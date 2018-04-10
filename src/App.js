import React from 'react';
import { connect } from 'react-redux';

import { Divider, Paper } from 'material-ui/';
import PropTypes from 'prop-types';
import { selectTopic, getCountryData } from './actions';

import CountrySelector from './components/CountrySelector';
import TopicSelector from './components/TopicSelector';
import CountryDisplay from './components/CountryDisplay';



const App = props => (
  <div>
    <Paper className="app">
      <h2 className="header">Factbook</h2>
      <CountrySelector getCountryData={props.getCountryData} />
      <TopicSelector className="topics" selectTopic={props.selectTopic} />
      
      <Divider />
      <CountryDisplay
        topic={props.topic}
        countryData={props.countryData}
        loaded={props.loaded}
      />
    </Paper>
  </div>
);
App.propTypes = {
  getCountryData: PropTypes.func.isRequired,
  selectTopic: PropTypes.func.isRequired,
  countryData: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
  }).isRequired,
  topic: PropTypes.string.isRequired,
  loaded:PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  countryData: state.country.countryData,
  topic: state.country.topic,
  loaded:state.country.loaded,
});
const mapDispatchToProps = dispatch => ({
  selectTopic: (topic) => {
    dispatch(selectTopic(topic));
  },
  getCountryData: (countryAbbrev) => {
    dispatch(getCountryData(countryAbbrev));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
