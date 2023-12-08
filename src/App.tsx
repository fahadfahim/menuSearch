import { Cascader, DatePicker, Input } from "antd";
import "./App.css";
import { DefaultOptionType } from "antd/es/select";
import Demo from "./demo";
import { useState } from "react";
import React from "react";
interface Option {
  value: string;
  label: string;
  children?: Option[];
  disabled?: boolean;
}
function App() {
  const [searchValue, setSearchValue] = useState("");
  const options: Option[] = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
            {
              value: "xiasha",
              label: "Xia Sha",
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua men",
            },
          ],
        },
      ],
    },
    {
      value: "bd",
      label: "bd",
      children: [
        {
          value: "dhaka",
          label: "dhaka",
          children: [
            {
              value: "gulshan",
              label: "gulshan",
            },
            {
              value: "banani",
              label: "banani",
            },
          ],
        },
      ],
    },
    {
      value: "ind",
      label: "india",
      children: [
        {
          value: "momd",
          label: "mombai",
          children: [
            {
              value: "mombai1",
              label: "mombai1",
            },
          ],
        },
      ],
    },
  ];

  const onChange = (value: string[], selectedOptions: Option[]) => {
    console.log("select", value, selectedOptions);
  };

  const filter = (inputValue: string, path: DefaultOptionType[]) =>
    path.some(
      (option) =>
        (option.label as string)
          .toLowerCase()
          .indexOf(inputValue.toLowerCase()) > -1
    );
  const handleInputChange = (e) => {
    // Update the state on each input change
    setSearchValue(e.target.value);
  };
  const handleInputBlur = () => {
    // Update the state when the input field loses focus (on blur)
    console.log("Finished typing. Input value:", searchValue);
  };
  console.log("searchValue", searchValue);

  return (
    <>
      <div className="w-[300px]">
        <div>
          {/* <Cascader
            options={options}
            onChange={onChange}
            placeholder="Please select"
            showSearch={{ filter }}
            onSearch={(value) => console.log(value)}
          /> */}
          <Input
            onChange={handleInputChange}
            placeholder="Basic usage"
            onBlur={handleInputBlur}
          />
        </div>
        <div>
          <Demo filter={searchValue} />
        </div>
      </div>
    </>
  );
}

export default App;
