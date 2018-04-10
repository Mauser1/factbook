import React from 'react';
import PropTypes from 'prop-types';

const topics = [
  'Introduction',
  'Geography',
  'People and Society',
  'Government',
  'Economy',
  'Energy',
  'Communications',
  'Transportation',
  'Military and Security',
  'Transnational Issues',
];
const topicListStyle = {
  listStyle: 'none',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center'
};

const liStyle = {
  textDecoration: 'underline',
  cursor: 'pointer',
  marginLeft: 10,
};
/*eslint-disable */

const TopicSelector = props => (
  <ul style={topicListStyle}> 
    {topics.map(topic => (
      <li
        style={liStyle}
        onClick={() => {
            props.selectTopic(topic);
          }}
      >
        {topic}
      </li>
      ))}
  </ul>
);

TopicSelector.propTypes = {
  selectTopic: PropTypes.func.isRequired,
};

export default TopicSelector;
