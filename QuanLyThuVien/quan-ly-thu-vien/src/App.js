import logo from "./logo.svg";
import "./App.css";
import Index from "./frontend/index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FrontEndRoute from "./route/frontend";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          {FrontEndRoute.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
