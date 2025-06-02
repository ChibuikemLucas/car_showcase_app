"use client";

import { useEffect, useState } from "react";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import { CarCard, ShowMore, SearchBar, CustomFilter } from "@/components";
import Image from "next/image";
import { CarProps } from "@/types";

type Props = {
  initialCars: CarProps[];
};

export function ClientCarSection({ initialCars }: Props) {
  const [allCars, setAllCars] = useState(initialCars || []);
  const [loading, setLoading] = useState(false);

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    try {
      setLoading(true);
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });

      setAllCars(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, fuel, year, limit]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1;

  return (
    <>
      <div className='home__filters'>
        <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

        <div className='home__filter-container'>
          <CustomFilter title='fuel' options={fuels} setFilter={setFuel} />
          <CustomFilter title='year' options={yearsOfProduction} setFilter={setYear} />
        </div>
      </div>

      {!isDataEmpty ? (
        <section>
          <div className='home__cars-wrapper'>
            {allCars?.map((car, index) => (
              <CarCard
                key={`${car.make}-${car.model}-${car.year}-${index}`}
                car={car}
              />
            ))}
          </div>

          {loading && (
            <div className='mt-16 w-full flex-center'>
              <Image
                src='/loader.svg'
                alt='loader'
                width={50}
                height={50}
                className='object-contain'
              />
            </div>
          )}

          <ShowMore
            pageNumber={limit / 10}
            isNext={limit > allCars.length}
            setLimit={setLimit}
          />
        </section>
      ) : (
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          <p>No cars match your search.</p>
        </div>
      )}
    </>
  );
}
