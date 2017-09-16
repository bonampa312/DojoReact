import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user: '',
      userText: ''
    };
    this.helloUser = this.helloUser.bind(this);
  }

  helloUser(event){
    var userName = event.target.value;
    this.setState({user: userName});
  }

  render(){
    return (
      <div>
        <input type="text" onChange={this.helloUser}></input>
        <br/>
        <br/>
        <label>Hola {this.state.user} cómo estais tío?</label>
      </div>
    )
  }
}

export default App;
