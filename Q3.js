// Q3) Here we have a class component with a state value. Each time the button in component is
// clicked, the count is incremented.
// class Counter extends Component {
//  state = {
//  count: 0,
//  };
//  incrementCount = () => {
//  this.setState({
//  count: this.state.count + 1,
//  });
//  };
//  render() {
//  return (
//  <div>
//  <button onClick={this.incrementCount}>Count: {this.state.count}</button>
//  </div>
//  );
//  }
// }
// Rewrite this component using React hooks.


//---------------------Answer-------------//


import React from 'react'

function Q3() {
    let [count, setCount]= useState(0);
    let incrementCount=()=>{
        setCount(count+1);
    }
    return (
        <div>
            <div>
  <button onClick={incrementCount}>Count: {count}</button>
  </div>
        </div>
    )
}

export default Q3
