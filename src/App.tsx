import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Connections from "./pages/Connections";
import Forms from "./pages/Forms";
import Login from "./pages/Login";
import Queries from "./pages/Queries";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Connections />} />
            <Route path="/queries" element={<Queries />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
