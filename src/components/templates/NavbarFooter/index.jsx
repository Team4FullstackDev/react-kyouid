import Footer from "../../organism/Footer";
import {
  Navigation,
  ModalHamburger,
  ModalSearch,
} from "../../organism/Navbar/index";
import { Outlet } from "react-router";
export default function NavbarFooter() {
  return (
    <>
      {/* <!-- Header By Harymahayana07 --> */}
      <header>
        <ModalHamburger />
        <ModalSearch />
        <Navigation />
      </header>
      {/* <!-- End Header --> */}
      <div className="navFooter__outlet">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
