import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home/Home.tsx";
import SignIn from "./pages/SignIn/SignIn.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
import Archived from "./pages/Archived/Archived.tsx";
import BaseComponents from "./pages/BaseComponents/BaseComponents.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/base-components" element={<BaseComponents />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/archived" element={<Archived />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
