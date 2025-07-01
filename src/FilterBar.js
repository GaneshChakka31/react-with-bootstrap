// src/components/FilterBar.js
import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";

const categories = [
  "Inverter ACs (445)",
  "Split ACs (258)",
  "3 Star ACs (157)",
  "5 Star ACs (102)",
  "Window ACs (65)",
  "Smart ACs (43)",
  "4 Star ACs (22)",
  "Hot And Cold ACs (10)",
];

const FilterDropdown = ({ title, options }) => {
  const [selected, setSelected] = useState([]);

  const toggleOption = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  return (
    <Dropdown className="me-2 mb-2">
      <Dropdown.Toggle variant="dark" className="text-success fw-bold">
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ maxHeight: "300px", overflowY: "auto" }}>
        {options.map((option, index) => (
          <Form.Check
            key={index}
            type="checkbox"
            label={option}
            checked={selected.includes(option)}
            onChange={() => toggleOption(option)}
            className="ms-3"
          />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const FilterBar = () => {
  return (
    <div className="d-flex flex-wrap justify-content-start p-2 bg-dark">
      <FilterDropdown title="Categories" options={categories} />
      <FilterDropdown title="Brand" options={["LG", "Samsung", "Voltas", "Daikin"]} />
      <FilterDropdown title="Capacity" options={["1 Ton", "1.5 Ton", "2 Ton"]} />
      <FilterDropdown title="Price" options={["Under ₹30,000", "₹30,000 - ₹40,000", "Above ₹40,000"]} />
      <FilterDropdown title="Convertible Mode" options={["4-in-1", "5-in-1", "7-in-1"]} />
    </div>
  );
};

export default FilterBar;
