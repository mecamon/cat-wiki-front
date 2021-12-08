import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import HomePopularBreedGroup from './home-popular-breed-group';

describe('HomePopularBreedGroup', () => {

  const breeds = [
    { 
      id: 1, 
      originalId: 'adcf', 
      timesSearched: 4, 
      name: 'Some name 1', 
      image: 'http://thecatimage.net/'
    },
    { 
      id: 2, 
      originalId: 'adcf', 
      timesSearched: 3, 
      name: 'Some name 2', 
      image: 'http://thecatimage.net/'
    }
  ]; 

  it('Expect to find the "HomePopularBreed" components passed in the prop', () => {
    render(<HomePopularBreedGroup popularBreeds={breeds} />);

    const popularBreeds = screen.getAllByTestId('popular-breed');

    expect(popularBreeds.length).toEqual(breeds.length);
  });
  
});
