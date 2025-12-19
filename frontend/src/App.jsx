import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage/LandingPage";
import './App.css'
import CreateProfile from "./pages/CreateProfile/CreateProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-profile" element={<CreateProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
