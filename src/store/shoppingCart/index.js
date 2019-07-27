import stateStruct from '../state_struct';

// 购物车
function shoppingCartRender(state = stateStruct.shoppingCart,action){
    switch(action.type){
        case 'PICKPRODUCT':  //加入购物车
            let product = action.product; //准备点击添加的商品
            let exist = false;
            let newItem = state.items.map((item,index) => {
                if(item.id === product.id){ //如果购物车的商品id和准备添加的商品id相同 count+1
                    exist = true;
                    // return {id:product.id,name:product.name,price:product.price,count:item.count + 1}
                    // 等效于上面返回的数据
                    return {...product,count:item.count + 1};
                }else{
                    return item  //返回老数组
                }
            });
            if(!exist){
                newItem.push({...product,count:1})
            }
            return {...state,items:newItem};
        default:
            return state;
    }
}
export default shoppingCartRender;