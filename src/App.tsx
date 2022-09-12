import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Users from "./views/Users";
import Transactions from "./views/Transactions";
import ApiTokens from "./views/ApiTokens";
import UserDetails from './views/UserDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/tokens" element={<ApiTokens />} />
        <Route path="/details/:id" element={<UserDetails />} ></Route> 
      </Routes>
    </Router>
  );
}

export default App; 