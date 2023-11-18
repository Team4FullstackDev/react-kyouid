import Category from "../../../moleculs/Category";
import CheckboxGroup from "../../../moleculs/CheckboxGroup";

const SidebarMobile = ({ handlechange }) => {
  return (
    <aside>
      <div className="section_11_filter_mobile">
        <div className="section_11_filter_mobile_content">
          <CheckboxGroup handlechange={handlechange} />
          <hr />
          <Category />
        </div>
      </div>
    </aside>
  );
};

export default SidebarMobile;
