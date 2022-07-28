import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connections from "./pages/Connections";
import Forms from "./pages/Forms";
import Login from "./pages/Login";
import Queries from "./pages/Queries";
import Register from "./pages/Register";

function App() {
  const { currentUser } = useSelector((state: any) => state.user);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={currentUser ? <Connections /> : <Login />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
