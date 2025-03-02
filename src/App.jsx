import { Route, Routes } from "react-router-dom";
import "./App.css";
// import {submitForm} from "../api/submitform";
import SignUp from "./components/auth/signUp";
import Login from "./components/auth/login";
import Home from "./components/home";
import Profile from "./components/profile";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/feed" element={<Layout />}>
        <Route path="/feed/home" element={<Home />} />
        <Route path="/feed/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
