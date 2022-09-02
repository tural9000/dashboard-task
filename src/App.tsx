import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Users from "./views/Users";
import Transactions from "./views/Transactions";
import ApiTokens from "./views/ApiTokens";

function App() {
  const a:number = 3;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/tokens" element={<ApiTokens />} />
      </Routes>
    </Router>
  );
}

export default App;