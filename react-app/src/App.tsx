import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

export const App = (): JSX.Element => <h1>React App is mounted!</h1>;

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.getElementById("root")!,
});

export default App;
