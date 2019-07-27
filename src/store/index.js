// applyMiddleware 中间键函数 来对redux进行修饰
import {createStore,combineReducers,applyMiddleware} from 'redux';
// thunk方便处理异步
import thunk from 'redux-thunk';
import goodsRender from './product/index';
import shoppingCartRender from './shoppingCart/index';

// combineReducers用来将不同的reducer函数进行进行组合
const appRender = combineReducers({
    goods:goodsRender,
    shoppingCart:shoppingCartRender
})
//                        使用applyMiddleware(thunk) 实现异步操作      
const store = createStore(appRender,applyMiddleware(thunk));
export default store;


