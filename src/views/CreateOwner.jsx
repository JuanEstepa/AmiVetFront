import SideBar from "../components/SideBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { usePost } from "../useFetch"; // Asegúrate de importar el hook

const CreateOwner = () => {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    phone: "",
    email: "",
  });

  const { data, loading, error, postData } = usePost(
    "https://amivet.onrender.com/owner"
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
          Dueños
        </h1>
        <hr />
        <div className="container mx-auto p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Formulario de Usuario
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
                htmlFor="last_name"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Apellido
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Apellido"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Teléfono"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
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
              <p className="text-green-500 mt-2">Dueño creado con éxito</p>
            )}
            {error && (
              <p className="text-red-500 mt-2">Error: {error.message}</p>
            )}
          </form>
        </div>
        <div className="flex justify-end m-2">
          <Link
            to="/Owner"
            className="bg-gray-100 rounded-xl hover:bg-gray-200 hover:scale-105 transition-all px-4 py-3"
          >
            Atrás
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateOwner;
