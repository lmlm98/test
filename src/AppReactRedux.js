import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
            <div>
                {this.props.count}
                <button onClick={e => this.props.delCount()}>-</button>
                <button onClick={e => this.props.addCount()}>+</button>
            </div>
        )
    }
}
// 将state数据映射为组件的props参数 从函数的语义中可以理解映射state到props
function mapStateToProps(state){
    return{ 
        count:state
    }
}
//将dispatch映射为组件的props参数
function mapDispatchToProps(dispatch){
    return{ 
        addCount(){
            dispatch({type:'INCREMENT'})
        },
        delCount(){
            dispatch({type:'DECREMENT'})
        }
    }
}
// 组件连接器       connect函数将两个映射方法连接到一块 返回一个高阶函数
const componentConnector = connect(mapStateToProps,mapDispatchToProps);
// 高阶函数对原始组件进行包装 使得原始组件可以直接通过props访问数据和方法
export default componentConnector(App);