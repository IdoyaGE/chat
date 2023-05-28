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
import room5 from "./images/productos.png";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import momplanet from "./images/momplanet.png";
import depresion from "./images/depresion.png";
import dieta from "./images/dieta.png";
import ejercicio from "./images/ejercicio.png";

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
      name: "Productos",
      image: room5,
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
      <nav>
        <div className='navbar-logo'>
          <imagen src={momplanet} alt='Logo' />
        </div>
        <ul className='navbar-links'>
          <li>
            <a href='./components/Blog'>Blog</a>
          </li>

          <li>
            <a href='./components/Aboutus'>Sobre nosotros</a>
          </li>
        </ul>
      </nav>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className='room'>
          <h2>¿De qué te gustaría hablar? </h2>
          <div className='room-list'>
            {rooms.map((room, index) => (
              <div className='room-item' key={index}>
                <img src={room.image} alt={room.name} />
                <button
                  className='buttonroom'
                  onClick={() => setRoom(room.name)}
                >
                  Chat {room.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className='sign-out'>
        <button onClick={signUserOut}>Salir</button>
      </div>

      <h2>Consejos</h2>
      <div className='consejos'>
        <ul className='columns'>
          <li className='box'>
            <img
              src={depresion}
              id='iconos'
              alt='Logo informe'
              width='150px'
              height='150px'
            />
            <h1 className='tituloconsejos'>Estado emocional</h1>
            <p>
              La lactancia, el cansancio de las primeras semanas, las noches en
              vela. Pon atención a tu estado anímico.
            </p>
          </li>
          <li className='box'>
            <img
              src={dieta}
              id='iconos'
              alt='Logo hucha'
              width='150px'
              height='150px'
            />
            <h1 className='tituloconsejos'>Alimentación</h1>
            <p>
              Mantener una alimentación equilibrada y una correcta hidratación
              nos ayudará a tener más energía.
            </p>
          </li>
          <li className='box'>
            <img
              src={ejercicio}
              id='iconos'
              alt='Logo pieza puzzle'
              width='150px'
              height='150px'
            />
            <h1 className='tituloconsejos'>Ejercicio físico</h1>
            <p>
              Hacer deporte no sólo nos ayudará a recuperar nuestro peso y
              sentirnos mejor físicamente.
            </p>
          </li>
        </ul>
      </div>
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
