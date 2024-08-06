import SideBar from "../components/SideBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { usePost, useGet } from "../useFetch"; // Asegúrate de importar el hook

const CreatePet = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    species: "",
    weight: "",
    status: "",
    owner: "",
  });

  const { data: owner, loading: ownerLoading } = useGet(
    "https://amivet.onrender.com/owner"
  );

  const { data, loading, error, postData } = usePost(
    "https://amivet.onrender.com/pet"
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
          Crear Mascota
        </h1>
        <hr />
        <div className="container mx-auto p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Formulario de Mascota
            </h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nombre"
                required
              />
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
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="species"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Especie
              </label>
              <input
                type="text"
                id="species"
                name="species"
                value={formData.species}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Especie"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="weight"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Peso
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Peso"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Estado
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Seleccionar estado</option>
                <option value={true}>Activo</option>
                <option value={false}>Inactivo</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="owner"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Dueño
              </label>
              <select
                id="owner"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Seleccionar dueño</option>
                {!ownerLoading ? (
                  owner.map((o) => (
                    <option key={o._id} value={o._id}>
                      {o.name} {o.last_name}
                    </option>
                  ))
                ) : (
                  <option>Cargando dueños...</option>
                )}
              </select>
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
            to="/"
            className="bg-gray-100 rounded-xl hover:bg-gray-200 hover:scale-105 transition-all px-4 py-3"
          >
            Atrás
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreatePet;
