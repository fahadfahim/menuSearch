import React from "react";
import Dropdown from "./Dropdown";

const menuItems = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Products",
    children: [
      {
        id: 4,
        title: "Product 1",
        url: "/products/1",
      },
      {
        id: 5,
        title: "Product 2",
        url: "/products/2",
      },
    ],
  },
  {
    id: 9,
    title: "Contact",
    url: "/contact",
  },
];

const App = () => (
  <div className="App">
    <Dropdown items={menuItems} />
  </div>
);

export default App;
