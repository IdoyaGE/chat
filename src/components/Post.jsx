import { useState } from "react";
import Postform from "./Postform";
//import dieta from "./images/dieta.png";

const Post = ({ post, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const handleDelete = () => {
    onDelete(post.id);
  };

  const handleEdit = (editedPost) => {
    editedPost.id = post.id;
    onEdit(editedPost);
    setEditing(false);
  };

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
