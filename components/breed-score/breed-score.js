import { useState, useEffect } from 'react';

export default function BreedScore({score}) {

  const maxPoints = 5;
  const [points, setPoints] = useState([]);

  useEffect(() => {
    setPositivePoints();
    setNegativePoints();
  }, []);

  const setPositivePoints = () => {
    for (let index = 0; index < score; index++) {
      setPoints((currentValue) => 
        [...currentValue, 
          <div key={`${index}-pos`} 
            data-testid="positive-point" 
            className="bg-fifth rounded-full w-9 h-2 sm:w-16 sm:h-3 mr-2">
          </div>
        ]
      );
    }
  }
  const setNegativePoints = () => {
    for (let index = 0; index < maxPoints - score; index++) {
      setPoints((currentValue) => 
        [...currentValue, 
          <div key={`${index}-neg`} 
            data-testid="negative-point" 
            className="bg-fourth rounded-full w-9 h-2 sm:w-16 sm:h-3 mr-2">
          </div>
        ]
      );
    }
  }

  return (
    <div>
      <div className="flex mr-2">{points}</div>
    </div>
  );
}