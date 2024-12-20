import { useState } from "react";
import "./App.css";

import { useGetPostQuery, useCreatePostMutation } from "./services/apiCall";

function App() {
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });
  const { data, error, isLoading } = useGetPostQuery();

  const [createPost, { isLoading: postIsLoading, error: postError }] =
    useCreatePostMutation();

  //Get Posts
  if (isLoading) {
    <p>Loading ...</p>;
  }
  if (error) {
    <p>Error occured..</p>;
  }
  console.log(data);

  //POST: posts
  if (postError) {
    return <p>Error while posting data..</p>;
  }

  async function handleCreatePost() {
    await createPost(newPost);
  }
  return (
    <>
      <div>
        <h1>RTK QUERY</h1>
      </div>

      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <br />
        <input
          type="text"
          placeholder="body"
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, body: e.target.value }))
          }
        />
        <br />
        <button onClick={handleCreatePost} disabled={postIsLoading}>
          Create Post
        </button>
      </div>

      {data?.map((posts) => (
        <li key={posts.id}>
          <p>{posts.title}</p>
        </li>
      ))}
    </>
  );
}

export default App;
