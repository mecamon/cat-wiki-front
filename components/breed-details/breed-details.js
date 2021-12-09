import BreedScore from '../breed-score/breed-score';

export default function BreedDetails({breed}) {

  const scoreTags = [
    {key: 'Adaptability:', value: breed.adaptability},
    {key: 'Affection level:', value: breed.affectionLevel},
    {key: 'Child friendly:',  value: breed.childFriendly},
    {key: 'Grooming:', value: breed.grooming},
    {key: 'Intellingence:', value: breed.intelligence},
    {key: 'Health issues:', value: breed.healthIssues},
    {key: 'Social needs:', value: breed.socialNeeds},
    {key: 'Stranger friendly:', value: breed.strangerFriendly}
  ];

  return (
    <div className="mb-36">
      <section className="flex flex-col lg:flex-row mb-16">
        <div>
          <div className=" h-60 md:h-96 w-60 md:w-96 rounded-3xl overflow-hidden mr-12 xl:mr-28">
            <img src={breed.images[0]} className="rounded-3xl h-96 w-auto" alt="breed image" />
          </div>
        </div>
        
        <div>
          <h2 data-testid="name" className=" text-lg md:text-4xl font-semibold mb-6 mt-6 md:mt-0">{breed.name}</h2>
          <div className="mb-8">
            <p data-testid="description" className="text-sm md:text-base">{breed.description}</p>
          </div>
          <div className="flex flex-col sm:flex-row mb-8">
            <span className=" font-bold text-sm md:text-base">Temperament: &nbsp;</span>
            <span data-testid="temperament" className=" text-sm sm:text-base">{breed.temperament}</span>
          </div>
          <div className="flex flex-col sm:flex-row mb-8">
            <span className=" font-bold text-sm md:text-base">Origin: &nbsp;</span>
            <span data-testid="origin" className=" text-sm sm:text-base">{breed.origin}</span>
          </div>
          <div className="flex flex-col sm:flex-row mb-8">
            <span className=" font-bold text-sm md:text-base">Life Span: &nbsp;</span>
            <span className=" text-sm sm:text-base">{`${breed.lifeSpan} Years`}</span>
          </div>
          <div className="flex w-9/12">
            <div className=" w-full">
              {scoreTags.map(tag => 
                <div key={tag.key} className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8">
                  <span className="font-bold text-sm sm:text-base">{tag.key}</span>
                  <BreedScore score={tag.value} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <h2 className=" font-semibold text-4xl mb-10">Other photos</h2>
        <div className="flex flex-wrap justify-between">
          { breed.images.map((image, index) => {
            if(index !== 1) {
              return (
                <div key={image} className="mx-auto">
                  <div className="h-64 w-64 rounded-3xl overflow-hidden mb-8">
                    <img src={image} className="h-64 w-auto rounded-3xl" alt="other image of the breed" />
                  </div>
                </div>
              );
            }
          })
          }
        </div>
      </section>
    </div>
    
  );
}
