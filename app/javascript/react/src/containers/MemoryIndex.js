import React, {Component} from 'react';
import { Link } from 'react-router';
import MemoryTile from '../components/MemoryTile'
import MemoryForm from './MemoryForm'

class MemoryIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      memoryIndex: [],
      memoryView: true,
      eventId: this.props.id,
      signedIn: false
    }
    this.changeMemoryIndex = this.changeMemoryIndex.bind(this)
    this.changeMemoryForm = this.changeMemoryForm.bind(this)
    this.addNewMemory = this.addNewMemory.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/events/${this.props.id}/memories`)
    .then(response => response.json())
    .then(response => {
      this.setState({ memoryIndex: response })
    })

    fetch(`/api/v1/current_user.json`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(response => {
      if(response){
        this.setState({ signedIn: true })
      }
    })
  }

  addNewMemory(formPayload){
    let that = this
    let id = this.state.eventId
    fetch(`/api/v1/events/${id}/memories`, {
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ memory: formPayload })
    })
    .then(response => response.json())
    .then(body => {
      that.setState({ memoryIndex: that.state.memoryIndex.concat(body), memoryView: true})
    })
  }

  changeMemoryIndex(){
    if(this.state.memoryView != true){
      this.setState({ memoryView: true})
    }
  }

  changeMemoryForm(){
    if(this.state.memoryView != false){
      this.setState({ memoryView: false})
    }
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

    let renderedComponent;
    if(this.state.memoryView){
      renderedComponent = memories.reverse()
    } else {
      renderedComponent = <MemoryForm eventId={this.state.eventId} addNewMemory={this.addNewMemory}/>
    }

    let newReviewButton;
    if(this.state.signedIn){
      newReviewButton = <button className='eventshow-memory-button large-6 medium-6 small-12 cell' onClick={this.changeMemoryForm} >ADD NEW MEMORY</button>
    }

    return(
      <div className='small-12 large-6 cell eventshow-memories'>
        <div className='grid-container'>
          <div className='grid-x'>
            <button className='eventshow-memory-button large-6 medium-6 small-12 cell' onClick={this.changeMemoryIndex} >MEMORIES</button>
            {newReviewButton}
          </div>
        </div>
        <div className='eventshow-memory-list'>
          {renderedComponent}
        </div>
      </div>
    )
  }
}

export default MemoryIndex;
