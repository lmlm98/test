import React from 'react';
import {createStore} from 'redux';

function counter(state = 0,action){
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1 ;
    default:
      return state;
  }
}
const store = createStore(counter);
// store.subscribe(()=>{
//   console.log(store.getState())
// })
// store.dispatch({type:'INCREMENT'});
// store.dispatch({type:'INCREMENT'});
// store.dispatch({type:'DECREMENT'});

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // count:0
      count:store.getState()
    }
    store.subscribe(()=>{
        this.setState({
          count:store.getState()
        })
    })
  }
  addCount(){
    // this.setState({
    //   count:this.state.count + 1
    // })
    store.dispatch({type:'INCREMENT'});
  }
  decCount(){
    // this.setState({
    //   count:this.state.count - 1
    // })
    store.dispatch({type:'DECREMENT'});
  }
  render(){
    return(
      <div>
        <button onClick={e => this.decCount()}>-</button>
        <button onClick={e => this.addCount()}>+</button>
        {this.state.count}
      </div>
    )
  }
}

export default App;
