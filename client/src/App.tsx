import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/home/Home.tsx";
import SignIn from "./pages/sign-in/SignIn.tsx";
import SignUp from "./pages/sign-up/SignUp.tsx";
import Archived from "./pages/archived/Archived.tsx";
import BaseComponents from "./pages/base-components/BaseComponents.tsx";

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
