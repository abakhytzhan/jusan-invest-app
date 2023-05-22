import "./App.css";
import Company from "./pages/company/company";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notFound/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="company">
          <Route index element={<Company />} />
          <Route path=":string" element={<Company />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
