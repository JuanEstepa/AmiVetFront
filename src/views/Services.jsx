import SideBar from "../components/SideBar";
import ServiceTable from "../components/ServiceTable";
import { useGet } from "../useFetch";
import { Link } from "react-router-dom";

const Services = () => {
  const { data, loading } = useGet("https://amivet.onrender.com/petservice");

  return (
    <>
      <SideBar />
      <div className=" p-4 sm:ml-64">
        <h1 className="text-center uppercase font-bold text-4xl mb-4">
          Servicios
        </h1>
        <hr />
        <div className="flex justify-end m-2 mt-4">
          <Link
            to="/CreateService"
            className="bg-gray-100 rounded-xl w-full text-center font-medium hover:bg-gray-200 hover:scale-105 transition-all px-4 py-3"
          >
            Crear Servicio
          </Link>
        </div>
        <div className="relative flex flex-wrap justify-center">
          {loading ? (
            <div className="absolute flex items-center justify-center m-4 z-10">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.gifer.com/origin/f5/f5baef4b6b6677020ab8d091ef78a3bc.gif"
                  alt="Loading..."
                  className="w-32 h-32 mb-4"
                />
                <h1 className="text-2xl">Loading...</h1>
              </div>
            </div>
          ) : (
            <ServiceTable services={data} />
          )}
        </div>
      </div>
    </>
  );
};
export default Services;
