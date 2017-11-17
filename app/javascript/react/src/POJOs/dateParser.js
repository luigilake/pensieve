export function dateParser(extract){
  let foundDates = extract.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\ ((\d{2}|\d{1})|((\d{2}|\d{1})(\-|\–)(\d{2}|\d{1})))\,\ \d{4}/g);
  let allDates = [];
  if(foundDates){
    let filteredDates = foundDates.filter( (date, index) => {
      return(foundDates.indexOf(date) == index);
    })
    filteredDates.forEach( date => {
      if(date.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\ ((\d{2}|\d{1})(\-|\–)(\d{2}|\d{1}))\,\ \d{4}/g)){
        let month = date.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)/g)[0];
        let firstDay = date.match(/(\ (.*?)(\-|\–))/g)[0].slice(1,-1);
        let lastDay = date.match(/((\-|\–)(.*?)\,)/g)[0].slice(1,-1);
        let year = date.match(/\d{4}/g)[0];
        let firstDate = `${month} ${firstDay}, ${year}`
        let lastDate = `${month} ${lastDay}, ${year}`
        allDates.push(firstDate);
        allDates.push(lastDate);
      } else {
        allDates.push(date);
      }
    })
  }
  return(allDates)
}

export default dateParser;
