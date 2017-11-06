import React, {Component} from 'react';
import { Link } from 'react-router';
import EventTile from '../components/EventTile'
import EventFormSearch from '../components/EventFormSearch'
import fetchJsonp from 'fetch-jsonp'
import EventFormOptions from '../components/EventFormOptions'
import EventFormConfirmation from '../components/EventFormConfirmation'

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
      selectedDate: '',
      location: ''
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
  }

  accessWikipedia(searchTerm){
    let searchURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='
    let completeURL = searchURL + encodeURIComponent(searchTerm)
    fetchJsonp(completeURL)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(response => {
      let searchObjects
      if(response == null || response[1].length == 0){
        searchObjects = []
      } else {
        searchObjects = response[1].map( (term, index) => {
          return(
            { title: term,
              snippet: response[2][index],
              url: response[3][index] }
          )
        })
      }
      return searchObjects
    })
    .then(response => this.setState({ searchObjects: response }))
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  finalWikipedia(finalObject){
    let searchTerm = finalObject.title.replace(/ /g, '_');
    let searchURL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=';
    let completeURL = searchURL + encodeURIComponent(searchTerm)
    fetchJsonp(completeURL)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(response => {
      let responsePath = response.query.pages
      let pageKey = Object.keys(response.query.pages)[0]
      responsePath = response.query.pages[pageKey]
      let finalObject = {
        title: responsePath.title,
        snippet: this.state.submittedOption.snippet,
        body: responsePath.extract
      }
      this.setState({ finalConfirmation: finalObject })
    })
  }

  submitSearch(event){
    event.preventDefault();
    this.accessWikipedia(this.state.searchValue.replace(/ /g, '_'));
  }

  onChangeSearch(event){
    this.setState({ searchValue: event.target.value, finalStep: false });
  }

  submitSearchOption(event){
    event.preventDefault();
    this.finalWikipedia(this.state.searchObjects[this.state.selectedOption]);
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

  finalSubmit(event){
    event.preventDefault();
    let formPayload = {
      title: this.state.finalConfirmation.title,
      snippet: this.state.finalConfirmation.snippet,
      body: this.state.finalConfirmation.body,
      date: this.state.selectedDate,
      location: this.state.location
    }
    this.props.createEvent(formPayload)
    this.setState({ finalStep: false, searchValue: '' })
  }

  render(){
    let eventForm;
    let searchOptions;
    let finalStep;

    if(this.state.searchObjects.length > 0){
      searchOptions = this.state.searchObjects
    }

    if(this.props.selected){
      eventForm = <EventFormSearch searchValue={this.state.searchValue} onChangeSearch={this.onChangeSearch} submitSearch={this.submitSearch} searchOptions={searchOptions} submitSearchOption={this.submitSearchOption}
      selectSearchOption={this.onOptionSelect}/>
    }

    if(this.state.finalStep && this.state.finalConfirmation.title){
      finalStep = <EventFormConfirmation finalData={this.state.finalConfirmation} onDateSelect={this.onDateSelect} handleLocationChange={this.handleLocationChange} locationValue={this.state.location} finalSubmit={this.finalSubmit}/>
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
