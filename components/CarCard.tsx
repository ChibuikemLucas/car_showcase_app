import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition, TransitionChild, DialogPanel } from "@headlessui/react";
import { CarProps } from "@/types";
import { generateCarImageUrl } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

// 🔧 TESTING: Replace this with actual prop once verified
const testCar: CarProps = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  city_mpg: 28,
  highway_mpg: 39,
  transmission: "a",
  drive: "fwd",
  cylinders: 4,
  displacement: 2.5,
  fuel_type: "gas",
};

// 🛠️ DEBUGGING LOGS
console.log("🛠️ Car data inside CarDetails:", testCar);
console.log("🔗 Main image URL:", generateCarImageUrl(testCar));
console.log("🔗 Angle 29 image URL:", generateCarImageUrl(testCar, "29"));
console.log("🔗 Angle 33 image URL:", generateCarImageUrl(testCar, "33"));
console.log("🔗 Angle 13 image URL:", generateCarImageUrl(testCar, "13"));

const CarDetails = ({ isOpen, closeModal }: CarDetailsProps) => {
  const car = testCar; // Use testCar for now — swap back to real 'car' to test API data

  return (
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
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                <button
                  type='button'
                  className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                  onClick={closeModal}
                >
                  <Image
                    src='/close.svg'
                    alt='close'
                    width={20}
                    height={20}
                    className='object-contain'
                  />
                </button>

                <div className='flex-1 flex flex-col gap-3'>
                  <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                    <Image
                      src={generateCarImageUrl(car)}
                      alt='car model'
                      fill
                      priority
                      className='object-contain'
                    />
                  </div>

                  <div className='flex gap-3'>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image
                        src={generateCarImageUrl(car, "29")}
                        alt='car model'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image
                        src={generateCarImageUrl(car, "33")}
                        alt='car model'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image
                        src={generateCarImageUrl(car, "13")}
                        alt='car model'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>
                  </div>
                </div>

                <div className='flex-1 flex flex-col gap-2'>
                  <h2 className='font-semibold text-xl capitalize'>
                    {car.make} {car.model}
                  </h2>

                  <div className='mt-3 flex flex-wrap gap-4'>
                    {Object.entries(car).map(([key, value]) => (
                      <div className='flex justify-between gap-5 w-full text-right' key={key}>
                        <h4 className='text-grey capitalize'>{key.split("_").join(" ")}</h4>
                        <p className='text-black-100 font-semibold'>{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
