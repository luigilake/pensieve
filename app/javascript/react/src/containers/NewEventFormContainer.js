import React, {Component} from 'react';
import { Link } from 'react-router';
import EventTile from '../components/EventTile'
import EventFormSearch from '../components/EventFormSearch'
import fetchJsonp from 'fetch-jsonp'
import EventFormOptions from '../components/EventFormOptions'
import EventFormConfirmation from '../components/EventFormConfirmation'
import { wikiSearch, wikiFinal } from '../POJOs/WikipediaAccess'

class NewEventFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchValue: '',
      searchObjects: [],
      selectedOption: null,
      submittedOption: {},
      finalStep: false,
      finalConfirmation: {},
      foundEventDates: [],
      formDate: '',
      selectedDate: '',
      location: '',
      error: ''
    }
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.accessWikipedia = this.accessWikipedia.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.submitSearchOption = this.submitSearchOption.bind(this);
    this.onOptionSelect = this.onOptionSelect.bind(this);
    this.finalWikipedia = this.finalWikipedia.bind(this);
    this.onDateSelect = this.onDateSelect.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.finalSubmit = this.finalSubmit.bind(this);
    this.handleDateSelect = this.handleDateSelect.bind(this);
  }

  accessWikipedia(response){
    this.setState({ searchObjects: response });
  }

  submitSearch(event){
    event.preventDefault();
    let searchValue = this.state.searchValue.replace(/ /g, '_');
    wikiSearch(searchValue, this.accessWikipedia);
  }

  onChangeSearch(event){
    this.setState({ searchValue: event.target.value, finalStep: false });
  }

  finalWikipedia(finalObject, eventDates){
    this.setState({ finalConfirmation: finalObject, foundEventDates: eventDates })
  }

  submitSearchOption(event){
    event.preventDefault();
    wikiFinal(this.state.searchObjects[this.state.selectedOption], this.state.submittedOption.snippet, this.finalWikipedia)
    this.setState({ submittedOption: this.state.searchObjects[this.state.selectedOption], searchObjects: [], finalStep: true })
  }

  onOptionSelect(event){
    this.setState({ selectedOption: event.target.value });
  }

  onDateSelect(event, date){
    this.setState({ selectedDate: date })
  }

  handleLocationChange(event){
    this.setState({ location: event.target.value })
  }

  handleDateSelect(event){
    this.setState({ formDate: event.target.value })
  }

  finalSubmit(event){
    event.preventDefault();
    let formPayload;
    if(this.state.formDate == '' || this.state.formDate == 'none' && this.state.selectedDate == '' || this.state.location == ''){
      this.setState({ error: 'PLEASE FILL OUT BOTH THE DATE AND LOCATION FIELD.' })
    } else {
      let date;
      if(this.state.formDate == 'none'){
        date = this.state.selectedDate
      } else {
        date = new Date(this.state.formDate);
      }
      let location = 'N/A'
      if(this.state.location.length > 0){
        location = this.state.location;
      }
      formPayload = {
        title: this.state.finalConfirmation.title,
        snippet: this.state.finalConfirmation.snippet,
        body: this.state.finalConfirmation.body,
        date: date,
        location: location
      }
      this.props.createEvent(formPayload)
      this.setState({ finalStep: false, searchValue: '', location: '', error: '' })
    }
  }

  render(){
    let eventForm;
    let searchOptions;
    let finalStep;
    let eventDates;
    let error;

    if(this.state.error != ''){
      error = <p className='event-entry-error'>{this.state.error}</p>
    }

    if(this.state.foundEventDates.length > 0){
      eventDates = this.state.foundEventDates;
    } else {
      eventDates = [];
    }

    if(this.state.searchObjects.length > 0){
      searchOptions = this.state.searchObjects
    }

    if(this.props.selected){
      eventForm = <EventFormSearch searchValue={this.state.searchValue} onChangeSearch={this.onChangeSearch} submitSearch={this.submitSearch} searchOptions={searchOptions} submitSearchOption={this.submitSearchOption}
      selectSearchOption={this.onOptionSelect}/>
    }

    if(this.state.finalStep && this.state.finalConfirmation.title && this.props.selected){
      finalStep = <EventFormConfirmation finalData={this.state.finalConfirmation} onDateSelect={this.onDateSelect} handleLocationChange={this.handleLocationChange} locationValue={this.state.location} finalSubmit={this.finalSubmit} eventDates={eventDates}
      formDate={this.state.formDate}
      handleDateSelect={this.handleDateSelect}
      error={error}
      />
    }

    return(
      <div>
        {eventForm}
        {finalStep}
      </div>
    )
  }
}

export default NewEventFormContainer;
