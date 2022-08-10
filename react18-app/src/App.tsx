import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Topics } from "./components/Topics";

const App = () => (
  <BrowserRouter basename="react18">
    <NavBar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="topics" element={<Topics />} />
    </Routes>
  </BrowserRouter>
);

let root: Root;

export async function bootstrap() {}

export async function mount() {
  root = createRoot(document.getElementById("root")!);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

export async function unmount() {
  root.unmount();
}

export default App;
