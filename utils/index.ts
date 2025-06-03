import { CarProps, FilterProps } from "@/types";



export async function fetchCars(filters: {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}) {
  const { manufacturer, year, fuel, limit, model } = filters;

  const headers = {
    "X-RapidAPI-Key": "ef38d5dcdbmsh69425693823ab08p17c326jsnc9411c6025c3",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer || "toyota"}&year=${year}&model=${model}&fuel_type=${fuel}&limit=${limit}`;

  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error("Failed to fetch car data");

  const result = await response.json();
  return result;
}



export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "hrjavascript-mastery"); // This can stay or use your key if required
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${car.year}`);
  url.searchParams.append("angle", angle || "front");

  return url.toString();
};

export const UpdateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

   searchParams.set(type, value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname
}