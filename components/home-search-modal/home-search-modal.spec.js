import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import HomeSearchModal from './home-search-modal';

describe('HomeSearchModal', () => {

  let fetchBreeds = jest.fn();
  let suggestions = [
    {id: 1, name: 'suggestion 1'},
    {id: 2, name: 'suggestion 2'}
  ];

  beforeEach(() => {
    render(<HomeSearchModal breedsSuggested={suggestions} onFetchBreeds={fetchBreeds} />);
  });

  it('Triggers the "onFetchBreeds" function when typing', () => {
    const searchInput = screen.getByTestId('search-input-modal');
    
    fireEvent.change(searchInput, { target: { value: 'sa' } });

    expect(fetchBreeds).toHaveBeenCalledTimes(1);
  });
  

  it('Expect to find the suggestion passed by the props in the document', () => {

    const breedSuggested = screen.getAllByTestId('breed-suggested-modal');
    
    expect(breedSuggested.length).toEqual(suggestions.length);
  });
  
})

