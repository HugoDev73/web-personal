import { ArrowLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout page="Desarrollador web">
      <div className="w-full grid justify-items-center">
        <h2 className="p-2 mt-10 text-center font-semibold">
          Oooops, esta pagina no existe.
        </h2>
        <Link href="/">
          <a className="text-white p-2 bg-secondary rounded flex items-center">
            <ArrowLeftIcon className="w-8 h-8 mr-2" />
            Regresar
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
