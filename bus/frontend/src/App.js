import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Tracker from "./pages/Tracker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tracker/:busNumber" element={<Tracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;