import Link from "next/link";

export default function HomePopularBreed({ breed }) {
  return (
    <div>
      <Link href={`/breed/${breed.originalId}`}>
        <a>
          <div className="rounded-3xl h-s-32 md:h-s-40 lg:h-s-32 w-s-32 md:w-s-40 lg:w-s-32 xl:h-s-12 xl:w-s-12">
            <img
              src={breed.image}
              className="object-cover h-s-32 md:h-s-40 xl:h-s-12 w-auto rounded-3xl"
              data-testid="breed-image"
              alt="breed-photo"
            />
          </div>
          <label
            data-testid="breed-label"
            className=" text-sm lg:text-lg font-semibold"
          >
            {breed.name}
          </label>
        </a>
      </Link>
    </div>
  );
}
