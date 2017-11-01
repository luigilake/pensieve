import React, {Component} from 'react';
import { Link } from 'react-router';

class MemoryForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      memoryBody: '',
      error: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  clearForm(){
    this.setState({
      memoryBody: '',
      error: ''
    })
  }

  handleChange(event){
    this.setState({ memoryBody: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.memoryBody == ''){
      this.setState({ error: 'Please enter your memory into the form below.'})
    } else {
      let formPayload = {
        body: this.state.memoryBody,
        event_id: this.props.eventId
      }
      this.props.addNewMemory(formPayload)
      this.clearForm();
    }
  }

  render(){
    let loremIpsum = 'Please type your memory here.'

    let error;
    if(this.state.error != ''){
      error = <li>{this.state.error}</li>
    }
    return(
      <div className='entire-memory-form'>
        <form>
          <ul>
            {error}
          </ul>
          <label className='eventshow-memory-form-label' >YOUR MEMORY:
            <textarea
              className='eventshow-memory-input'
              name='memoryBody'
              value={this.state.memoryBody}
              onChange={this.handleChange}
              type='text'
              placeholder={loremIpsum}
            />
          </label>
          <button className='eventshow-memory-button' type='submit' value='Submit' onClick={this.handleSubmit}>SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default MemoryForm;
