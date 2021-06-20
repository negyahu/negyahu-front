import { combineReducers } from 'redux';
import artists from './artists';
import sign from './sign';
import openModules from './openModules';
import keepInformation from './keepInfomation';

const rootReducer = combineReducers({
    artists,
    sign,
    openModules,
    keepInformation
});

export default rootReducer;