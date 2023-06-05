import './App.css';
import Labs from './labs';
import HelloWorld from './labs/a3/hello-world';
import Tuiter from './tuiter';
import {BrowserRouter} from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

// declare paths and map them to corresponding component we want to render for that path
// ex.) Hello World message appears in http://localhost:3000/hello

// can declare the Lab component as the default landing screen by declaring a
// route mapped to the root context ("/") that automatically navigates to the Labs component
function App() {
    return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/labs/a3" />} />
            <Route path="/labs/*" element={<Labs />} />
            <Route path="/hello" element={<HelloWorld />} />
            <Route path="/tuiter/*" element={<Tuiter />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
}
export default App;
