import { useState } from "react";
//import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./Postform.scss";
//import firebase from "firebase/app";
//import "firebase/storage";
import axios from "axios";

/* // Configura la instancia de Firebase y Storage
const firebaseConfig = {
  // Aquí debes agregar la configuración de tu proyecto de Firebase
};

firebase.initializeApp(firebaseConfig);
const storage = getStorage(firebase); */

const PostForm = ({ onSubmit, post, onCancel }) => {
  const [title, setTitle] = useState(post ? post.title : "");
  const [body, setBody] = useState(post ? post.body : "");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === "" || body.trim() === "") return;

    let imageUrl = null;

    if (image) {
      try {
        const formData = new FormData();
        formData.append("image", image);

        const response = await axios.post("/api/upload", formData); // Ruta de tu servidor para subir la imagen
        imageUrl = response.data.imageUrl;
      } catch (error) {
        console.error("Error al subir la imagen:", error);

        /*    const imageRef = ref(storage, `images/${Date.now()}-${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      } catch (error) {
        console.error("Error al subir la imagen:", error);
         */ // Manejar el error de carga de la imagen
      }
    }

    const post = { title, body, imageUrl };
    onSubmit(post);
    setBody("");
    setTitle("");
    setImage(null);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    onCancel();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='label' htmlFor='title'>
        Título
      </label>
      <input
        className='input'
        type='text'
        id='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className='label' htmlFor='body'>
        Contenido
      </label>
      <textarea
        className='textarea'
        id='body'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>

      <label className='label' htmlFor='image'>
        Imagen
      </label>
      <input
        className='file-input'
        type='file'
        id='image'
        accept='image/*'
        onChange={handleImageChange}
      />

      <button className='button buttonsubmit' type='submit'>
        {post ? "Guardar" : "Crear"}
      </button>
      {post && (
        <button className='button buttoncancel' onClick={handleCancel}>
          Cancelar
        </button>
      )}
    </form>
  );
};

export default PostForm;
