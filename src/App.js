import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="blog/:id" element={<Blog/>}/>
      </Routes>
    </div>
  );
}

export default App;
