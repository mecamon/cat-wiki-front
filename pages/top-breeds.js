import Head from "next/head";
import Layout from "../components/layout";
import TopBreedInfoGroup from "../components/top-breed-info-group/top-breed-info-group";
import client from '../data/gql-client';
import { GET_MOST_SEARCHED } from '../data/queries';

export default function TopBreeds({breeds}) {
  return (
    <div>
      <Head>
        <title>Catwiki - Top 10 breeds</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <h2 className=" font-bold text-xl md:text-4xl mb-12">Top 10 most searched breeds</h2>
          <TopBreedInfoGroup breeds={breeds} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const { data, error } = await client.query({
    query: GET_MOST_SEARCHED
  });

  const { mostSearched } = data;

  return {
    props: { 
      breeds: mostSearched < 10 
          ? mostSearched.slice(0, 10)
          : mostSearched
    }
  }
}