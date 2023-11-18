import Content from "./Content";
import Sidebar from "./Sidebar/Sidebar";

export default function Wishlist({ handlechange }) {
  return (
    <section className="section11">
      <div className="container">
        <div className="section_11_content">
          <Sidebar handlechange={handlechange} />
          <Content />
        </div>
      </div>
    </section>
  );
}
