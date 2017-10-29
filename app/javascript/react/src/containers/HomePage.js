import React, {Component} from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div>
        <h1>* The Pensieve Project *</h1>
      </div>
    )
  }
}

export default HomePage;
