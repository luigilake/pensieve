import React, {Component} from 'react';
import { Link } from 'react-router';
import TimelineTile from '../components/TimelineTile'

class AdminTimelines extends Component {
  constructor(props){
    super(props);
    this.state = {
      timelines: []
    }
    this.deleteTimeline = this.deleteTimeline.bind(this);
  }

  componentDidMount(){
    fetch(`/api/v1/timelines`)
    .then(response => response.json())
    .then(response => {
      this.setState({ timelines: response })
    })
  }

  deleteTimeline(timeline_id){
    fetch(`/api/v1/timelines/${timeline_id}`,{
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(body =>{
      this.setState({ timelines: body })
    })
  }

  render(){
    let timelines;
    if(this.props.timelineClick){
      timelines = this.state.timelines.map(timeline => {

        let deleteTimeline = () => {
          this.deleteTimeline(timeline.id)
        }

        return(
          <div key={timeline.id} className='timeline-tile small-12 medium-6 large-2 cell'>
            <div>
              <span onClick={deleteTimeline}>✘</span>
            </div>
            <TimelineTile
            id={timeline.id}
            key={timeline.id}
            title={timeline.title}
            image={timeline.image}
            />
          </div>
        )
      })
    }

    return(
      <div className='grid-x all-user-profiles'>
        {timelines}
      </div>
    )
  }
}

export default AdminTimelines
