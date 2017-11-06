import React, {Component} from 'react';
import { Link } from 'react-router';
import EventTile from '../components/EventTile'
import EventFormSearch from '../components/EventFormSearch'

class NewEventFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchValue: ''
    }
    this.onChangeSearch = this.onChangeSearch.bind(this)
  }

  onChangeSearch(event){
    let searchURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='
    let searchTerm = event.target.value.replace(/ /g, '_')
    let completeURL = searchURL + searchTerm
    console.log(completeURL)
    this.setState({ searchValue: event.target.value })
  }

  render(){
    let eventForm;
    if(this.props.selected){
      eventForm = <EventFormSearch searchValue={this.state.searchValue} onChangeSearch={this.onChangeSearch}/>
    }
    return(
      <div>
        {eventForm}
      </div>
    )
  }
}

export default NewEventFormContainer;
