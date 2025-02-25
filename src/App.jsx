import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/Context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />; 
    }
    return children;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/Home"
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
