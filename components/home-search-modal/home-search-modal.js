import { Close, Search } from '@material-ui/icons';
import { useEffect } from 'react';
import Link from 'next/link';

export default function HomeSearchModal({breedsSuggested, onFetchBreeds, onHideModal, hideSuggestions}) {

  useEffect(() => {
    document.addEventListener('click', clickOutSideHandler);
    return () => {
      document.removeEventListener('click', clickOutSideHandler);
    };
  }, []);

  const fetchBreeds = (value) => onFetchBreeds(value);
  const hideModal = () => onHideModal();
  const onClickOutside = () => hideSuggestions();

  return ( 
    <div id="autocomplete-modal-container-element"
      className="flex bg-white flex-col top-20 m-0 w-full p-5 absolute z-50 rounded-xl shadow-md">
      <div className="flex justify-end">
        <button id="close-search-modal" onClick={hideModal}
          className="flex justify-center items-center bg-secondary bg-opacity-10 rounded-lg w-10 h-10">
          <Close style={{ fill: '#291507' }} fontSize="medium" />
        </button>
      </div>
      <div className="rounded-full flex justify-between items-center border h-12 w-full px-5 mt-8 mb-6">
        <input 
          type="text" 
          className="outline-none text-lg w-4/5"
          data-testid="search-input-modal" 
          onChange={(e) => fetchBreeds(e.target.value)}
          />
        <Search style={{ fill: '#291507' }} fontSize="medium" />
      </div>
      <div>
        <ul className="max-h-72 overflow-y-auto custom-scrollbar">
          {breedsSuggested.map(breed => 
            <li key={breed.id} data-testid="breed-suggested" className=" hover:bg-secondary rounded-xl px-3 hover:bg-opacity-10 py-3">
              <Link href={`/breed/${breed.id}`}>
                <span className="z-30 opacity- text-lg">{breed.catName}</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );

  function clickOutSideHandler(e) {
    const modalContainerElement = document.getElementById("autocomplete-modal-container-element");
    const closeSearchModal = document.getElementById("close-search-modal");
    let targetElement = e.target;
  
    do {
      if (targetElement == modalContainerElement || targetElement == closeSearchModal) {
        return;
      }
      // Go up in the DOM
      targetElement = targetElement.parentNode;
    } while (targetElement);

    onClickOutside();
  }
}