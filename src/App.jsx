import { Route, Routes } from "react-router-dom";
import "./App.css";
import {submitForm} from "../api/submitform";
import SignUp from "./components/auth/signUp";
import Login from "./components/auth/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
