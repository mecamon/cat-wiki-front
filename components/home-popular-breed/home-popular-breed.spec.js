import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import HomePopularBreed from './home-popular-breed';
import { popularBreed } from '../../__test__/fixtures/breed-fixtures';

describe('HomePopularBreed', () => {

  const breed = popularBreed;

  beforeEach(() => {
    render(<HomePopularBreed breed={popularBreed} />);
  });

  it('Expect to have a label with the breeds name and the image url', () => {
    const breedLabel = screen.getByTestId('breed-label');
    const imageElement = screen.getByTestId('breed-image');

    expect(breedLabel).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(breedLabel.innerHTML).toEqual(breed.name);
    expect(imageElement.src).toEqual(breed.image);
  });

});

