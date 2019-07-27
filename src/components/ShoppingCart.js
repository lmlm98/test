import React from 'react';
import {connect} from 'react-redux';
class ShoppingCart extends React.Component{
    constructor(props){
        super(props)
    }
    changeCount(n,id){
        console.log(n,id);
        // this.
    }
    render(){
        let total = 0;
        let lis = this.props.items.map((item,index) => {
            total = item.price * item.count;
            // let minusButton = null;
            // if(item.count > 1){
            //     minusButton = <button onClick={e => this.changeCount()}>-</button>
            // }
            return(
                <li key={item.id}>
                    {item.name} 价格:{item.price}元 数量:{item.count} 总计:{item.price * item.count}元
                </li>
            )
        })
        return(
            <div>
                <ul>
                    {lis}
                </ul>
                合计：{total}元
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        items:state.shoppingCart.items
    }
}
function mapDispatchToProps(dispatch){
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);