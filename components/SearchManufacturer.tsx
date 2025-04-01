"use client";

import { useState, Fragment } from 'react';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react';
import { manufacturers } from '@/constants';
import Image from 'next/image';
import { SearchManufacturerProps } from '@/types';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
    const [query, setQuery] = useState('');  

    const filteredManufacturers = query === "" 
        ? manufacturers  
        : manufacturers.filter((item) =>
            item.toLowerCase()
                .replace(/\s+/g, "")
                .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
        
    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacturer} onChange={setManufacturer}>
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
                        placeholder="Volkswagen"
                        onChange={(e) => setQuery(e.target.value)}
                        displayValue={(manufacturer: string) => manufacturer}
                    />

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <ComboboxOptions className="search-manufacturer__options">
                            {filteredManufacturers.map((item) => (
                                    <ComboboxOption
                                        key={item}
                                        value={item}
                                        className={({ selected }) => `relative search-manufacturer__option ${selected ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                                    >
                                        {({selected, active}) => (
                                          <>
                                          <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                                          </>
                                        )}
                                    </ComboboxOption>
                                ))
                            }
                        </ComboboxOptions>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default SearchManufacturer;
