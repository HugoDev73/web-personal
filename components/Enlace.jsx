import React from "react";
import Link from "next/link";

const Enlace = ({route, name}) => {
  return (
    <>
      <Link href={route}>
        <a className="font-bold tracking-wide transition-colors duration-200 text-dark dark:text-gray-100 p-2 rounded hover:bg-primary hover:text-white">
          {name}
        </a>
      </Link>
    </>
  );
};

export default Enlace;
