import React, { useState } from "react";
import Category from "../../../moleculs/Category";
import CheckboxGroup from "../../../moleculs/CheckboxGroup";

const Sidebar = () => {
  return (
    <aside>
      <div className="section_11_filter">
        <CheckboxGroup />
        <hr />
        <Category />
      </div>
    </aside>
  );
};

export default Sidebar;
