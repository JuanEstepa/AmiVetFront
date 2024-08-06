import SideBar from "../components/SideBar";
import { useGet } from "../useFetch";

const PetInfo = ({ pet, close }) => {
  const { data: owner } = useGet(
    `https://amivet.onrender.com/owner/${pet.owner}`
  );

  const { data } = useGet(`https://amivet.onrender.com/petService/${pet._id}`);

  return (
    <>
      <SideBar />
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md relative">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={close}
          >
            Close
          </button>
          <h1 className="text-center uppercase font-bold text-4xl mb-4">
            {pet.name}
          </h1>
          <hr />
          <ul>
            <li>
              <strong>Fecha de nacimiento:</strong> {pet.age}
            </li>
            <li>
              <strong>Peso:</strong> {pet.weight} kg
            </li>
            <li>
              <strong>Raza:</strong> {pet.species}
            </li>
            <li>
              <strong>Dueño:</strong> {owner.name} {owner.last_name}
            </li>
            <li>
              <strong>Estado:</strong> {pet.status ? "Activo" : "Inactivo"}
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
                <tbody>
                  {data.map((service) => (
                    <tr key={service._id} className="border-b border-gray-200">
                      <td className="py-3 px-4">{service.serviceId}</td>
                      <td className="py-3 px-4">{service.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetInfo;
