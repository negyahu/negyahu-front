import { combineReducers } from 'redux';
import artists from './artists';
import sign from './sign';
import openModules from './openModules';

const rootReducer = combineReducers({
    artists,
    sign,
    openModules
});

export default rootReducer;