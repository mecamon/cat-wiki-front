import client from '../gql-client';
import { GET_MOST_SEARCHED, GET_SUGGESTED, GET_BREED } from '../queries';

export async function getMostSearched() {
  let err, results = null; 
  try {
    const { data, error } = await client.query({
      query: GET_MOST_SEARCHED
    });
  
    if(error) return {results, err: error};
    const { mostSearched } = data;
    return { results: mostSearched, err };
    
  } catch(e) {
    return {results, err: e};
  }
}

export async function getSuggested(value) {
  let err, results = null; 

  try{
    const {data, error} = await client.query({
      query: GET_SUGGESTED,
      variables: {entry: value}
    });

    if(error) return {results, err: error}
    const { search } = data;
    return {results: search, err}

  } catch(e) {
    return {results, err: e};
  }
}

export async function getBreed(id) {
  let err, results = null; 
  try {
    const { data, error } = await client.query({
      query: GET_BREED,
      variables: { breedId: id }
    });

    if(error) return {results, err: error}
    const { getBreed } = data;
    return {results: getBreed, err}

  } catch(e) {
    return {results, err: e};
  }
}