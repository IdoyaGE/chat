import { useState } from "react";
import Post from "./Post";
import PostForm from "./Postform";
import "./Blog.scss";
import {
  getPosts,
  addPost as addPostLocal,
  removePost,
  updatePost,
} from "../utils/storage";
//DONDE SE GUARDAN LOS POST

//Variable de estado de los post (title,body), lista de post objetos, se hace map y se crea un componente post, crea formulario con dos input y al crear llama al handdleSubmit refresca la página y llama con el post al OnSubmit que se pasa como prop
const Blog = () => {
  const [newpost, setPosts] = useState(getPosts());
  //Meteriamos un fetch para conectar con el servidor
  const addPost = (post) => {
    const id =
      newpost.reduce((maxId, post) => Math.max(post.id, maxId), -1) + 1; //los tres puntos es para array y post viene de PostForm.jsx (onSubmit), con está función aparece encima del placeholder
    //array, reduce reduce a un solo valor que es el máximo de todos, si no hay post te devuelve -1 y si no te devuelve el max
    //lo hemos hecho para que cuando eliminemos un post, no se vuelvan a actualizar los id y al borrar otro post no te permita hacerlo porque coincide con el id eliminado
    post.id = id;
    setPosts([...newpost, post]);
    addPostLocal(post); //para guardar en el local storage
  };
  const deletePost = (id) => {
    /*  const positions = post.findIndex(element) => element.title === post.title && element.body === post.body);
    setPosts(posts.splice(position, 1)); */
    setPosts(newpost.filter((element) => element.id !== id));
    removePost(id);
  };
  const editPost = (editedPost) => {
    const newPosts = [...newpost];
    const index = newPosts.findIndex((post) => post.id === editedPost.id);
    newPosts[index] = editedPost;
    setPosts(newPosts);
    updatePost(editedPost);
  };
  return (
    <div>
      <section>
        <h1 className='blog'>Blog</h1>
        <ul className='post'>
          {newpost.map((element) => (
            <Post
              key={element.id}
              post={element}
              onDelete={deletePost}
              onEdit={editPost}
            />
          ))}
        </ul>
      </section>
      <section>
        <h1 className='crea'>Crea tu post</h1>
        <PostForm onSubmit={addPost} />
      </section>
    </div>
  );
};

export default Blog;
