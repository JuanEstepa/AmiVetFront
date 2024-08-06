import { useState } from "react";
import ReactPaginate from "react-paginate";

const UserTable = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  // Calcular el índice de los elementos a mostrar en la página actual
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = users.slice(startIndex, endIndex);

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
              <th className="py-3 px-4 text-left text-gray-600">Nombre</th>
              <th className="py-3 px-4 text-left text-gray-600">Apellido</th>
              <th className="py-3 px-4 text-left text-gray-600">Teléfono</th>
              <th className="py-3 px-4 text-left text-gray-600">Correo</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user) => (
              <tr key={user._id} className="border-b border-gray-200">
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.last_name}</td>
                <td className="py-3 px-4">{user.phone}</td>
                <td className="py-3 px-4">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-center">
        <ReactPaginate
          previousLabel={
            <span className="px-3 py-1  rounded-l-md">Anterior</span>
          }
          nextLabel={<span className="px-3 py-1  rounded-r-md">Siguiente</span>}
          breakLabel={<span className="px-3 py-1">...</span>}
          pageCount={Math.ceil(users.length / itemsPerPage)}
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

export default UserTable;
