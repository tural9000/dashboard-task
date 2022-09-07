import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApiTokens, Transactions, Users, Home } from "./views/AllViews";

function App() {
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