import { createContext, useState } from "react";

const Context = createContext(null);

function Provider({ children }) {
  const [users, setUsers] = useState([]);
  const [session, setSession] = useState(null);

  const [publicaciones, setPublicaciones] = useState([
    {
      title: "titulo",
      user: "Dea",
      description: "ewr",
      price: 30000,
      img: "https://fluxi.cl/wp-content/uploads/2020/03/taza-11-oz-premium.jpg"
    }
  ]);

  const state = {
    users,
    setUsers,
    session,
    setSession,
    publicaciones,
    setPublicaciones
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export default { Provider, Context };