import { gql } from '@apollo/client';

export const GET_MOST_SEARCHED = 
    gql`
      query mostSearched {
        mostSearched {
          id,
          originalId,
          name,
          description,
          timesSearched,
          image
        }
      }
    `
export const GET_SUGGESTED = 
    gql`
      query search($entry: String!) {
        search(entry: $entry) {
          id,
          catName
        }
      }
    `

export const GET_BREED = 
    gql`
      query GetBreed($breedId: String!) {
        getBreed(breedId: $breedId) {
          name
          temperament
          strangerFriendly
          socialNeeds
          origin
          lifeSpan
          intelligence
          healthIssues
          grooming
          description
          childFriendly
          affectionLevel
          adaptability
          images
          wikipediaUrl
        }
      }
    `