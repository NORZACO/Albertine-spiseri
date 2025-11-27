// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./LayerOut";
import Home from "./Home";
import Blogs from "./Blogs.jsx";
import Contact from "./Contact";
import NoPage from "./Nopage";
import Services from "./Services";
// import FetchData from "./pages/Albums";
// import RegistrationForm from "./component/RegistrationForm";
// import { Login } from "./component/Login"







export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/services" element={<Services />} />
          {/* 
          <Route path="/albums" element={<FetchData />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/login" element={<SignIn />} /> 
          <Route path="/login" element={<Login />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
