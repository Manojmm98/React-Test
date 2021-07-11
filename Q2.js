// Q2) Here is a class component that prints Boom in console whenever it is mounted or updated.
// export class Banner extends Component {
//  state = {
//  count: 0,
//  };
//  updateState = () => {
//  this.setState({
//  count: this.state.count + 1,
//  });
//  };
//  componentDidMount() {
//  console.log("Boom");
//  }
//  componentDidUpdate() {
//  console.log("Boom");
//  }
//  render() {
//  return (
//  <div>
//  <button onClick={this.updateState}>State: {this.state.count}</button>
//  </div>
//  );
//  }
// }
// Remove the redundant console.log statement using React hooks.


//---------------------- Answer -----------------------------//

import React,{useState,useEffect} from 'react'

function Q2() {
    let [count,setCount] = useState(0);
    let  updateState=()=>{
        setCount(count+1);
// useEffect will work like compunddidmount+compunddidupdate
        useEffect(() => {
           console.log('Boom');
        })
    }
    return (
        <div>
           <div>
              <button onClick={updateState}> State: {count}</button>
          </div> 
        </div>
    )
}

export default Q2
