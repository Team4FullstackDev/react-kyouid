import Footer from "../../organism/Footer";
import NavigationAndModal from "../../organism/Navbar/index";
import { Outlet } from "react-router";
export default function NavbarFooter() {
  return (
    <>
      {/* <!-- Header By Harymahayana07 --> */}
      <header>
        <NavigationAndModal />
      </header>
      {/* <!-- End Header --> */}
      <div className="navFooter__outlet">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
