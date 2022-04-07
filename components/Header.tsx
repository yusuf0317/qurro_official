import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { ThemeSelect, ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <div className="flex justify-center bg-white">
      <header className="sticky inset-x-0 top-0 z-20 flex items-center justify-between bg-white py-2 px-3 dark:bg-slate-900 sm:py-3 w-[1024px]">
        <div className="flex grow-0 basis-1/3 md:hidden">
          <MenuPopOver />
        </div>
        <div className="flex grow-0 basis-1/3 justify-center md:justify-start">
          <Link href={"/#"} passHref>
            <a className="my-auto flex md:ml-0">
              <Logo />
            </a>
          </Link>
          <div className="hidden md:ml-10 md:flex">
            <Link href={"/#"} passHref>
              <button className="hidden md:inline-flex py-2 font-bold">Program</button>
            </Link>
          </div>
          <div className="hidden md:ml-10 md:flex">
            <Link href={"/#"} passHref>
              <button className="hidden md:inline-flex py-2 font-bold">Testimoni</button>
            </Link>
          </div>
        </div>
        <div className="flex grow-0 basis-1/3 justify-end gap-2">
          <Link href={"/#"} passHref>
            <button className="border-2 border-indigo-700 font-bold py-1 px-3 rounded-3xl hidden md:inline-flex">Contact</button>
          </Link>
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
}

const MenuPopOver = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <i className="bx bx-menu text-3xl"></i>
      </div>
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transform transition"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-300 delay-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Dialog as="div" className={"fixed inset-0 z-50"} onClose={setIsOpen}>
          <Transition.Child as={Fragment} enter="ease-out duration-300 delay-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Dialog.Overlay className={"fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80"} />
          </Transition.Child>
          <div className="fixed top-0 bottom-0 left-0 w-full max-w-xs rounded-r-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <a className="mx-auto mt-4 flex">
              <Logo />
            </a>
            <ul className="mt-8">
              <li className="group relative flex h-9 items-center overflow-hidden rounded-md hover:bg-slate-200/50">
                <span className="absolute h-full w-2 bg-indigo-700 opacity-0 transition-all group-hover:opacity-100" />
                <Link href="#">
                  <a className="w-full font-bold transition-all group-hover:pl-3"> Program</a>
                </Link>
              </li>
              <li className="group relative flex h-9 items-center overflow-hidden rounded-md hover:bg-slate-200/50">
                <span className="absolute h-full w-2 bg-indigo-700 opacity-0 transition-all group-hover:opacity-100" />
                <Link href="#">
                  <a className="w-full font-bold transition-all group-hover:pl-3">Testimoni</a>
                </Link>
              </li>
            </ul>
            <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-200/10">
              <ThemeSelect />
            </div>
            <ul className="mt-8 border-t space-y-3 border-gray-200 dark-border-gray-200/10">
              <li>
                <Link href={"/#"} passHref>
                  <button className="bg-gradient-to-r from-blue-600 to-blue-900 w-full py-2 rounded-3xl md:inline-flex text-white font-bold">Contact</button>
                </Link>
              </li>
            </ul>
            <div className="absolute top-5 right-5" onClick={() => setIsOpen(false)}>
              <i className="bx bx-x text-2xl"></i>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
