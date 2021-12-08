import { Search } from '@material-ui/icons';
import { useEffect } from 'react';

export default function HomeSearchBreed({onFetchBreeds, suggestedBreeds, hideSuggestions}) {
  
  useEffect(() => {
      document.addEventListener('click', clickOutSideHandler);
    return () => {
      document.removeEventListener('click', clickOutSideHandler);
    };
  }, []);

  const onTypingHandler = (value) => onFetchBreeds(value);
  const onClickOutside = () => hideSuggestions();
  
  return (
    <div className="lg:w-full w-3/4 relative" id="autocomplete-container-element">
      <div className=" h-10 lg:h-16 rounded-full px-5 bg-white flex items-center justify-between">
        <input type="text" 
          placeholder="Search"
          className="outline-none text-sm lg:text-xl w-full"
          onChange={(e) => onTypingHandler(e.target.value)} 
          data-testid="breed-search" 
        />
        <Search style={{ fill: '#291507' }} fontSize="large" />
      </div>
      { suggestedBreeds.length !== 0 && 
        <ul data-testid="breed-suggested-group" 
          className="absolute bg-white rounded-3xl px-5 py-5 mt-4 w-full max-h-52 overflow-scroll">{ 
          suggestedBreeds.map(breed => 
          <li key={breed.id} data-testid="breed-suggested" className=" hover:bg-secondary rounded-xl px-3 hover:bg-opacity-10 py-3">
            <span className="z-30 opacity-1">{breed.catName}</span>
          </li>) 
        }</ul>
      }
    </div>
  );

  function clickOutSideHandler(e) {
    const containerElement = document.getElementById("autocomplete-container-element");
    let targetElement = e.target;
  
    do {
      if (targetElement == containerElement) {
        return;
      }
      // Go up in the DOM
      targetElement = targetElement.parentNode;
    } while (targetElement);

    onClickOutside();
  }

}