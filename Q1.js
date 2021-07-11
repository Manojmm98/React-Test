// Q1) Here we have class component that updates the state using the input from a form.
// export class Profile extends Component {
//  state = {
//  name: "Backbencher",
//  age: 23,
//  };
//  onNameChange = (e) => {
//  this.setState({
//  name: e.target.value,
//  });
//  };
//  onAgeChange = (e) => {
//  this.setState({
//  age: e.target.value,
//  });
//  };
//  render() {
//  return (
//  <div>
//  <form>
//  <input
//  type="text"
//  value={this.state.name}
//  onChange={this.onNameChange}
//  />
//  <input
//  type="text"
//  value={this.state.age}
//  onChange={this.onAgeChange}
//  />
//  <h2>
//  Name: {this.state.name}, Age: {this.state.age}
//  </h2>
//  </form>
//  </div>
//  );
//  }
// }
// Rewrite the same component using React hooks.


//----------------------- Answer ------------------------//


import React, { useState } from 'react'

function Q1() {
    let [profile, SetProfile] = useState({
        name: "Backbencher",
        age: 23
    })

    let onNameChange = (e) => {
        setProfile({ ...profile, name: e.target.value })
    }
    let onAgeChange = (e) => {
        setProfile({ ...profile, age: e.target.value })
    }
    return (
        <div>
            <div>
                <form>
                    <input
                        type="text"
                        value={profile.name}
                        onChange={onNameChange}
                    />
                    <input
                        type="text"
                        value={profile.age}
                        onChange={onAgeChange}
                    />
                    <h2>
                        Name: {profile.name}, Age: {profile.age}
                    </h2>
                </form>
            </div>
        </div>
    )
}

export default Q1
