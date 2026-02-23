import { Routes, Route } from "react-router-dom";
import Peluqueria from "../templates/inicio";
import Servicios from "../templates/servicios";
import Reserva from "../templates/reserva";

export default function MyRoutes() {

  return (
    <Routes>

        <Route>
          <Route path="/" element={<Peluqueria/>} />
          <Route path="/servicios" element={<Servicios/>} />
          <Route path="/reserva" element={<Reserva/>} />
        </Route>
    </Routes>
  );
}