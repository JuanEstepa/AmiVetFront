import { useState } from "react";
import ReactPaginate from "react-paginate";
import SideBar from "../components/SideBar";
import PetCard from "../components/PetCard";
import { useGet } from "../useFetch";
import { Link } from "react-router-dom";

const Pets = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const { data, loading } = useGet("https://amivet.onrender.com/pet");

  // Calcular el índice de los elementos a mostrar en la página actual
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPets = data.slice(startIndex, endIndex);

  // Función para manejar el cambio de página
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <h1 className="text-center uppercase font-bold text-4xl mb-4">
          Mascotas
        </h1>
        <hr />
        <div className="flex justify-end m-2 mt-4">
          <Link
            to="/CreatePet"
            className="bg-gray-100 rounded-xl w-full text-center font-medium hover:bg-gray-200 hover:scale-105 transition-all px-4 py-3"
          >
            Crear Mascota
          </Link>
        </div>
        <div className="relative flex flex-wrap justify-center">
          {loading && (
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
          )}
          {currentPets.map((pet) => (
            <PetCard key={pet._id} pet={pet} />
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <ReactPaginate
            previousLabel={
              <span className="px-3 py-1 rounded-l-md">Anterior</span>
            }
            nextLabel={
              <span className="px-3 py-1 rounded-r-md">Siguiente</span>
            }
            breakLabel={<span className="px-3 py-1">...</span>}
            pageCount={Math.ceil(data.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"flex list-none p-0"}
            pageClassName={"mx-1"}
            pageLinkClassName={
              "px-3 py-1 border rounded-md text-gray-600 hover:bg-gray-200"
            }
            previousClassName={"mx-1"}
            previousLinkClassName={
              "px-3 py-1 border rounded-md text-gray-600 hover:bg-gray-200"
            }
            nextClassName={"mx-1"}
            nextLinkClassName={
              "px-3 py-1 border rounded-md text-gray-600 hover:bg-gray-200"
            }
            breakClassName={"mx-1"}
            breakLinkClassName={"px-3 py-1 border rounded-md text-gray-600"}
            activeClassName={"bg-gray-200"}
            disabledClassName={"text-gray-300 border-gray-300"}
          />
        </div>
      </div>
    </>
  );
};

export default Pets;
