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
  name: "reactApp",
  // @ts-ignore
  app: () => import("reactApp/ReactApp"),
  activeWhen: "/react",
});

start({
  urlRerouteOnly: true,
});
