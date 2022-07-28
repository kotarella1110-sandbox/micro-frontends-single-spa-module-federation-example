import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
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
        <a href="/react" onClick={navigateToUrl}>
          React
        </a>
      </li>
    </ul>
  </nav>
);

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: NavBar,
  domElementGetter: () => document.getElementById("nav-bar")!,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

export default NavBar;
