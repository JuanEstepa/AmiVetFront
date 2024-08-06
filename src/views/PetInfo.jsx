import SideBar from "../components/SideBar";

const PetInfo = ({ pet, close }) => {
  return (
    <>
      <SideBar />
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <button className="absolute text-white top-4 right-4" onClick={close}>
            Close
          </button>
          <h1 className="text-center uppercase font-bold text-4xl mb-4">12</h1>
          <hr />
          <ul>
            <li>
              <strong>Edad:</strong> 12 años
            </li>
            <li>
              <strong>Peso:</strong> 12 kg
            </li>
            <li>
              <strong>Raza:</strong> 12
            </li>
            <li>
              <strong>Dueño:</strong> 12
            </li>
            <li>
              <strong>Estado:</strong> 12
            </li>
          </ul>
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Servicios</h2>
            <div className="overflow-x-auto rounded-xl">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead className="bg-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="py-3 px-4 text-left text-gray-600">
                      Servicio
                    </th>
                    <th className="py-3 px-4 text-left text-gray-600">Fecha</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetInfo;

{
  /*{services?.map((service) => (
                    <tr key={service._id} className="border-b border-gray-200">
                      <td className="py-3 px-4">{service.name}</td>
                      <td className="py-3 px-4">
                        {new Date(service.date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))} */
}
