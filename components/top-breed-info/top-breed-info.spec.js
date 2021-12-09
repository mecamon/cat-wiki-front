import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import TopBreedInfo from './top-breed-info';

describe('TopBreedInfo', () => {

  const breed = {id: 1, name: 'breedName', description: 'Some descriptions', image: 'http://breedimage.com/' }

  it('Expect to render the label, image url and description passed by the props', () => {
    render(<TopBreedInfo breed={breed} />);

    const label = screen.getByTestId('breed-name');
    const descriptionParagraph = screen.getByTestId('breed-description');
    const image = screen.getByTestId('breed-image');

    expect(label.innerHTML).toContain(breed.name);
    expect(descriptionParagraph.innerHTML).toEqual(breed.description);
    expect(image.src).toEqual(breed.image);
  });
  
})
