import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-20 bg-indigo-100 text-gray-600">
      <ul className="flex items-center justify-between h-full px-10">
        <NavLink
          to="/perguntas"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          <li>Perguntas</li>
        </NavLink>
        <NavLink
          to="/ideias"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >
          <li>Lista de Ideias</li>
        </NavLink>
      </ul>
    </nav>
  );
}
