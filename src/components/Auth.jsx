import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import logo from "../images/momplanet.png";
import madre from "../images/madre.jpg";
import "./Auth.css";

const cookies = new Cookies();
//Autentficación de Google
export const Auth = (props) => {
  const { setIsAuth } = props;
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='container'>
      <img className='logo' src={logo} alt='logo' />
      <h3>¿Madre primeriza? </h3>
      <div>
        <img className='madre' src={madre} alt='cuna y objetos de bebé' />
        <p>Hemos creado este blog para madres como tú </p>
        <p>
          Encontrarás artículos útiles, guías prácticas y la posibilidad de
          entablar conversaciones con otras madres
        </p>
        <h1>No estás sola, juntas compartimos experiencias</h1>
        <p>
          Apoyo mutuo y preguntas sin temor a ser juzgadas, sintiéndonos
          valoradas y respetadas
        </p>
      </div>
      <div className='auth'>
        <button onClick={signInWithGoogle}>
          Regístrate con tu cuenta de Google
        </button>
      </div>
    </div>
  );
};
