import { useGet } from "../useFetch";

const PetCard = ({ pet, onClick }) => {
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }

    return age;
  };

  const { data: owner } = useGet(
    `https://amivet.onrender.com/owner/${pet.owner}`
  );

  return (
    <div
      className="max-w-sm w-full md:w-80 rounded-lg hover:scale-105 transition-all overflow-hidden shadow-lg bg-white px-6 py-2 m-4 border border-gray-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-white text-xl font-bold">
          {pet.name[0]}
        </div>
        <div className="ml-4">
          <div className="font-bold text-2xl mb-2">{pet.name}</div>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold text-gray-700">Edad:</span>{" "}
              {calculateAge(pet.age)} Años
            </li>
            <li>
              <span className="font-semibold text-gray-700">Dueño: </span>
              {owner.name} {owner.last_name}
            </li>
            <li>
              <span className="font-semibold text-gray-700">Raza:</span>{" "}
              {pet.species}
            </li>
            <li>
              <span
                className={`inline-block px-3 py-1 w-24 text-center rounded-full text-white ${
                  pet.status ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {pet.status ? "Activo" : "Inactivo"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
