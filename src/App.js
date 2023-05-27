import React from "react";
import "./App.css";
import { Auth } from "./components/Auth";
import Cookies from "universal-cookie";
import { useState, useRef } from "react";
import { Chat } from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import room1 from "./images/lactancia.png";
import room2 from "./images/juegos.png";
import room3 from "./images/seguridad.png";
import room4 from "./images/postparto.png";
import room5 from "./images/viajar.png";
import room6 from "./images/productos.png";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };
  const rooms = [
    {
      name: "Lactancia y nutrición",
      image: room1,
    },
    {
      name: "Juegos y actividades",
      image: room2,
    },
    {
      name: "Seguridad en el hogar",
      image: room3,
    },
    {
      name: "Ejercicios postparto",
      image: room4,
    },
    {
      name: "Viajar con bebés",
      image: room5,
    },
    {
      name: "Productos",
      image: room6,
    },
  ];

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className='room'>
          <h2>Selecciona una temática </h2>
          <div className='room-list'>
            {rooms.map((room, index) => (
              <div className='room-item' key={index}>
                <img src={room.image} alt={room.name} />
                <button onClick={() => setRoom(room.name)}>
                  Entrar al chat de {room.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className='sign-out'>
        <button onClick={signUserOut}>Salir</button>
      </div>
    </div>
  );
}

export default App;
