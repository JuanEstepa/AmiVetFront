import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useGet } from "../useFetch";

const UserTable = ({ services }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  // Calcular el índice de los elementos a mostrar en la página actual
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = services.slice(startIndex, endIndex);

  // Función para manejar el cambio de página
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4 text-left text-gray-600">Mascota</th>
              <th className="py-3 px-4 text-left text-gray-600">Servicio</th>
              <th className="py-3 px-4 text-left text-gray-600">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {currentServices.map((service) => (
              <ServiceRow key={service._id} service={service} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-center">
        <ReactPaginate
          previousLabel={
            <span className="px-3 py-1 rounded-l-md">Anterior</span>
          }
          nextLabel={<span className="px-3 py-1 rounded-r-md">Siguiente</span>}
          breakLabel={<span className="px-3 py-1">...</span>}
          pageCount={Math.ceil(services.length / itemsPerPage)}
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
  );
};

const ServiceRow = ({ service }) => {
  const { data: pet } = useGet(
    `https://amivet.onrender.com/pet/${service.petId}`
  );
  const { data: tratamiento } = useGet(
    `https://amivet.onrender.com/service/${service.serviceId}`
  );

  return (
    <tr className="border-b border-gray-200">
      <td className="py-3 px-4">{pet?.name || "No disponible"}</td>
      <td className="py-3 px-4">{tratamiento?.name || "No disponible"}</td>
      <td className="py-3 px-4">{service?.date || "No disponible"}</td>
    </tr>
  );
};

export default UserTable;
