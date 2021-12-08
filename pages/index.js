import Head from 'next/head';
import client from '../data/gql-client';
import { GET_MOST_SEARCHED, GET_SUGGESTED } from '../data/queries';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import HomeSearchBreed from '../components/home-search-breed/home-search-breed';

export default function Home({mostPopular}) {

  const [suggestedBreeds, setSuggestedBreeds] = useState([]);

  useEffect(() => {
    console.log(mostPopular);
    return () => {
      
    };
  }, []);

  const hideSuggestionsHandler = () => setSuggestedBreeds([]);

  const onFetchBreedsHandler = async (value) => {   

    const {data, error, loading} = await client.query({
      query: GET_SUGGESTED,
      variables: {entry: value}
    });

    if(data) {
      const { search } = data;
      setSuggestedBreeds(search);
    }
  } 
  

  return (
    <div>
      <Head>
        <title>Catwiki</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="mb-24">
          <section className="cat-bg h-main-sections rounded-t-footer flex">
            <div className="flex flex-col justify-center items-start w-1/2 px-28">
              <img src="./images/CatwikiWhiteLogo.svg" className="h-20 w-auto" alt="logo" />
              <span className="text-white text-2xl mb-14">Get to know more about your cat breed</span>
              <HomeSearchBreed 
                onFetchBreeds={onFetchBreedsHandler} 
                suggestedBreeds={suggestedBreeds} 
                hideSuggestions={hideSuggestionsHandler}/>
            </div>
            <div className="w-1/2"></div>
          </section>
          <section className="h-main-sections bg-main-section rounded-b-footer">
            
          </section>
        </div>
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_MOST_SEARCHED
  });

  return { 
    props: {
      mostPopular: data.mostSearched  
    }
  }
}

