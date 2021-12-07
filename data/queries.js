import { gql } from '@apollo/client';

export const getMostPopular = 
    gql`
      query mostSearched {
        mostSearched {
          id,
          originalId,
          name,
          timesSearched,
          image
        }
      }
    `