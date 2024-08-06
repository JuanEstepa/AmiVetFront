import SideBar from "../components/SideBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { usePost, useGet } from "../useFetch"; // Asegúrate de importar el hook

const CreateService = () => {
  const [formData, setFormData] = useState({
    petId: "",
    serviceId: "",
    date: "",
  });

  const { data: pet, loading: petLoading } = useGet(
    "https://amivet.onrender.com/pet"
  );
  const { data: service, loading: serviceLoading } = useGet(
    "https://amivet.onrender.com/service"
  );

  const { data, loading, error, postData } = usePost(
    "https://amivet.onrender.com/petService"
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(formData); // Enviar los datos al hacer submit
  };

  return (
    <>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <h1 className="text-center uppercase font-bold text-4xl mb-4">
          Crear Servicio
        </h1>
        <hr />
        <div className="container mx-auto p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Formulario del servicio
            </h2>
            <div className="mb-4">
              <label
                htmlFor="owner"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Mascota
              </label>
              <select
                id="petId"
                name="petId"
                value={formData.petId}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Seleccionar una </option>
                {!petLoading ? (
                  pet.map((o) => (
                    <option key={o._id} value={o._id}>
                      {o.name} - {o.species}
                    </option>
                  ))
                ) : (
                  <option>Cargando mascotas...</option>
                )}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="owner"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Servicio
              </label>
              <select
                id="serviceId"
                name="serviceId"
                value={formData.serviceId}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Seleccionar Servicio</option>
                {!serviceLoading ? (
                  service.map((o) => (
                    <option key={o._id} value={o._id}>
                      {o.name} {o.last_name}
                    </option>
                  ))
                ) : (
                  <option>Cargando Servicios...</option>
                )}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-100 rounded-xl hover:bg-gray-200 transition-all px-4 py-3"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
            {data && (
              <p className="text-green-500 mt-2">Mascota creada con éxito</p>
            )}
            {error && (
              <p className="text-red-500 mt-2">Error: {error.message}</p>
            )}
          </form>
        </div>

        <div className="flex justify-end m-2">
          <Link
            to="/Service"
            className="bg-gray-100 rounded-xl hover:bg-gray-200 hover:scale-105 transition-all px-4 py-3"
          >
            Atrás
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateService;
