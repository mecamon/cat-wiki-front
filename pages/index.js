import Head from 'next/head';
import { getMostSearched, getSuggested } from '../data/repo/breeds-repo';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import HomeSearchBreed from '../components/home-search-breed/home-search-breed';
import HomeSearchModal from '../components/home-search-modal/home-search-modal';
import HomePopularBreedGroup from '../components/home-popular-breed-group/home-popular-breed-group';
import Link from 'next/link';
import { ArrowRightAlt } from '@material-ui/icons';

export default function Home({mostPopular}) {

  const mobileDisplayRes = 768;
  const [suggestedBreeds, setSuggestedBreeds] = useState([]);
  const [isMobileMode, setIsMobileMode] = useState(false);
  const [isShowingSearchModal, setIsShowingSearchModal] = useState(null);

  useEffect(() => {
    detectWidthChanges();
    window.addEventListener('resize', detectWidthChanges);
    return () => {
      window.removeEventListener('resize', detectWidthChanges);
    };
  }, []);

  function detectWidthChanges() {
    const width = document.documentElement.clientWidth;
    setIsMobileMode(width < mobileDisplayRes);
  }

  const hideModalHandler = () => {
    setIsShowingSearchModal(false);
    setSuggestedBreeds([]);
  }

  const hideSuggestionsHandler = () => setSuggestedBreeds([]);

  const onShowModalHandler = () => setIsShowingSearchModal(true);

  const onFetchBreedsHandler = async (value) => {   
    const { results, err } = await getSuggested(value);
    if(results) setSuggestedBreeds(results);
  } 
  

  return (
    <div className="relative">
      <Head>
        <title>Catwiki</title>
        <meta name="description" content="Wiki with information about cat breeds." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { 
        (isMobileMode && isShowingSearchModal) && 
        <HomeSearchModal 
          breedsSuggested={suggestedBreeds} 
          onFetchBreeds={onFetchBreedsHandler} 
          onHideModal={hideModalHandler}
          hideSuggestions={hideSuggestionsHandler}
          />
      }

      <Layout>
        <div className="mb-24">
          <section className="cat-bg h-40 md:h-72 lg:h-main-sections rounded-t-footer flex">
            <div className="flex flex-col justify-center items-start w-2/3 lg:w-1/2 px-8 lg:px-28">
              <img 
                src={isMobileMode ? '/images/CatwikiSimpleWhiteLogo.svg' : '/images/CatwikiWhiteLogo.svg'} 
                className=" h-12 lg:h-20 w-auto" alt="logo" />
              <span className="text-white text-xs lg:text-2xl mb-4 lg:mb-14">Get to know more about your cat breed</span>
              <HomeSearchBreed 
                onFetchBreeds={onFetchBreedsHandler} 
                suggestedBreeds={suggestedBreeds} 
                hideSuggestions={hideSuggestionsHandler}
                isMobileMode={isMobileMode}
                onShowModal={onShowModalHandler}
                />
            </div>
          </section>
          <section className=" bg-main-section rounded-b-footer px-8 pt-10 pb-20 lg:px-28">
            <div>
              <h2 className="text-xs lg:text-lg">Most searched breeds</h2>
              <div className="w-16 h-1 rounded-full bg-third mb-9"></div>
            </div>
            <div className="flex items-end mb-12">
              <div className="w-1/2">
                <h2 className="text-lg lg:text-5xl font-bold text-strong">66+ Breeds for you to discover</h2>
              </div>
              <div className="w-1/2 flex justify-end">
                <Link href="/top-breeds">
                  <a className="flex items-center">
                    <span className="opacity-60 font-bold text-sm lg:text-lg mr-2">SEE MORE</span>
                    <ArrowRightAlt style={{ fill: '#7F736A' }} fontSize="medium" />
                  </a>
                </Link>
              </div>
            </div>
            { mostPopular 
                ? <HomePopularBreedGroup popularBreeds={mostPopular} /> 
                : <div className="flex flex-col justify-center">
                    <h2 className="text-4xl opacity-40">No breeds to show</h2>
                    <span className=" text-xl opacity-40">Please try later</span>
                  </div>
            }
          </section>
        </div>
        <div>
          <section className="w-full flex flex-col lg:flex-row flex-wrap my-24 px-4 lg:px-28">
            <div className="w-full lg:w-1/2 pr-6 flex flex-col justify-center lg:justify-start">
              <div className="h-1 w-16 mb-4 bg-third rounded-full "></div>
              <h2 className="text-strong font-bold text-4xl lg:text-5xl mb-11">Why should you have a cat?</h2>
              <p className="text-lg mb-16">Having a cat around you can actually trigger the release of calming chemicals in your 
                body which lower your stress and anxiety leves
              </p>
              <a href="https://www.mentalfloss.com/article/51154/10-scientific-benefits-being-cat-owner" 
                className="flex items-center">
                <span className="opacity-60 text-sm lg:text-lg font-bold mr-2">READ MORE</span>
                <ArrowRightAlt style={{ fill: '#7F736A' }} fontSize="medium" />
              </a>
            </div>
            <div className="w-full lg:w-1/2 mansory">
              <img src="./images/image-2.png" alt="cat image 2" className="mb-8"/>
              <img src="./images/image-1.png" alt="cat image 1" />
              <img src="./images/image-3.png" alt="cat image 3" />
            </div>
          </section>
        </div>
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {

  const { results, err } = await getMostSearched();

  if(err) {
    return { props: {breeds: null} }
  } 

  return {
    props: { 
      mostPopular: results.length > 4 
          ? results.slice(0, 4)
          : results
    }
  }
}

