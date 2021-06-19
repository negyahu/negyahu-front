import { combineReducers } from 'redux';
import artists from './artists';
import sign from './sign';
import openModules from '../_reducers/openModules';
import keepInformation from '../_reducers/keepInfomation';

const rootReducer = combineReducers({
    artists,
    sign,
    openModules,
    keepInformation
});

export default rootReducer;