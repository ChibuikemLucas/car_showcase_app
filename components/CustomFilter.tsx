"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { Listbox, Transition, ListboxOptions, ListboxOption, ListboxButton } from "@headlessui/react";
import { CustomFilterProps } from "@/types";

const CustomFilter = ({ /*title,*/ options, setFilter }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (e: typeof options[0]) => {
    setSelected(e);
    if (setFilter) setFilter(e.value); // optional use
  };

  return (
    <div className='w-fit'>
      <Listbox value={selected} onChange={handleChange}>
        <div className='relative w-fit z-10'>
          {/* Button for the listbox */}
          <ListboxButton className='custom-filter__btn'>
            <span className='block truncate'>{selected.title}</span>
            <Image
              src='/chevron-up-down.svg'
              width={20}
              height={20}
              className='ml-4 object-contain'
              alt='chevron_up-down'
            />
          </ListboxButton>

          {/* Transition and dropdown */}
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <ListboxOptions className='custom-filter__options'>
              {options.map((option) => (
                <ListboxOption
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
