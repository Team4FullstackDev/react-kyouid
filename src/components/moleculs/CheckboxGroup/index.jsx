import Checkbox from "../../atoms/Checkbox";

export default function CheckboxGroup({ handlechange }) {
  return (
    <>
      <h2 className="section_11_category">Availability</h2>
      <Checkbox
        handlechange={handlechange}
        className="section_11_radiodb"
        htmlFor="all"
        type="checkbox"
        name="Availability"
        id="section_11_all"
        title=" All Items"
      />
      <Checkbox
        handlechange={handlechange}
        className="section_11_radiodb indented"
        htmlFor="Ready"
        type="checkbox"
        name="Availability"
        id="section_11_ready"
        title=" Ready Stock"
      />
      <Checkbox
        handlechange={handlechange}
        className="section_11_radiodb indented"
        htmlFor="po"
        type="checkbox"
        name="Availability"
        id="section_11_ready"
        title=" Pre Order"
      />
      <Checkbox
        handlechange={handlechange}
        className="section_11_radiodb indented"
        htmlFor="bo"
        type="checkbox"
        name="Availability"
        id="section_11_bo"
        title=" Back Order"
      />
      <Checkbox
        handlechange={handlechange}
        className="section_11_radiodb"
        htmlFor="hideclose"
        type="checkbox"
        name="hideclose"
        id="section_11_hideclose"
        title=" Hide Sold Items"
      />
      <Checkbox
        handlechange={handlechange}
        className="section_11_radiodb"
        htmlFor="hideshowcase"
        type="checkbox"
        name="hideshowcase"
        id="section_11_hideshowcase"
        title=" Hide ShowCase Items"
      />
      <Checkbox
        handlechange={handlechange}
        className="section_11_radiodb"
        htmlFor="enableprice"
        type="checkbox"
        name="enableprice"
        id="section_11_enableprice"
        title=" Enable Price Filter"
      />
      <Checkbox
        handlechange={handlechange}
        className="section_11_radiodb"
        htmlFor="showcass"
        type="checkbox"
        name="showcase"
        id="section_11_showcase"
        title=" Only ShowCase Items"
      />
    </>
  );
}
