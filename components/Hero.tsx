import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import img1 from "../img/quran.jpg";

export default function Hero() {
  let [showBanner, setShowBanner] = useState(true);
  return (
    <>
      <div className="relative h-[640px] bg-red-500/20 w-full sm:h-[55vhpx] md:h-[440px] bg-fixed">
        <div className="">
          <Image src={img1} layout="fill" alt="corporate" objectFit="cover" />
        </div>
        <div className="absolute inset-0 bg-neutral-900/70">
          <div className="mx-auto max-w-screen-lg">
            <div className="m-6 min-h-[60px]">{<HeroInnerBanner show={showBanner} onClose={() => setShowBanner(false)} />}</div>
          </div>
          <div className="mx-4 mt-16 flex flex-col items-center text-center">
            <h1 className="text-3xl tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl">KURSUS TAHSIN DAN TAHFIDZ</h1>
            <div className="mt-16">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
      <HeroBottomCard />
    </>
  );
}

const HeroInnerBanner: React.FC<{ show: boolean; onClose: () => void }> = ({ show, onClose }) => {
  return (
    <Transition show={show}>
      <div className="bg-gradient-to-r from-blue-600 to-blue-900 py-3 px-8 text-white shadow-lg w-full">
        <p className="items">
          Welcome to <span className="font-bold">@qurro_official.id</span>. platform belajar quran online dimanapun dan kapanpun
        </p>
        <span className="absolute top-6 lg:right-[195px] md:right-7 sm:right-7 right-7">
          <button onClick={onClose}>
            <i className="bx bx-x text-2xl"></i>
          </button>
        </span>
      </div>
    </Transition>
  );
};

const items = ["tahsin tajwid", "tahfidz", "muroja'ah", "bahasa arab"];

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [isDirty, setIsDirty] = useState(false);
  useEffect(() => {
    let index = 0;
    let interval = setInterval(() => {
      if (!isDirty) {
        let value = items[index >= items.length ? (index = 0) : index];
        setQuery(value);
      }
      index++;
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [isDirty]);
  return (
    <form onSubmit={(e) => e.preventDefault()} className="group">
      <div className="flex items-center overflow-hidden rounded-md bg-white group-focus-within:ring-2 group-focus-within:ring-indigo-400 group-focus-within:ring-offset-2 group-focus-within:ring-offset-transparent">
        <span className="pointer-event-none block px-2 text-slate-400 group-focus-within:text-indigo-800">
          <i className="bx bx-search h-6 w-6 text-2xl text-black"></i>
        </span>
        <input
          type="text"
          aria-label="search"
          placeholder="Program..."
          className="w-full appearance-none border-transparent p-2 leading-6 text-slate-900 placeholder-slate-400 focus:border-transparent focus-ring-0 outline-none text-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClick={() => {
            if (!isDirty) {
              setIsDirty(true);
              setQuery("");
            }
          }}
        />
        <button className="hidden h-11 shrink-0 bg-indigo-600 px-2 font-semibold text-white transition-colors duration-500 ease-in-out hover:bg-indigo-700 sm:block" type="submit">
          Daftar
        </button>
      </div>
      <button className="h-10 shrink-0 bg-indigo-600 px-7 font-semibold text-white transition-colors duration-500 ease-in-out hover:bg-indigo-700 mt-8 sm:hidden rounded-lg" type="submit">
        Daftar
      </button>
    </form>
  );
};

const HeroBottomCard = () => {
  return (
    <div className="bg-neutral-900 p-4">
      <span className="block text-center text-lg text-white">QURRO_OFFICIAL.ID</span>
    </div>
  );
};
