import React, {Component} from 'react';
import { Link } from 'react-router';
import TimelinesIndex from '../components/TimelinesIndex'

class HomeSignedIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      timelinesFilter: true,
    }
  }

  render(){
    let rendered;
    if(this.state.timelinesFilter){
      rendered = <TimelinesIndex timelines={this.props.timelines}/>
    } else {
      rendered
    }
    return(
      <div>
        <div>
          <button>Timelines</button>
          <button>Personal Timeline</button>
        </div>
        {rendered}
      </div>
    )
  }
}

export default HomeSignedIn;
