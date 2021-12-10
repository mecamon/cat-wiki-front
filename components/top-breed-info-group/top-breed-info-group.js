import TopBreedInfo from "../top-breed-info/top-breed-info";

export default function TopBreedInfoGroup({breeds}) {
  return (
    <div>
      { breeds.map((breed, index) => 
        <div key={breed.id} data-testid="breed-info" className="mb-14">
          <TopBreedInfo breed={breed} index={index} />
        </div>) 
      }
    </div>
  );
}