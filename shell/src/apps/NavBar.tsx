import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import { navigateToUrl } from "single-spa";

export const NavBar = () => (
  <nav>
    <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
      <li style={{ padding: "8px" }}>
        <a href="/" onClick={navigateToUrl}>
          Home
        </a>
      </li>
      <li style={{ padding: "8px" }}>
        <a href="/react17" onClick={navigateToUrl}>
          React17
        </a>
      </li>
      <li style={{ padding: "8px" }}>
        <a href="/react18" onClick={navigateToUrl}>
          React18
        </a>
      </li>
    </ul>
  </nav>
);

let root: Root;

export async function bootstrap() {}

export async function mount() {
  root = createRoot(document.getElementById("nav-bar")!);
  root.render(
    <StrictMode>
      <NavBar />
    </StrictMode>
  );
}

export async function unmount() {
  root.unmount();
}

export default NavBar;
