import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers/main'
//这个地方需要修改，后面把所有的reducers放到index.js里面

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(reducer,applyMiddleware(thunk))