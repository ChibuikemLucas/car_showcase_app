import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" ; 
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
        "city_mpg": "this field is for premium subscribers only",
          "class": "compact car",
          "combination_mpg": "this field is for premium subscribers only",
          "cylinders": 4,
          "displacement": 1.6,
          "drive": "fwd",
          "fuel_type": "gas",
          "highway_mpg": "this field is for premium subscribers only",
          "make": "toyota",
          "model": "corolla",
          "transmission": "a",
          "year": 1993
  }