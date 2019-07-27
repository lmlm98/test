import stateStruct from '../state_struct';
// 商品列表
function goodsRender(state = stateStruct.goods,action){
    switch(action.type){
        case 'ADDPRODUCT':
            let newProducts = [...state.products,action.product]; 
            return {...state,products:newProducts}
        default:
            return state;
    }
}
export default goodsRender;