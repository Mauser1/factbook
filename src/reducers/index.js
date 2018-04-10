import dummy from '../assets/data/eu.json';
import { GET_COUNTRY_DATA_START, GET_COUNTRY_DATA_FAIL, GET_COUNTRY_DATA_SUCCESS, SELECT_TOPIC} from '../config'


const initialCountryState = {
  topic: 'Introduction',
  countryData: dummy,
  error: null,
  loaded:true
};
export const country = (state = initialCountryState, action) => {
  
  switch (action.type) {
    case GET_COUNTRY_DATA_START:
      return {...state, loaded: false}
    case GET_COUNTRY_DATA_SUCCESS:
      return { ...state, countryData: action.payload, loaded: true};
    case GET_COUNTRY_DATA_FAIL:
      return { ...state, error: action.payload, loaded:true };
    case SELECT_TOPIC:
      return { ...state, topic: action.payload };
    default:
      return state;
  }
};
