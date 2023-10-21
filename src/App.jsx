import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import PostList from "./Components/posts/PostList";
import AddPost from "./Components/posts/AddPost";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/posts" element={<PostList />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/edit-post/:id" element={<AddPost />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
