import React, {Component} from 'react';
import { Link } from 'react-router';
import Timeline from './Timeline'

class TimelineShow extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeline: {},
      id: this.props.params.id
    }
  }

  componentDidMount(){
    let id = this.props.params.id
    fetch(`/api/v1/timelines/${id}`)
    .then(response => response.json())
    .then(response => {
      this.setState({ timeline: response })
    })
  }

  render(){
    let image;
    let title;
    if(this.state.timeline.title){
      image = this.state.timeline.image.url
      title = this.state.timeline.title.toUpperCase();
    }

    return(
      <div className='showpage-total'>
        <div className='showpage-header'>
          <div className='showpage-header-img-div'>
            <img className='showpage-header-img' src={image}/>
          </div>
          <h1 className='showpage-header-title'>{title}</h1>
        </div>
        <hr id='show-divider'/>
        <Timeline
          id={this.state.id}
        />
      </div>
    )
  }
}

export default TimelineShow
