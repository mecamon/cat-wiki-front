import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import TopBreedInfoGroup from './top-breed-info-group';

describe('TopBreedInfoGroup', () => {

  const breeds = [
    {id: 1, name: 'breedName', description: 'Some descriptions', image: 'http://breedimage.com/' },
    {id: 2, name: 'breedName2', description: 'Some descriptions2', image: 'http://breedimage.com/' }
  ];

  it('Expect to render the same quantity of BreedInfo as the breeds in the props', () => {
    render(<TopBreedInfoGroup breeds={breeds} />);

    const breedsInfo = screen.getAllByTestId('breed-info');

    expect(breedsInfo.length).toEqual(breeds.length);
  });
  
});
