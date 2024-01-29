import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCart } from "../../../redux/actions/carts.action";
import { Link } from "react-router-dom";
import useAuthentication from "../../../hooks/UseAuth";
import axios from "axios";
import {
  NavButton,
  NavForm,
  NavHR,
  NavImage,
  NavInput,
  NavSpan,
} from "../../atoms/Navbar";
import {
  ModalButtonBack,
  ModalInfoCard,
  ModalLinkMenu,
  ModalSearchForm,
  ModalSearchContent,
  CartBadge,
  NavUserInfo,
  NavFriendShip,
  DropDownLinkList,
  BtnLogout,
} from "../../moleculs/Navbar";
import { SearchEntries } from "../../../utils/constant/RiwayatSearching";
import { setCurrentUser, setIsLoggedIn } from "../../../redux/slice/auth.slice";

export default function NavigationAndModal() {
  const { user, logoutAction } = useAuthentication();
  const { isLoggedIn, currentUser } = useSelector((state) => state.auth);
  const [isHamburgerVisible, setHamburgerVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleHamburger = () => {
    setHamburgerVisible(!isHamburgerVisible);
  };

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const toggleDropDown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const cartItems = useSelector((state) => state.user.carts);

  useEffect(() => {
    if (!cartItems.length) {
      dispatch(getProductsCart());
    }
    if(localStorage.getItem("user")) {
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem("user")).user));
      dispatch(setIsLoggedIn(true));
    }
  }, []);

  const logoutTest = async () => {
    localStorage.removeItem("user");
    dispatch(logoutAction());
  };

  const hamburgerStyle = {
    display: isHamburgerVisible ? "block" : "none",
  };

  const searchStyle = {
    display: isSearchVisible ? "block" : "none",
  };

  return (
    <nav className="nav__navigation">
      <NavButton
        type="button"
        id="nav__modal_button-menu"
        className="nav__button_menu"
        onClick={toggleHamburger}
      >
        <NavImage
          src="https://kyou.id/static/img/icon/menu.svg"
          alt="navbar menu"
        />
      </NavButton>
      <div>
        <a className="nav__icons" href="#">
          <picture className="nav__mascot">
            <NavImage
              className="nav__mascot"
              src="https://kyou.id/static/img/logo/mascot.png"
              alt="img_mascot"
            />
          </picture>
          <picture className="nav__logo-kyou">
            <NavImage
              className="nav__img-kyou"
              src="https://kyou.id/static/img/logo/kyou.png"
              alt="img_kyou"
            />
          </picture>
        </a>
      </div>
      <NavForm className="nav__form_search">
        <NavInput
          className="nav__input_search"
          type="search"
          placeholder="Khilaf apa hari ini?"
        />
        <NavButton type="submit" className="nav__search_submit">
          <NavImage
            src="https://kyou.id/static/img/icon/search.svg"
            alt="search icon"
          />
        </NavButton>
      </NavForm>
      <div className="nav__links">
        <NavButton
          className="nav__button nav__search_mobile"
          id="nav__modal_button-search"
          onClick={toggleSearch}
        >
          <NavImage
            className="nav__search_mobile_img"
            src="https://kyou.id/static/img/icon/search_orange.svg"
            alt="Search Icon"
          />
        </NavButton>
        <CartBadge NavItemCount={cartItems?.length} />
        <Link className="nav__button" to="/transactions">
          <NavImage
            src="https://kyou.id/static/img/icon/transactions.svg"
            alt="Transactions Icon"
          />
        </Link>
        <Link className="nav__button nav__wishlist_mobile">
          <NavImage
            src="https://kyou.id/static/img/icon/wishlist_navbar.svg"
            alt="Wishlist Icon"
          />
        </Link>
      </div>
      {isLoggedIn ? (
        <div>
          <NavButton
            type="button"
            className="nav__button-signin"
            onClick={toggleDropDown}
          >
            <NavImage
              className="nav__menu_user-info-face"
              src="https://kyou.id/static/img/icon/face.png"
              alt="Face Kyou"
            />
            <NavSpan className="nav__name-signin">
              Hello {currentUser && currentUser.username}
            </NavSpan>
            <NavImage
              className="nav__triangle-signin"
              src="https://kyou.id/static/img/icon/triangle-down.png"
              alt="Triangle-down"
            />
          </NavButton>
          {isDropdownOpen && (
            <div className="nav__menu-dropdown">
              <div className="nav__menu_top"></div>
              <div className="nav__menu_inner_mobile">
                <NavUserInfo username={user && user.name} />
                <NavHR />
                <NavFriendShip />
                <NavHR />
                <DropDownLinkList />
                <NavHR />
                <BtnLogout onClick={logoutTest} />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="nav__signin">
          <Link className="nav__text_signin" to="/login">
            Sign in
          </Link>
        </div>
      )}
      {/* ModalHamburger */}
      <nav className="nav__modal__hamburger" style={hamburgerStyle}>
        <div className="nav__modal-container nav__modal__menu">
          <ModalButtonBack onBack={toggleHamburger} />
          {isLoggedIn ? (
            <div className="nav__menu_inner_mobile">
              <NavUserInfo username={user && user.name} />
              <NavHR />
              <NavFriendShip />
              <NavHR />
              <DropDownLinkList />
              <NavHR />
              <BtnLogout onClick={logoutAction} />
            </div>
          ) : (
            <>
              <ModalInfoCard />
              <NavHR />
              <ModalLinkMenu />
            </>
          )}
        </div>
      </nav>

      {/* ModalSearch */}
      <nav className="nav__modal__search" style={searchStyle}>
        <div className="nav__modal__search-container nav__modal__search_menu">
          <ModalSearchForm onBack={toggleSearch} />
          <ModalSearchContent entries={SearchEntries} />
        </div>
      </nav>
    </nav>
  );
}
