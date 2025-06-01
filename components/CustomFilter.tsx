"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, ListboxButton, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";


const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]); // State for storing the selected option
  return (
    <div className='w-fit'>
      <Listbox  
      value={selected}
        onChange={(e) => {
          setSelected(e); // Update the selected option in state
         // handleUpdateParams(e); // Update the URL search parameters and navigate to the new URL
        }}>
    <div className='relative w-fit z-10'>
      <ListboxButton className='custom-filter__btn'>
       <span className='block truncate'>{selected.title}</span>
      
      </ListboxButton>
    </div>
    </Listbox>
    </div>
  )
}

export default CustomFilter