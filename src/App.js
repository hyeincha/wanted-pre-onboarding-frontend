import Mainpage from "./pages/Mainpage";
import Loginpage from "./pages/Loginpage";
import Joinpage from "./pages/Joinpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/join" element={<Joinpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
