"use client";

import { useState } from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import { calculateCarRent } from '@/utils';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {

  const {city_mpg, year, make, model, transmission, 
    drive } = car; 
    
    
    const carRent = calculateCarRent(
      Number(car.city_mpg) || 25,  // fallback to average city_mpg
      Number(car.year) || 2020     // fallback to current year
    );
    
 
  return (
    <div className="car-card group">
      <div className="car-card__content">
         <h2 className="car-card__content-title">
         {make} {model}
         </h2>
       </div>

       <p>
        <span>

          
          {carRent}
        </span>
       </p>
    </div>
  )
}

export default CarCard