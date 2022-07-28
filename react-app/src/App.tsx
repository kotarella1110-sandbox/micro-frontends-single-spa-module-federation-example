import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

export const App = (): JSX.Element => <h1>React App is mounted!</h1>;

export const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.getElementById("root")!,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

export default App;
