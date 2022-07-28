const root = document.getElementById("root")!;

export const bootstrap = async () => {
  console.log("bootstrap: Home App");
};

export const mount = async () => {
  const h1 = document.createElement("h1");
  h1.textContent = "Home App is mounted!";
  root.appendChild(h1);
};

export const unmount = async () => {
  root.textContent = "";
};
