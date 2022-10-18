import Todopage from "./pages/Todopage";
import Loginpage from "./pages/Loginpage";
import Joinpage from "./pages/Joinpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/todo" element={<Todopage />} />
        <Route path="/join" element={<Joinpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
