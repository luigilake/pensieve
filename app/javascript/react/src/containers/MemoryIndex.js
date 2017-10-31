import React, {Component} from 'react';
import { Link } from 'react-router';
import MemoryTile from '../components/MemoryTile'

class MemoryIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      memoryIndex: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/events/${this.props.id}/memories`)
    .then(response => response.json())
    .then(response => {
      this.setState({ memoryIndex: response })
    })
  }

  render(){
    let memories = this.state.memoryIndex.map( memory => {
      return(
        <MemoryTile
          key={memory.id}
          body={memory.body}
          name={memory.user.name}
          image={memory.user.image_url}
        />
      )
    })
    return(
      <div className='small-12 large-6 cell eventshow-memories'>
        {memories}
      </div>
    )
  }
}

export default MemoryIndex;
