import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import BreedDetails from './breed-details';
import { breedDetails } from '../../__test__/fixtures/breed-fixtures';

describe('BreedDetails', () => {

  const breed = breedDetails;

  it('Render the breed information from the prop', () => {
    render(<BreedDetails breed={breed} />);

    const name = screen.getByTestId('name');
    const temperament = screen.getByTestId('temperament');
    const origin = screen.getByTestId('origin');
    const description = screen.getByTestId('description');

    expect(name.innerHTML).toEqual(breed.name);
    expect(temperament.innerHTML).toEqual(breed.temperament);
    expect(origin.innerHTML).toEqual(breed.origin);
    expect(description.innerHTML).toEqual(breed.description);

  });
  
});
