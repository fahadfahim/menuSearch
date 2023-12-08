import React from "react";

const MenuItems = ({ item, depth = 0 }) => {
  if (!item.children) {
    return (
      <li key={item.id} style={{ paddingLeft: depth * 10 }}>
        <a href={item.url}>{item.title}</a>
      </li>
    );
  }

  return (
    <li key={item.id}>
      <a href="#">{item.title}</a>
      <ul className="submenu">
        {item.children.map((child) => (
          <MenuItems key={child.id} item={child} depth={depth + 1} />
        ))}
      </ul>
    </li>
  );
};

export default MenuItems;
