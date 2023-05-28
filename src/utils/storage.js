const getPosts = () => {
  const newpost = localStorage.getItem("post");
  return newpost ? JSON.parse(newpost) : [];
};
//Habría que hacer los fetch para guardarlos (ahora solo lo hace en LocalStorage)
const addPost = (post) => {
  const newpost = getPosts();
  newpost.push(post);
  localStorage.setItem("newpost", JSON.stringify(newpost));
};

const removePost = (id) => {
  const newpost = getPosts();
  const newPosts = newpost.filter((element) => element.id !== id);
  localStorage.setItem("newpost", JSON.stringify(newPosts));
};

const updatePost = (post) => {
  const newpost = getPosts();
  const newPosts = newpost.map((element) => {
    if (element.id === post.id) {
      return post;
    }
    return element;
  });
  localStorage.setItem("newpost", JSON.stringify(newPosts));
};
export { getPosts, addPost, removePost, updatePost };
