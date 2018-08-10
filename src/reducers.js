import { combineReducers } from 'redux';
import {loginReducer} from './login/loginReducer';
const rootReducer = combineReducers({
    loginReducer,
});

export default rootReducer;