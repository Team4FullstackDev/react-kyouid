import Section3Card from "../../moleculs/Section3Card";
import { section3Data } from "../../../utils/constant/DataSection3";
export default function Section3() {

  return (
    <section className="section__3">
      <h3 className="section__3-title">Categories</h3>
      <div className="section__3-categories">
        {section3Data.map((item) => (
          <Section3Card imgUrl={item.imgUrl} title={item.title} key={item.id} />
        ))}
      </div>
    </section>
  );
}
