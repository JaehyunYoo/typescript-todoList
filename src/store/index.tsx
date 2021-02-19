import { combineReducers } from 'redux';
import todoListReducer from './todoReducer/reducer';
export type RootState = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({ todoListReducer });

export default rootReducer;
