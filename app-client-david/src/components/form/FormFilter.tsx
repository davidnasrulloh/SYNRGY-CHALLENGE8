/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */

import { useCallback, useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';

import CardCarItem from "../car";
import { getAllCars } from "../../redux/actions/carsActions";
import { CARS_ERROR, GET_ALL_CARS, ICars } from "../../types";
import { RootState } from "../../redux/store";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { driverType, timeOptions } from "../../types/utils";

const FormFilter = () => {
  const dispatch = useDispatch();
  const { cars } = useSelector((state: RootState) => state.cars);
  const [carsData, setCarsData] = useState<ICars[] | undefined>();
  const [tanggal, setTanggal] = useState("");
  const [jam] = useState("");
  const [penumpang, setPenumpang] = useState("");
  const dateTime = tanggal + " " + jam;

  const [selectedTypeDriver, setSelectedTypeDriver] = useState(driverType[0])
  const [selectedTimeOptions, setSelectedTimeOptions] = useState(timeOptions[0])

  const fetchData = useCallback(async () => {
    try {
      const carsData = await getAllCars({
        type: '',
        date: '',
        time: '',
        passenger: 0
      });

      if (carsData) {
        setCarsData(carsData);
        dispatch({
            type: GET_ALL_CARS,
            payload: carsData,
        });
      } else {
        console.error('Invalid response format:', carsData);
      }
    } catch (error:any) {
      dispatch({
          type: CARS_ERROR,
          payload: error.response,
      });
      alert(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // console.log(selectedTypeDriver.value)

  function getDateTimeNow() {
    let today = new Date();
    let date = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
    let time = String(today.getHours()).padStart(2, "0") + ":" + String(today.getMinutes()).padStart(2, "0") + ":" + String(today.getSeconds()).padStart(2, "0");
    return date + " " + time + "";
  }

  const filterCar = async () => {
    if (selectedTypeDriver.value === undefined || selectedTypeDriver.value === "") {
      return Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Please select driver type',
        showConfirmButton: false,
        timer: 1000
      });
    } else if (dateTime < getDateTimeNow()) {
      return Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Please select a date and time greater than now',
        showConfirmButton: false,
        timer: 1000
      });
    } else if (penumpang === undefined || penumpang === "") {
      const cars = await getAllCars({
        type: selectedTypeDriver.value,
        date: tanggal,
        time: selectedTimeOptions.value,
        passenger: Number(penumpang)
      });
      dispatch({ type: GET_ALL_CARS, payload: cars }); 
    } else {
      const cars = await getAllCars({
        type: selectedTypeDriver.value,
        date: tanggal,
        time: selectedTimeOptions.value,
        passenger: Number(penumpang)
      });
      dispatch({ type: GET_ALL_CARS, payload: cars }); 
    }
  };

  return (
    <>
      <div className="px-32 w-full flex absolute top-[500px] flex-row justify-center">
        <div className="flex flex-row gap-12 py-12 px-12 w-[80%] bg-white rounded-2xl shadow-lg justify-center">
          <div className="w-[19%]">
            <label htmlFor="Tipe Driver" className="block text-sm font-medium text-gray-700">
              Type Driver
            </label>
            <Listbox value={selectedTypeDriver} onChange={setSelectedTypeDriver}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selectedTypeDriver.label}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {driverType.map((driverX, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                          }`
                        }
                        value={driverX}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {driverX.label}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

          <div className="w-[19%]">
            <label htmlFor="Tanggal" className="block text-sm font-medium text-gray-700">
              Tanggal
            </label>
            <input
              id="Tanggal"
              type="date"
              className="mt-1 p-2 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring focus:ring-gray-200"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              placeholder="Pilih Tanggal"
              required
            />
          </div>

          <div className="w-[19%]">
            <label htmlFor="Time Options" className="block text-sm font-medium text-gray-700">
              Time Options
            </label>
            <Listbox value={selectedTimeOptions} onChange={setSelectedTimeOptions}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selectedTimeOptions.label}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {timeOptions.map((timeX, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                          }`
                        }
                        value={timeX}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {timeX.label}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

          <div className="w-[19%]">
            <label htmlFor="passenger" className="block text-sm font-medium text-gray-700">
              Jumlah Penumpang (Optional)
            </label>
            <div className="flex">
              <input
                id="passenger"
                type="number"
                className="mt-1 p-2 flex-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring focus:ring-gray-200"
                placeholder="Jumlah Penumpang"
                value={penumpang}
                onChange={(e) => setPenumpang(e.target.value)}
              />
              <span className="ml-2 inline-flex items-center px-3 border-l border-gray-300">
                <img src="asset/gambar/fi_users.svg" alt="" />
              </span>
            </div>
          </div>

          <button onClick={() => filterCar()} className="h-9 px-3 py-2 bg-green-400 rounded-sm border justify-center items-center gap-2.5 inline-flex my-auto">
            <div className="text-white text-sm font-bold font-['Helvetica'] leading-tight">Cari Mobil</div>
          </button>
        </div>
        
      </div>
      <main className="px-32 py-12">
        <section className="grid grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-12">
          {cars.length === 0 ? (
            <></>
          ) : (
            carsData?.map((car:ICars) => (
              <div key={car.car_id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <CardCarItem carData={car} />
              </div>
            ))
          )}
        </section>
      </main>
    </>
  );
};

export default FormFilter;
