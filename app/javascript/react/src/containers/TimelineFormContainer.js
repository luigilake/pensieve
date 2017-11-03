import React, {Component} from 'react';
import { Link } from 'react-router';
import PreviewTimeline from '../components/PreviewTimeline'
import RefreshIndicator from 'material-ui/RefreshIndicator';
import TimelineForm from '../components/TimelineForm'

class TimelineFormContainer extends Component {
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

    let errors;
    if(this.state.errors.length > 0){
      errors = this.state.errors.map( (error, index) => {
        return(
          <p id='personal-timeline-intro' key={index} >{error}</p>
        )
      })
    }

    let dropzoneStyle = {
      background: 'none',
      border: '3px dotted grey',
      height: '150px'
    }

    let success;
    if(this.state.success != '' && !this.props.loading ){
      success = <h4 id='personal-timeline-intro' >{this.state.success}</h4>
    }

    let style = {
      container: {
        position: 'relative',
      },
      refresh: {
        display: 'inline-block',
        position: 'relative',
      },
    };


    let loading;
    if(this.props.loading){
      loading = <div style={style.container}><RefreshIndicator size={50} left={0} top={25} loadingColor="#FF9800" status="loading" style={style.refresh}/></div>
    }

    let preview;
    if(this.state.previewVisible){
      preview = <PreviewTimeline image={this.state.timelineImage.preview} title={this.state.timelineTitle.toUpperCase()} />
    }

    return(
      <TimelineForm
        success={success}
        preview={preview}
        loading={loading}
        errors={errors}
        handleChange={this.handleChange}
        titleValue={this.state.timelineTitle}
        dropzoneStyle={dropzoneStyle}
        onDrop={this.onDrop}
        imageValue={this.state.timelineImage.preview}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default TimelineFormContainer
