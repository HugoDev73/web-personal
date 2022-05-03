import React from "react";
import Image from "next/image";
import Social from "../components/Social";

import { social } from "../data";

const Header = () => {
  return (
    <>
      <div className="w-full flex items-center h-auto flex-wrap mx-auto my-12 md:my-4">
        {/*Main Col*/}
        <div
          id="profile"
          className="bg-slate-100 dark:bg-gray-800 w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            {/* Image for mobile view*/}
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{ backgroundImage: 'url("/img/perfil-sm2.jpg")' }}
            />
            <h1 className=" text-3xl font-bold pt-8 lg:pt-0 text-dark dark:text-slate-100">
              Hugo Mendoza
            </h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-primary" />
            <p className="text-dark dark:text-slate-100 pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              Desarrolador Web
            </p>
            <p className="pt-4  text-dark dark:text-slate-100">
              Programador web con deseo de comenzar mi carrera en el desarrollo
              web aportando mis conocimientos en tecnologias como Django,
              Laravel y React Js.
            </p>
            <div className="pt-8">
              <button className="bg-secondary hover:bg-primary dark:bg-primary text-white py-2 px-4 rounded-full">
                Descargar cv
              </button>
            </div>
            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between lg:justify-start lg:gap-8">
              {social.map(({ icon, url }, i) => (
                <Social icon={icon} url={url} key={i} />
              ))}
            </div>
            {/* Use https://simpleicons.org/ to find the svg for your preferred product */}
          </div>
        </div>
        {/*Img Col*/}
        <div className="w-full md:w-2/5 bg-slate-100 dark:bg-gray-800 rounded-lg">
          {/* Big profile image for side bar (desktop) */}
          <img
            src="/img/perfil_tr.png"
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
          {/* Image from: http://unsplash.com/photos/MP0IUfwrn0A */}
        </div>
      </div>
    </>
  );
};

export default Header;
