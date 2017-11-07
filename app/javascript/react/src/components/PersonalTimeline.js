import React, {Component} from 'react';
import { Link } from 'react-router';
import PersonalTile from './PersonalTile'
import PersonalTileEdit from './PersonalTileEdit'

class PersonalTimeline extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedMemory: null,
      newMemoryContent: ''
    }
    this.selectMemory = this.selectMemory.bind(this);
    this.changeMemory = this.changeMemory.bind(this);
    this.submitMemoryEdits = this.submitMemoryEdits.bind(this);
  }

  selectMemory(id, body){
    this.setState({ selectedMemory: id , newMemoryContent: body })
  }

  changeMemory(event){
    this.setState({ newMemoryContent: event.target.value })
  }

  submitMemoryEdits(event){
    event.preventDefault();
    let formPayload = {
      id: this.state.selectedMemory,
      body: this.state.newMemoryContent
    }
    this.props.editMemory(formPayload);
    this.setState({ selectedMemory: null, newMemoryContent: '' })
  }

  render(){
    let personals = this.props.personals.map((memory, index) => {
      let right;
      if(index % 2 == 0){
        right = ' right';
      }
      let onDelete = () => {
        this.props.deleteMemory(memory.id);
      }
      let onEdit = () => {
        this.selectMemory(memory.id, memory.body)
      }
      if(this.state.selectedMemory == memory.id){
        return(
          <PersonalTileEdit
            key={memory.id}
            memory={memory}
            right={right}
            changeMemory={this.changeMemory}
            editValue={this.state.newMemoryContent}
            submitMemory={this.submitMemoryEdits}
          />
        )
      } else {
        return(
          <PersonalTile
            key={memory.id}
            memory={memory}
            right={right}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )
      }
    })

    let username;
    if(this.props.userName){
      username = this.props.userName.toUpperCase()
    }
    return(
      <div>
        <div>
          <h4 id='personal-timeline-intro' >HI, {username}! THIS IS YOUR PERSONAL TIMELINE. ALL THE MEMORIES YOU'VE SUBMITTED ARE PLACED HERE IN CHRONOLOGICAL ORDER. IF YOU CLICK ON ONE OF THEM, IT WILL LEAD YOU TO THE EVENT YOU LEFT A MEMORY ON.</h4>
        </div>
        <div className='timeline all-personal-timeline'>
          {personals}
        </div>
      </div>
    )
  }
}

export default PersonalTimeline
