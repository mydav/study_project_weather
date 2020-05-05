import { combineReducers } from 'redux';
import { cities, weatherData , activePlace } from './cities';

export default combineReducers({
    weatherData ,
    cities,
    activePlace
});
