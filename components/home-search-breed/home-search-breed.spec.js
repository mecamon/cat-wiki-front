import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import HomeSearchBreed from './home-search-breed';

describe('HomeSearchBreed', () => {

  const onFetchBreeds = jest.fn();
  let suggestions = [
    {id: 1, name: 'suggestion 1'},
    {id: 2, name: 'suggestion 2'}
  ];
  let component;

  afterEach(() => {
    component.unmount();
  });

  it('Calls the onFetch function on typing the search input', () => {
    component = render(<HomeSearchBreed onFetchBreeds={ onFetchBreeds } suggestedBreeds={suggestions}/>);
    const inputText = screen.getByTestId('breed-search');
    
    fireEvent.change(inputText, { target: { value: 'ffggfs' } });

    expect(inputText).toBeInTheDocument();
    expect(onFetchBreeds).toHaveBeenCalled();
  });

  it('Shows the suggestions passed on prop as list', () => {
    component = render(<HomeSearchBreed onFetchBreeds={ onFetchBreeds } suggestedBreeds={suggestions}/>);
    const suggestionList = screen.getAllByTestId('breed-suggested');

    expect(suggestionList.length).toEqual(suggestions.length);
  });
  
})
