"use client";

import { useEffect, useState } from "react";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import { CarCard, ShowMore, SearchBar, CustomFilter } from "@/components";
import Image from "next/image";
import { CarProps } from "@/types";

export function ClientCarSection() {
  const [allCars, setAllCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(false);

  // search & filter states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  // pagination state
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    try {
      setLoading(true);

      const result = await fetchCars({
        manufacturer,
        model,
        fuel,
        year,
        limit,
      });

      setAllCars(result);
    } catch (error) {
      console.error("Failed to fetch cars:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, fuel, year, limit]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length === 0;

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>

      <div className="home__filters">
        <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
          <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear} />
        </div>
      </div>

      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars.map((car, index) => (
              <CarCard
                key={`${car.make}-${car.model}-${car.year}-${index}`}
                car={car}
              />
            ))}
          </div>

          {loading && (
            <div className="mt-16 w-full flex-center">
              <Image
                src="/loader.svg"
                alt="loader"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
          )}

          {!loading && (
            <ShowMore
              pageNumber={limit / 10}
              isNext={allCars.length >= limit}
              setLimit={() => setLimit((prev) => prev + 10)}
            />
          )}
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
}
