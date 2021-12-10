import Link from 'next/link';

export default function TopBreedInfo({breed, index}) {
  return(
    <div className="flex flex-col sm:flex-row">
      <div>
        <div className="h-44 w-44 rounded-3xl overflow-hidden">
          <img src={breed.image} className=" h-44 w-auto rounded-3xl" alt="breed photo" data-testid="breed-image" />
        </div>
      </div>
      <div className="flex flex-col sm:ml-11">
        <Link href={`/breed/${breed.originalId}`}>
          <a>
            <h3 data-testid="breed-name" className="font-semibold hover:underline text-lg md:text-3xl mt-3 md:mt-0 mb-2 md:mb-5">{`${index + 1}. ${breed.name}`}</h3>
          </a>
        </Link>
        <p data-testid="breed-description" className=" text-sm md:text-lg font-medium">{breed.description}</p>
      </div>
    </div>
  );
}