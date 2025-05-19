"use client";

import Image from 'next/image';
import { Fragment } from 'react';
import { CarProps } from '@/types';
import { Dialog, Transition, TransitionChild, DialogPanel } from '@headlessui/react';

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
          <Dialog as='div' className='relative z-10' onClose={closeModal}>
            <TransitionChild
             as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-25' />
            </TransitionChild>

             <div className='fixed inset-0 overflow-y-auto'>
                 <div className='flex min-h-full items-center justify-center p-4 text-center'>
                    <TransitionChild
             as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100  scale-100'
          leaveTo='opacity-0  scale-95'
            >
             <DialogPanel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>

             </DialogPanel>
            </TransitionChild>
                 </div>
             </div>
          </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails