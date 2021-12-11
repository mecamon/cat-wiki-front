import Head from "next/head";
import Layout from "../components/layout";
import TopBreedInfoGroup from "../components/top-breed-info-group/top-breed-info-group";
import { getMostSearched } from '../data/repo/breeds-repo';

export default function TopBreeds({breeds}) {
  return (
    <div>
      <Head>
        <title>Catwiki - Top 10 breeds</title>
        <meta name="description" content="Summary about the top 10 most searched cat breeds on the site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        { !breeds 
            ? <div className=" min-h-error-msg-area flex flex-col justify-center items-center">
                <h2 className="text-4xl opacity-40">No breeds to show</h2>
                <span className=" text-xl opacity-40">Please try later</span>
              </div>
            : <div>
                <h2 className=" font-bold text-xl md:text-4xl mb-12">Top 10 most searched breeds</h2>
                <TopBreedInfoGroup breeds={breeds} />
              </div>
        }
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {

  const { results, err } = await getMostSearched();

  if(err) return { props: {breeds: null} }

  return {
    props: { 
      breeds: results <= 10 
          ? results.slice(0, 11)
          : results
    }
  }
}

