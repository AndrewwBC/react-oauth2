import { Route, BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./pages/Login";
import Username from "./pages/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/user" element={<Username />} />
      </Routes>
    </Router>
  );
}

export default App;
