import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import BreedScore from './breed-score';

describe('BreedScore', () => {

  const score = 3;
  const maxScore = 5;

  beforeEach(() => {
    render(<BreedScore score={score} />);
  });

  it('Renders the same amount of positive points given in the score prop', () => {
    const positivePoints = screen.getAllByTestId('positive-point');

    expect(positivePoints.length).toEqual(score);
  });

  it('Renders the difference of the maxScore minus the score in form of negativePoints', () => {
    const negativePoints = screen.getAllByTestId('negative-point');

    expect(negativePoints.length).toEqual(maxScore - score);
  });
  
  
});
