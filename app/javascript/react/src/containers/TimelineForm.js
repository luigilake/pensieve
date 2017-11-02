import React, {Component} from 'react';
import { Link } from 'react-router';
import Dropzone from 'react-dropzone'
import PreviewTimeline from '../components/PreviewTimeline'

class TimelineForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      timelineTitle: '',
      timelineImage: '',
      errors: [],
      success: '',
      previewVisible: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  clearForm(){
    this.setState({
      timelineTitle: '',
      timelineImage: '',
      errors: [],
      success: 'THANKS! YOUR NEW TIMELINE HAS BEEN SUBMITTED! CHECKOUT THE TIMELINE TAB!',
      previewVisible: false
    })
  }

  handleChange(event){
    this.setState({ timelineTitle: event.target.value, previewVisible: true })
  }

  onDrop(event){
    if(event.length == 1){
      this.setState({ timelineImage: event[0], errors: [], previewVisible: true })
    } else {
      this.setState({ errors: ['Please only upload one image.']})
    }
  }

  handleSubmit(event){
    event.preventDefault()
    if(this.state.timelineTitle == '' || this.state.timelineImage.length == 0){
      let errors_array = []
      if(this.state.timelineTitle == ''){
        errors_array.push('Please fill out a Timeline Title')
      }
      if(this.state.timelineImage.length == 0){
        errors_array.push('Please upload an image for the Timeline')
      }
      this.setState({ errors: errors_array })
    } else {
      let formPayload = {
        title: this.state.timelineTitle,
        image: this.state.timelineImage
      }
      this.props.addNewTimeline(formPayload)
      this.props.changeFilterTimelines
      this.clearForm();
    }
  }

  render(){
    console.log(this.state.timelineTitle)
    console.log(this.state.timelineImage)

    let errors;
    if(this.state.errors.length > 0){
      errors = this.state.errors.map( (error, index) => {
        return(
          <li key={index} >{error}</li>
        )
      })
    }

    let dropzoneStyle = {
      background: 'none',
      border: '3px dotted grey',
      height: '150px'
    }

    let success;
    if(this.state.success != ''){
      success = <h4 id='personal-timeline-intro' >{this.state.success}</h4>
    }

    let preview;
    if(this.state.previewVisible){
      preview = <PreviewTimeline image={this.state.timelineImage.preview} title={this.state.timelineTitle.toUpperCase()} />
    }

    return(
      <div className='grid-container new-timeline-form'>
        <div className='grid-x new-timeline-form-inner'>
          <h4 id='personal-timeline-intro' >HERE'S WHERE YOU CAN CREATE A NEW TIMELINE. A PREVIEW WILL SHOW UP AT THE BOTTOM AS YOU CREATE THE TIMELINE. TRY TO MAKE THE TITLE CONCISE! E.G. "HISTORY OF THE UNITED STATES", "WW2", OR "LORD OF THE RINGS TIMELINE"</h4>
          <div id='preview-div'>
            {success}
            {preview}
          </div>
          <form className='small-12 medium-6 large-4 large-offset-4 medium-offset-3 cell entire-timeline-form'>
              <ul>
                {errors}
              </ul>
            <label className='new-timeline-form-label' >
              <input className='new-timeline-form-input' type='text' onChange={this.handleChange} value={this.state.timelineTitle} placeholder={'TIMELINE TITLE'}/>
            </label>
            <label className='new-timeline-form-image-label'>
              <Dropzone id='new-timeline-form-dropzone' style={dropzoneStyle} onDrop={this.onDrop} value={this.state.timelineImage.preview }>PLEASE DRAG YOUR IMAGE HERE</Dropzone>
            </label>
            <button className='eventshow-memory-button' type='submit' onClick={this.handleSubmit} value='Submit'>SUBMIT</button>
          </form>
        </div>
      </div>
    )
  }
}

export default TimelineForm
