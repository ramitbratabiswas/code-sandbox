// import { Container } from "react-bootstrap";
import {Route, Routes, Navigate} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/new" element={<h1>new</h1>} />
        <Routes>
          <Route index element={<h1>show</h1>} />
          <Route path="edit" element={<h1>edit</h1>} />
        </Routes>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
