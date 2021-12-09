import Head from "next/head";
import Layout from "../../components/layout";
import BreedDetails from "../../components/breed-details/breed-details";
import client from '../../data/gql-client';
import { GET_BREED } from "../../data/queries";

export default function Breed({breedInfo}) {
  return (
    <div>
      <Head>
        <title>Breed - {`${breedInfo.name}`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <BreedDetails breed={breedInfo} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps({params}) {

  const { data, error } = await client.query({
    query: GET_BREED,
    variables: { breedId: params.id }
  });

  if(error) console.log(error);

  const { getBreed } = data;

  return {
    props: { breedInfo: getBreed }
  }
}