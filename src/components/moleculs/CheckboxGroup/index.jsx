import { useEffect, useState } from "react";
import Checkbox from "../../atoms/Checkbox";
import { useDispatch } from "react-redux";

import { getProductsByFilter } from "../../../redux/slice/productsFilter";

export default function CheckboxGroup() {
  const [filterData, setFilterData] = useState({
    status: [],
    category: [],
    character: [],
    series: [],
  });
  const dispatch = useDispatch();

  const handleReset = () => {
    setFilterData({
      status: [],
      category: [],
      character: [],
    });
  };

  const handleFilterChange = (title, name) => {
    setFilterData((prevData) => {
      if (title !== "All Item") {
        return {
          ...prevData,
          [name]: prevData[name].includes(title)
            ? prevData[name].filter((item) => item !== title)
            : [...prevData[name], title],
        };
      } else {
        handleReset();
      }
    });
  };

  useEffect(() => {
    dispatch(getProductsByFilter(filterData));
  });
  const availability = [
    {
      title: "All Item",
      name: "status",
      id: "section_11_all",
      className: "section_11_radiodb",
    },
    {
      title: "Ready Stock",
      name: "status",
      id: "section_11_ready",
      className: "section_11_radiodb indented",
    },
    {
      title: "Late pre-order",
      name: "status",
      id: "section_11_po",
      className: "section_11_radiodb indented",
    },
    {
      title: "Pre-Order",
      name: "status",
      id: "section_11_bo",
      className: "section_11_radiodb indented",
    },
  ];
  return (
    <>
      <h2 className="section_11_category">Availability</h2>
      {availability.map((avail) => (
        <Checkbox
          handlechecked={handleFilterChange}
          className={avail.className}
          htmlFor="all"
          type="checkbox"
          name={avail.name}
          id={avail.id}
          title={avail.title}
        />
      ))}
    </>
  );
}
