import { useState } from "react";
import Postform from "./Postform";
import "./Post.scss";
//import dieta from "./images/dieta.png";

//función que recibe un objeto de props que contiene información sobre un post
//recibe dos funciones de callback: para borrar y editar el post
const Post = ({ post, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  //para borrar
  const handleDelete = () => {
    onDelete(post.id);
  };
  //para editar
  const handleEdit = (editedPost) => {
    editedPost.id = post.id;
    onEdit(editedPost);
    setEditing(false);
  };
  //Devuelve el post editado
  return editing ? (
    <Postform
      post={post}
      onSubmit={handleEdit}
      onCancel={() => setEditing(false)}
    ></Postform>
  ) : (
    <article className='postEdited'>
      {/* <img src={dieta} alt='Frutas' width='250px' height='250px' /> */}
      <h2 className='title'>{post.title}</h2>
      <p className='body'>{post.body}</p>
      <button className='buttonEditar' onClick={() => setEditing(true)}>
        Editar
      </button>

      <button className='buttonDelete' onClick={handleDelete}>
        Borrar
      </button>
    </article>
  );
};

export default Post;
