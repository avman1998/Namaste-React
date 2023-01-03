// Javascript
// const root = document.getElementById("root");
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World-JS-1";
// const heading2 = document.createElement("h1");
// heading2.innerHTML = "Hello World-JS-2";
// root.appendChild(heading);
// root.appendChild(heading2);

// React
import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement("h1", {}, "Hello All World-React-1");
const heading2 = React.createElement("h1", {}, "Hello World-React-2");
const container = React.createElement("div", {}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
