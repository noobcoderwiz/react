import './App.css';
import React, { useState} from 'react'; //import react module and useState hook 

const App = () => {
  //filterValue is a variable and setFilterValue is a setter function
  const [filterValue, setFilterValue] = useState(''); 
  const [list , setList] = useState('');

  //sample array of suggestions
  const sampleSuggestionArray = ["agra", "agartala", "bhuvneshwar", "bali", "canada", "delhi", "ecuador", "finland", "ghaziabad", "haridwar"]
  const suggesitonResult = [];

  //onSuggestionClick is used to set value of the filter once we click it
  //  e : event
  // suggestionElement : suggestion element

  const onSuggestionClick = (e, suggestionElement) => {
    e.preventDefault();
    setFilterValue(suggestionElement)
  }

  //onChangeValue is called when we enter any letter in the text box, basically a on click custom event function called.
  const onChangeValue = (e) => {
    let filter = e.target.value;
    setFilterValue(filter);

    //looping the suggesion array
    sampleSuggestionArray.forEach(ele => {
      // checking the value of each element with the filter value starting from 0th position to length of filter 
      if(ele.substr(0, filter.length).toLowerCase() === filter.toLowerCase() ){
        //if a filter matches the values in the suggestion array 
        //push it to the suggestion result array
        suggesitonResult.push(ele)
        
        //push the paragragh elements 
        setList(
          suggesitonResult.map((suggestionElement, index) => {
            return <p key={index} className="suggestion-result" onClick={(e) => onSuggestionClick(e, suggestionElement)}>{suggestionElement}</p>
          })
        )
      }
      if(filter.length === 0){
        setList('');
      }
    })
    if(suggesitonResult.length === 0) {
      setList(
        <p key={0} className="suggestion-result">No Match Found</p>
      );
    }
  }

  return (
    <div className="container">
      <div className="autofocus">
        <input type="text" value={filterValue} onChange={(e)=> onChangeValue(e)}/>
        <div>
          {list}
        </div>
      </div>
      </div>
  );
}

export default App;
