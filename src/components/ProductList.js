import React from 'react';
import {connect} from 'react-redux';
class ProductList extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
        this.idRef = React.createRef();
        this.nameRef = React.createRef();
        this.priceRef = React.createRef();
        
    }
    addProduct(){
        let product = {
            id:this.idRef.current.value,
            name:this.nameRef.current.value,
            price:this.priceRef.current.value,
        };
        this.idRef.current.value = '';
        this.nameRef.current.value = '';
        this.priceRef.current.value = '';
        this.props.addProduct(product);
    }
    render(){
        const lis = this.props.products.map((product,index) => {
            return (
                <li key={product.id}>
                    {product.name} 价格:{product.price}元 &emsp;
                    {/* <button>-</button>
                    <input type="text" value={product.count} style={{width:'20px',textAlign:'center'}}/>
                    <button>+</button>&emsp; */}
                    <button onClick={e => this.props.pickProduct(product)}>添加购物车</button>
                </li>
            )
        })
        return(
            <div>
                id:  <input ref={this.idRef} type="text"/><br/>
                name:<input ref={this.nameRef} type="text"/><br/>
                price:<input ref={this.priceRef} type="text"/><br/>
                <button onClick={e => this.addProduct()}>添加商品</button>
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }
} 

function mapStateToProps(state){
    return {
        products:state.goods.products
    }
}

function postAddProduct(product){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({...product,id:'123'})
        },1000)
    })
}
function mapDispatchToProps(dispatch){
    return {
        pickProduct(product){
            dispatch({type:'PICKPRODUCT',product:product})
        },
        // addProduct(product){
        //     dispatch({type:'ADDPRODUCT',product:product})
        // }

        // 异步操作
        async addProduct(product){
            // 当dispatch接收到的是一个回调函数 那么dispatch返回Promise
            // 第一种
            // dispatch((dispatch,getState) => {
            //     return postAddProduct(product).then(function(result){
            //         dispatch({type:'ADDPRODUCT',product:result})
            //     });
            // }).then(function(){
            //     console.log('Done!')
            // })

            // 第二种 更简洁
            await dispatch(async (dispatch,getState) => {
                let result = await postAddProduct(product);
                dispatch({type:'ADDPRODUCT',product:result});
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList)