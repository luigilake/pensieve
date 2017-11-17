import fetchJsonp from 'fetch-jsonp';
import dateParser from './dateParser'


export function wikiSearch(searchTerm, callback){
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
  .then(response => callback(response))
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}

export function wikiFinal(finalObject, snippet, callback){
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
      snippet: snippet,
      body: responsePath.extract
    }
    let eventDates = dateParser(responsePath.extract)
    callback(finalObject, eventDates)
  })
}

export default { wikiSearch, wikiFinal };
