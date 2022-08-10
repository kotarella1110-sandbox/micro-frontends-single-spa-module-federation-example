import { StrictMode, useRef } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Topics } from "./components/Topics";

const App = () => (
  <BrowserRouter basename="react17">
    <NavBar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="topics" element={<Topics />} />
    </Routes>
  </BrowserRouter>
);

const container = document.getElementById("root")!;

export async function bootstrap() {}

export async function mount() {
  render(
    <StrictMode>
      <App />
    </StrictMode>,
    container
  );
}

export async function unmount() {
  unmountComponentAtNode(container);
}

export default App;
