"use client";

import { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, subMonths, addMonths } from "date-fns";
import { ChevronLeft, ChevronRight, CalendarIcon, ArrowLeft, ChevronDown  } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const startDate = startOfWeek(startOfMonth(currentMonth));
  const endDate = endOfWeek(endOfMonth(currentMonth));

  const days = [];
  let day = startDate;

  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  return (
    <>
      <div className="max-w-[1116px] mx-auto bg-black text-gray-500 rounded-none p-6">
        CALENDAR
        <div className="mt-4 border-t pt-4 font-bold text-white flex mb-10">
          <CalendarIcon className="mr-2" /> AVAILABILITY & WORK PREFERENCES
        </div>
      </div>

      <div className="w-[1116px] h-[749px] mx-auto bg-black text-white p-6 ">
      <div className="flex justify-between items-center">
  {/* Back to Calendar Summary with Arrow Icon */}
  <div className="flex items-center text-right text-gray-400 hover:text-white cursor-pointer">
    <Image src="/arrow-go-back-line.png" alt="arrow" width={25} height={25}  className="w-4 h-4 mr-2" />
    Back to calendar summary
  </div>

  {/* Filter Button with Chevron Dropdown Icon */}
  <div className="flex items-center border border-gray-400 px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-700">
    Filter
    <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
  </div>
</div>

        <div className="bg-[#21202D] rounded-lg mt-2 border-white flex items-center justify-between mb-4 p-6">
          <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
            <ChevronLeft className="text-gray-400 hover:text-white" />
          </button>
          <h2 className="text-lg font-semibold">{format(currentMonth, "MMMM yyyy")}</h2>
          <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
            <ChevronRight className="text-gray-400 hover:text-white" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-gray-500 text-sm font-medium">
              {day}
            </div>
          ))}
          {days.map((dayItem) => (
            <div
              key={dayItem.toString()}
              className={clsx(
                "w-14 h-14 flex items-center justify-center rounded-lg transition border border-gray-700",
                dayItem.getMonth() === currentMonth.getMonth() ? "bg-gray-800" : "bg-gray-900 text-gray-600",
                "hover:bg-gray-700 cursor-pointer"
              )}
            >
              {format(dayItem, "d")}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
