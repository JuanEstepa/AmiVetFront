import { Route, Routes } from "react-router-dom";
import Pets from "./views/Pets";
import Owners from "./views/Owners";
import Services from "./views/Services";
import CreateOwner from "./views/CreateOwner";
import CreatePet from "./views/CreatePet";
import CreateService from "./views/CreateService";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pets />} />
      <Route path="/CreatePet" element={<CreatePet />} />
      <Route path="/Owner" element={<Owners />} />
      <Route path="/CreateOwner" element={<CreateOwner />} />
      <Route path="/Service" element={<Services />} />
      <Route path="/CreateService" element={<CreateService />} />
    </Routes>
  );
}

export default App;
