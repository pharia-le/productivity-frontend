import { combineReducers } from 'redux';
import logsReducer from './logsReducer';
import habitsReducer from './habitsReducer';

const rootReducer = combineReducers({
    habitsReducer,
    logsReducer
  })

export default rootReducer;