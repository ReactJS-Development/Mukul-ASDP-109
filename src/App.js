import React, { Component } from 'react';
import Passing from './Passing';

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {password: 123456, Items:'Table'};
    }
  render() {
    return (
      <div>
      <Passing password= {this.state.password} Items={this.state.Items} />
      </div>
    );
  }
}

export default App;
