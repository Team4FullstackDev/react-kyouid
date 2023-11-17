import Category from "../../../moleculs/Category";
import CheckboxGroup from "../../../moleculs/CheckboxGroup";

const Sidebar = ({ handlechange }) => {
  return (
    <aside>
      <div className="section_11_filter">
        <CheckboxGroup handlechange={handlechange} />
        <hr />
        <Category />
      </div>
    </aside>
  );
};

export default Sidebar;
