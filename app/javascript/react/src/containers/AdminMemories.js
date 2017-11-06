import React, {Component} from 'react';
import { Link } from 'react-router';

class AdminMemories extends Component {
  constructor(props){
    super(props);
    this.state = {
      memories: []
    }
    this.deleteMemory = this.deleteMemory.bind(this);
  }

  componentDidMount(){
    fetch(`/api/v1/memories`)
    .then(response => response.json())
    .then(response => {
      this.setState({ memories: response })
    })
  }

  deleteMemory(memory_id){
    fetch(`/api/v1/memories/${memory_id}`,{
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(body =>{
      this.setState({ memories: body })
    })
  }

  render(){
    let memories;
    if(this.props.memoryClick && this.state.memories){
      memories = this.state.memories.map(memory => {

        let deleteMemory = () => {
          this.deleteMemory(memory.id)
        }

        return(
          <div key={memory.id} className='timeline-tile small-12 medium-6 large-2 cell'>
            <div>
              <span onClick={deleteMemory}>✘</span>
            </div>
            <div className="testimonial-block-vertical">
              <div className="testimonial-block-vertical-quote">
                <p>{memory.body}</p>
              </div>
              <div className="testimonial-block-vertical-person">
                <img className="testimonial-block-vertical-avatar" src={memory.user.image_url} alt="" />
                <div>
                  <p className="testimonial-block-vertical-name">{memory.user.name}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })
    }

    return(
      <div className='grid-x all-user-profiles'>
        {memories}
      </div>
    )
  }
}

export default AdminMemories
