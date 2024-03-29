import Head from "next/head";
import Layout from "../../components/layout";
import BreedDetails from "../../components/breed-details/breed-details";
import { getBreed } from '../../data/repo/breeds-repo'; 


export default function Breed({breedInfo}) {
  return (
    <div>
      <Head>
        <title>Breed - { breedInfo ? `${breedInfo.name}` : 'No info'}</title>
        <meta name="description" content="Relevant information about your favorite cat breed." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {
          !breedInfo 
              ? <div className=" min-h-error-msg-area flex flex-col justify-center items-center">
                  <h2 className="text-4xl opacity-40">No breeds information to show</h2>
                  <span className=" text-xl opacity-40">Please try later</span>
                </div>
              : <BreedDetails breed={breedInfo} />
        }
      </Layout>
    </div>
  );
}

export async function getServerSideProps({params}) {
  const { results, err } = await getBreed(params.id);

  if(err) {
    return { props: {breedInfo: null} }
  }
  return {
    props: { breedInfo: results }
  }
}
