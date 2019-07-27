import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));
// import AppRectRedux from './AppReactRedux';
import AppShoppingCart from './AppShoppingCart';
import store from './store/index';
import {Provider} from 'react-redux';
// import {createStore} from 'redux';

// // Provider作为redux上下文对象的提供者
// import {Provider} from 'react-redux';
// function counter(state = 0, action){
//     switch(action.type){
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }
// const store = createStore(counter);

// ReactDOM.render( //将store注入到context上下文中
//     <Provider store={store}>
//         <AppRectRedux/>
//     </Provider>,   
//      document.getElementById('root')
// );

ReactDOM.render( //将store注入到context上下文中
    <Provider store={store}>
      <AppShoppingCart/>  
    </Provider>,      
     document.getElementById('root')
);
 


// import {createStore} from 'redux';
// // const {createStore} = require('redux');


// /*
// // 声明一个reducer函数,用来接收状态state和动作action,然后进行处理,返回一个新的状态给store
// // 这是一个形式为(state,action) => {newstate} 的纯函数  描述了action如何把state转变成下一个state
// function counter(state = 0,action){
//     switch(action.type){
//         case 'INCREDMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// // createStore 用来创建状态存储库  需要接收一个reducer函数
// const store = createStore(counter);

// // 订阅 状态变化,当store里的状态发生变化后 回调用回调函数
// // 可以手动订阅更新 也可以事件绑定到视图层
// store.subscribe(function(){
//     console.log(store.getState()) //返回状态存储库store里的最新状态
// });

// // 改变内部state唯一方法是dispatch一个action
// //通过状态存储库dispatch分发一个INCREDMENT action动作
// // action可以被序列化 用日记记录和储存下来 后期还可以以回放的方式执行
// store.dispatch({type:'INCREDMENT'}); //1
// store.dispatch({type:'INCREDMENT'}); //2
// store.dispatch({type:'DECREMENT'});  //1
// store.dispatch({type:'DECREMENT'});  //0
// */



// // const state = {
// //     products:[
// //         {id:'111',name:'手机',price:1000},
// //         {id:'222',name:'电脑',price:2000}
// //     ],
// //     shoppingCart:{
// //         items:[
// //             {id:'111',name:'手机',price:1000,count:1}
// //         ]
// //     }
// // }

// function exist(items,product_id){
//     let index = 0;
//     for(let item of items){
//         if(item.id === product_id){
//             return{index,item};
//         }
//         index++;
//     }
//     return false;
// }

// //               原始数据
// function product(state={products:[],shoppingCart:{items:[]}},action){
//     switch(action.type){
//         case 'ADD_PRODUCT': //添加商品  如果满足action.type等于ADD_PRODUCT 返回新的state
//         // 把原始数据state打散 将新添加的商品追加到原始数据里面  把原始的product商品数据打散 将新添加的product追加到原始的product中
//             return {...state,products:[...state.products,action.product]};
//         case 'PICK_PRODUCT': //选择商品添加到购物车
//             let items = state.shoppingCart.items; //购物车原始的数据
//             let product = action.product; //新添加的商品
//             // let newItems = [...items,{id:product.id,name:product.name,price:product.price,count:1}];
//             let newItems = [...items];
//             // 检查product是否已经在购物车中
//             let itemObj = exist(newItems,product.id);
//             if(itemObj){ //如果购物车已经有对应的商品 那么只是将count属性+1
//                 newItems[itemObj.index] = {...itemObj.item,count:itemObj.item.count + 1}
//             }else{ //否则将商品加到购物车的数组里并且count属性+1
//                 newItems.push({...product,count:1})
//             }
//             //返回新的状态对象
//             return {...state,shoppingCart:{items:newItems}}
//         default:
//             return state
//     }
// }

// const store = createStore(product);
// store.subscribe(function(){
//     console.log(store.getState());
// })

// // 添加商品action
// store.dispatch({type:'ADD_PRODUCT',product:{id:'111',name:'手机',price:1000}});
// store.dispatch({type:'ADD_PRODUCT',product:{id:'222',name:'电脑',price:2000}});
// store.dispatch({type:'ADD_PRODUCT',product:{id:'333',name:'键盘',price:500}});
// // 添加购物车 
// store.dispatch({type:'PICK_PRODUCT',product:{id:'222',name:'电脑',price:2000}});
// store.dispatch({type:'PICK_PRODUCT',product:{id:'222',name:'电脑',price:2000}});
