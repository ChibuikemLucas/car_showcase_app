import { fetchCars } from "@/utils";
import { HomeProps, CarProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
import {
  CarCard,
  ShowMore,
  SearchBar,
  CustomFilter,
  Hero,
} from "@/components";

export default async function Home({ searchParams }: HomeProps) {
  // Set safe defaults and parse query params
  const manufacturer = searchParams.manufacturer || "";
  const year = Number(searchParams.year) || 2022;
  const fuel = searchParams.fuel || "";
  const limit = Number(searchParams.limit) || 10;
  const model = searchParams.model || "";

  let allCars: CarProps[] = [];

  try {
    allCars = await fetchCars({
      manufacturer,
      year,
      fuel,
      limit,
      model,
    });

    console.log("✅ All Cars:", allCars); // Debug log
  } catch (error) {
    console.error("❌ Error fetching cars:", error);
  }

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore our cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car, index) => (
                <CarCard key={`${car.make}-${car.model}-${index}`} car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>We couldn't find any cars matching your search.</p>
          </div>
        )}
      </div>
    </main>
  );
}
