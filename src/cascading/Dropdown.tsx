import React, { useState } from "react";
import MenuItems from "./MenuItems";

const Dropdown = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log("items", items);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dropdown">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="menu-items">
        {filteredItems.map((item) => (
          <MenuItems key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
