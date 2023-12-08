import React, { useState } from "react";

const DropdownItem = ({ item, onClick }) => {
  const hasChildren = item.children && item.children.length > 0;

  const handleItemClick = () => {
    if (hasChildren) {
      onClick(item.label);
    } else {
      onClick(item.label);
    }
  };

  return (
    <div className="dropdown-item" onClick={handleItemClick}>
      {item.label}
      {hasChildren && <span className="arrow">&#9656;</span>}
    </div>
  );
};

const MultiLevelDropdown = ({ data }) => {
  const [openMenus, setOpenMenus] = useState([]);

  const handleItemClick = (label) => {
    // Toggle the menu open/close state
    if (openMenus.includes(label)) {
      setOpenMenus(openMenus.filter((menu) => menu !== label));
    } else {
      setOpenMenus([...openMenus, label]);
    }
  };

  const renderDropdownItems = (items) => {
    return items.map((item) => (
      <div key={item.label} className="dropdown-menu">
        <DropdownItem item={item} onClick={handleItemClick} />
        {openMenus.includes(item.label) && item.children && (
          <div className="nested-dropdown">
            {renderDropdownItems(item.children)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="multi-level-dropdown">{renderDropdownItems(data)}</div>
  );
};

// Example usage
const dropdownData = [
  { label: "Item 1" },
  {
    label: "Item 2",
    children: [{ label: "Subitem 2.1" }, { label: "Subitem 2.2" }],
  },
  {
    label: "Item 2",
    children: [{ label: "Subitem 2.1" }, { label: "Subitem 2.2" }],
  },
  {
    label: "Item 2",
    children: [{ label: "Subitem 2.1" }, { label: "Subitem 2.2" }],
  },
  { label: "Item 3" },
];

const App = () => {
  return (
    <div>
      <h1>Multi-Level Dropdown Menu</h1>
      <MultiLevelDropdown data={dropdownData} />
    </div>
  );
};

export default App;
