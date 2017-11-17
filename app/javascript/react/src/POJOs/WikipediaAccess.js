import fetchJsonp from 'fetch-jsonp';

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

export default wikiSearch;
