"use client";

import { ComboboxButton } from '@headlessui/react';
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';
import { SearchManufacturerProps } from '@/types'

const SearchManufacturer = ({manufacturer, setManufacturer} 
    :SearchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className="relative w-full">
             <ComboboxButton className="absolute top-[14px]">
              
              <Image 
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
              />

             </ComboboxButton>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer