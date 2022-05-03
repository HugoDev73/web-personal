import { useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";
import Enlace from "./Enlace";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-5 h-5 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-5 h-5 text-gray-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <>
      <div className="sticky top-0 px-3 py-3 md:px-5 md:py-5 w-full bg-slate-100 dark:bg-gray-800 shadow-sm z-10">
        <div className="relative flex items-center justify-between mr-5 ml-2.5">
          <Link href="/">
            <a className="inline-flex items-center">
              <Image
                src="/img/logooo.svg"
                alt="Picture of the author"
                width={30}
                height={30}
              />
              <span className="ml-2 text-xl font-bold tracking-wide text-dark dark:text-gray-100">
                HUGO MENDOZA
              </span>
            </a>
          </Link>

          <ul className="items-center hidden space-x-8 lg:flex text-white">
            <li>
              <Enlace route="/" name="Inicio" />
            </li>
            <li>
              <Enlace route="/proyectos" name="Proyectos" />
            </li>
            <li>
              <Enlace route="/blog" name="Blog" />
            </li>
            <li>{renderThemeChanger()}</li>
          </ul>

          {/* menu responsivo */}
          <div className="lg:hidden z-10">
          <div className="inline-flex items-cente">
          <button className="mr-3">
          {renderThemeChanger()}
          </button>
          <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 text-dark dark:text-gray-100  transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
          </div>
           
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-gray-100 rounded shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link href="/">
                        <a className="inline-flex items-center">
                          <Image
                            src="/img/logo.png"
                            alt="Logotipo de hugo"
                            width={30}
                            height={30}
                          />
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-300 uppercase">
                            Hugo Mendoza
                          </span>
                        </a>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded bg-primary focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-100" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4 text-gray-300">
                      <li className="hover:bg-primary hover:text-white p-2 rounded">
                        <Enlace route="/" name="Inicio" />
                      </li>
                      <li className="hover:bg-primary hover:text-white p-2 rounded">
                        <Enlace route="/proyectos" name="Proyectos" />
                      </li>
                      <li className="hover:bg-primary hover:text-white p-2 rounded ">
                        <Enlace route="/blog" name="Blog" />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
