import { fetchCars } from "@/utils";
import {  Hero, ClientCarSection } from "@/components"; // 👈 Add ClientCarSection

export default async function Home() {
  const allCars = await fetchCars({
    manufacturer: "",
    year: 2022,
    fuel: "",
    limit: 10,
    model: "",
  });

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <ClientCarSection initialCars={allCars} />
      </div>
    </main>
  );
}
