import { combineReducers } from 'redux';
import user from './user';
import artists from './artists';

const rootReducer = combineReducers({
    user,
    artists
});

export default rootReducer;