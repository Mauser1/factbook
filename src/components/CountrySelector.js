import React, { Component } from 'react';
import SuperSelectField from 'material-ui-superselectfield';
import { Chip, FontIcon, Avatar } from 'material-ui/';
import PropTypes from 'prop-types';
import continents from '../assets/continents';
import countries from '../assets/countries';
import flagIconCSSCountryCodes from '../assets/flagIconCSSCountryCodes';
import '../assets/flag-icon.css';


const menuItemStyle = {
  whiteSpace: 'normal',
  display: 'flex',
  justifyContent: 'space-between',
  lineHeight: 'normal',
};
const chipAvatarStyle = {
  width: '100%',
  height: '100%',
  margin: 0,
  borderRadius: '50%',
  backgroundSize: 'cover',
};

const superSelectStyle = {
  minWidth: 250,
  margin: 10,
  width: 300,
  marginTop: 20,
  marginRight: 20,
};
// label is country
// value is country data
const selectedCountryIcon = (label, value) =>
  (label && value ? (
    <Chip style={{ margin: 5 }}>
      <Avatar
        icon={
          <FontIcon
            className={`flag-icon flag-icon-${value[
              'Alpha-2 code'
            ].toLowerCase()}`}
            style={chipAvatarStyle}
          />
        }
      />
      {label}
    </Chip>
  ) : (
    'empty state'
  ));

class CountrySelector extends Component {
  static propTypes = { getCountryData: PropTypes.func.isRequired }
  state = {
    country: {
      label: 'European Union',
      value: {
        'English short name': 'France',
        'French short name': 'France (la)',
        'Alpha-2 code': 'EU',
        'Alpha-3 code': 'EUR',
        Numeric: null,
        Capital: null,
        Continent: 4,
      },
    },
  };

  handleSelection = (values, name) => {
    if (!values) {
      return null;
    }
    this.setState({ [name]: values });
    const abbrev = values.value['Alpha-2 code'].toLowerCase();
    this.props.getCountryData(abbrev);
  };
  render() {
    const { country } = this.state;
    const countriesNodeList = continents.map((continent, continentIndex) => (
      /* eslint-disable react/no-array-index-key */

      <optgroup key={continentIndex} label={continent}>
        {countries
          .sort((a, b) => b.Continent - a.Continent)
          .filter(c => continents[c.Continent] === continent)
          .map((country, index) => {
            const countryCode = country['Alpha-2 code'].toLowerCase();
            const countryLabel = country['English short name'];
            if (!flagIconCSSCountryCodes.includes(countryCode)) return null;
     
            return (
              <div
                key={index}
                value={country}
                label={countryLabel}
                style={menuItemStyle}
              >
                <div style={{ marginRight: 10 }}>
                  <span style={{ fontWeight: 'bold' }}>{countryLabel}</span>
                  <br />
                  <span style={{ fontSize: 12 }}>{country.Capital}</span>
                </div>
                <FontIcon className={`flag-icon flag-icon-${countryCode}`} />
              </div>
            );
          })}
      </optgroup>
    ));
    return (
      <div>
        <fieldset>
          Selected: {selectedCountryIcon(country.label, country.value)}
        </fieldset>
        <SuperSelectField
          name="country"
          hintText="Select a country..."
          value={country}
          onChange={this.handleSelection}
          elementHeight={58}
          style={superSelectStyle}
        >
          {countriesNodeList}
        </SuperSelectField>
      </div>
    );
  }
}
export default CountrySelector;
