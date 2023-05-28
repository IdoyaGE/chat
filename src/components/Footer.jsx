//Importo React, las imágenes y el estilo CSS
import React from "react";
import img7 from "../images/fb.jpg";
import img8 from "../images/inst.jpg";
import img9 from "../images/lin.jpg";
import img10 from "../images/tw.jpg";
import "./Footer.css";

//Variable footer que devuelve el menú, suscripción a la newsletter y links a las redes sociales

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='redessociales'>
          <p className='copy'>&copy; 2023 momplanet</p>
          <p className='email'>Email: info@momplanet.com</p>

          <ul class='list-unstyled d-flexiconosredes'>
            <li class='facebook'>
              <img
                src={img7}
                id='iconos'
                alt='Logo facebook'
                width='75px'
                height='75px'
              />
            </li>
            <li class='instagram'>
              <img
                src={img8}
                id='iconos'
                alt='Logo instagram'
                width='75px'
                height='75px'
              />
            </li>
            <li class='linkedin'>
              <img
                src={img9}
                id='iconos'
                alt='Logo linkedin'
                width='75px'
                height='75px'
              />
            </li>
            <li class='twitter'>
              <img
                src={img10}
                id='iconos'
                alt='Logo twitter'
                width='75px'
                height='75px'
              />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
