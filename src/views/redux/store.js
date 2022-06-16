import {createStore,applyMiddleware,} from 'redux'
import thunk from 'redux-thunk';
// 引入 redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
// 引入reducer汇总
import { allReducer } from './reducers';



//暴露
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))