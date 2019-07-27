// 这里整个代码实现是观察者模式


class Store{  //定义一个redux存储库
    constructor(reducer,initiaState){ //构造函数 reducer参数  初始化状态参数
        this._state = initiaState;
        this.reducer = reducer;
        this._listeners = [];  //事件监听集合数组
    }
    getState(){
        return this._state; //返回store里的state
    }
    subscribe(listener){  //订阅状态变化事件
        this._listeners.push(listener);//将订阅回调函数push到事件监听集合数组中
        return () => {  //本=>函数是一个反订阅处理函数,用来删除不需要的订阅
            let position = this._listeners.indexOf(listener);
            this._listeners.splice(position)
        };
    }
    dispatch(action){  //分发一个action
        //调用reducer函数  传递state和action 返回一个新的状态  保持到store
        this._state = this.reducer(this._state,action); 
        // 循环遍历 所有监听事件 是的subscribe订阅的函数 被调用
        this._listeners.forEach(listener => {
            listener(); //执行其中一个订阅的函数
        })
    }
}

function createStore(reducer){
    return new Store(reducer);
}
function reducer(state = 0,action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

let store = createStore(reducer);
store.subscribe(function(){
    console.log('第一次',store.getState());
});
store.subscribe(function(){
    console.log('第二次',store.getState());
});

/*
//反订阅
let store = createStore(reducer);
store.subscribe(function(){
    console.log('第一次',store.getState());
})();
store.subscribe(function(){
    console.log('第二次',store.getState());
})();
let unsubscribe = store.subscribe(function(){
    console.log('第三次',store.getState());
});


unsubscribe(); 
*/
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});
store.dispatch({type:'DECREMENT'});
