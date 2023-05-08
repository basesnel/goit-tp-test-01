import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "../layout/Layout";
import NotFound from "../pages/Notfound";
import "./App.css";

const Home = lazy(() => import("../pages/Home"));
const Tweets = lazy(() => import("../pages/Tweets"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
