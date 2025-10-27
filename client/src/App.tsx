import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/home.page";
import SignIn from "./pages/sign-in/sign-in.page";
import SignUp from "./pages/sign-up/sign-up.page";
import Archived from "./pages/archived/archived.page";
import BaseComponents from "./pages/base-components/BaseComponents";

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
