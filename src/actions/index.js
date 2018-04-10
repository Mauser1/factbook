import axios from 'axios';

import { JSONLOCATION, GET_COUNTRY_DATA_START, GET_COUNTRY_DATA_FAIL, GET_COUNTRY_DATA_SUCCESS, SELECT_TOPIC } from '../config';

export const getCountryDataStart = countryAbbrev =>
  axios(`./${JSONLOCATION}/${countryAbbrev}.json`);

export const getCountryDataSuccess = data => ({
  payload: data,
  type: GET_COUNTRY_DATA_SUCCESS,
});
export const getCountryDataFail = err => ({
  payload: err,
  type: GET_COUNTRY_DATA_FAIL,
});

export const getCountryData = countryAbbrev => (dispatch) => {
  dispatch({type: GET_COUNTRY_DATA_START})
  getCountryDataStart(countryAbbrev)
    .then((result) => {
      dispatch(getCountryDataSuccess(result.data));
    })
    .catch((error) => {
      dispatch(getCountryDataFail(error.statusText));
    });
};

export const selectTopic = topic => ({ payload: topic, type: SELECT_TOPIC });
