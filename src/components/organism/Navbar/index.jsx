import React, { useState } from "react";
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
} from "../../moleculs/Navbar";
import { SearchEntries } from "../../../utils/constant/RiwayatSearching";
import { NavModalFormSearch } from "../../atoms/Navbar";

// ModalHamburger Organism
export const ModalHamburger = ({ isVisible, onToggle }) => {
  const hamburgerStyle = {
    display: isVisible ? "block" : "none",
  };

  return (
    <nav className="nav__modal__hamburger" style={hamburgerStyle}>
      <div className="nav__modal-container nav__modal__menu">
        <ModalButtonBack onBack={onToggle} />
        <ModalInfoCard />
        <NavHR />
        <ModalLinkMenu />
      </div>
    </nav>
  );
};

// ModalSearch Organism
export const ModalSearch = ({ isVisible, onToggle }) => {
  const searchStyle = {
    display: isVisible ? "block" : "none",
  };

  return (
    <nav className="nav__modal__search" style={searchStyle}>
      <div className="nav__modal__search-container nav__modal__search_menu">
        <ModalSearchForm onBack={onToggle}/>
        <ModalSearchContent entries={SearchEntries} />
      </div>
    </nav>
  );
};

// Navigation Organism
export const Navigation = () => {
  const [isHamburgerVisible, setHamburgerVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleHamburger = () => {
    setHamburgerVisible(!isHamburgerVisible);
  };

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
  
  // Jika User Ada Cart Testing
  // const [cartItems, setCartItems] = useState(3);
  
  // Jika User Tidak Ada Cart Testing
  const [cartItems, setCartItems] = useState(0);

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
            alt="Searc Icon"
          />
        </NavButton>
        {/*  */}
        <CartBadge NavItemCount={cartItems} />
        <a className="nav__button" href="/login">
          <NavImage
            src="https://kyou.id/static/img/icon/transactions.svg"
            alt="Transactions Icon"
          />
        </a>
        <a className="nav__button nav__wishlist_mobile" href="#">
          <NavImage
            src="https://kyou.id/static/img/icon/wishlist_navbar.svg"
            alt="Wishlist Icon"
          />
        </a>
      </div>
      <div className="nav__signin">
        <a className="nav__text_signin" href="/login">
          Sign in
        </a>
      </div>

      {/* ModalHamburger */}
      <ModalHamburger
        isVisible={isHamburgerVisible}
        onToggle={toggleHamburger}
      />

      {/* ModalSearch */}
      <ModalSearch isVisible={isSearchVisible} onToggle={toggleSearch} />
    </nav>
  );
};
