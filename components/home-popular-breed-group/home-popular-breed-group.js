import HomePopularBreed from "../home-popular-breed/home-popular-breed";

export default function HomePopularBreedGroup({popularBreeds}) {
  return (
    <div className="flex flex-wrap w-full justify-between">
      {popularBreeds.map(breed => 
        <div key={breed.id} data-testid="popular-breed" className="flex justify-center w-1/2 xl:w-1/4 p-2">
          <HomePopularBreed breed={breed} />
        </div>
      ) }
    </div>
  );
}