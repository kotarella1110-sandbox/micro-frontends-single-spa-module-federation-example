import { start, registerApplication } from "single-spa";

registerApplication({
  name: "reactNavApp",
  app: () => import("./apps/NavBar"),
  activeWhen: "/",
});

registerApplication({
  name: "homeApp",
  app: () => import("./apps/Home"),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "react17App",
  // @ts-ignore
  app: () => import("react17App/App"),
  activeWhen: "/react17",
});

registerApplication({
  name: "react18App",
  // @ts-ignore
  app: () => import("react18App/App"),
  activeWhen: "/react18",
});

start();
