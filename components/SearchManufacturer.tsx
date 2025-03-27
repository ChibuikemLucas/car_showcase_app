"use client";

import { useState, Fragment } from 'react';
import { ComboboxButton, ComboboxInput } from '@headlessui/react';
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';
import { SearchManufacturerProps } from '@/types'

const SearchManufacturer = ({manufacturer, setManufacturer} 
    :SearchManufacturerProps) => {

const [query, setQuery] = useState('')  
      
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

             <ComboboxInput 
             className="search-manufacturer_input"
             placeholder="VolksWagen"
             displayValue={(manufacturer: string) => manufacturer}
             onChange={(e)=> setQuery(e.target.value)}
             />

             <Transition
             as={Fragment}
             leave="transition ease-in duration-100"
             leaveFrom="opacity-100"
             leaveTo="opacity-0"
             afterLeave={() => setQuery('')}
             >


             </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer