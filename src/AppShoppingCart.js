import React from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
class AppShoppingCart extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                商品列表
                <ProductList/>
                <hr/>
                购物车
                <ShoppingCart/>
            </div>
        )
    }
}
 
export default AppShoppingCart;