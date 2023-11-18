import { Link } from "react-router-dom";
import {
  NavSpan,
  NavForm,
  NavButton,
  NavImage,
  NavInput,
  NavSVG,
  NavModalFormSearch,
} from "../../atoms/Navbar";
import React, { useState } from "react";

// ModalButtonBack Molecule
export const ModalButtonBack = ({ onBack }) => {
  return (
    <div className="nav__modal_mobile_top">
      <NavButton
        type="button"
        className="nav__modal_button-back"
        onClick={onBack}
      >
        <NavImage
          className="nav__modal_button-img"
          src="https://kyou.id/static/img/icon/arrow-left.png"
          alt="Back"
        />
      </NavButton>
      <NavSpan className="">Account</NavSpan>
    </div>
  );
};

// ModalInfoCard Molecule
export const ModalInfoCard = () => {
  return (
    <div className="nav__modal_info_card">
      <NavImage
        className="nav__modal_img-face"
        src="https://kyou.id/static/img/icon/face.png"
        alt="Face Icon Guest"
      />
      <NavSpan className="nav__modal_username">Guest</NavSpan>
    </div>
  );
};

// ModalLinkMenu Molecule
export const ModalLinkMenu = () => {
  return (
    <a className="nav__modal_link_menu" href="/login">
      <NavSVG
        xmlns="http://www.w3.org/2000/svg"
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="none"
        className="nav__modal_svg"
        path="M4.25 35H44.149L33.86 45.4781C33.079 46.2581 33.079 47.6201 33.859 48.4011C34.25 48.7921 34.761 49.035 35.274 49.035C35.786 49.035 36.297 48.864 36.688 48.473L49.503 35.6721C49.878 35.2971 50.089 34.794 50.089 34.264C50.089 33.734 49.878 33.228 49.503 32.853L48.895 32.246C48.757 32.046 48.583 31.872 48.382 31.735L36.689 20.042C35.908 19.261 34.641 19.261 33.861 20.042C33.08 20.823 33.08 21.898 33.861 22.68L42.373 31H4.25C3.146 31 2.25 31.896 2.25 33C2.25 34.104 3.146 35 4.25 35ZM64.75 59.281V9.541C64.75 4.747 60.842 0 56.003 0H30.002C25.258 0 20.75 4.576 20.75 9.541V21.381C20.75 22.485 21.646 23.381 22.75 23.381C23.854 23.381 24.75 22.485 24.75 21.381V9.541C24.75 6.792 27.471 4 30.002 4H56.003C58.65 4 60.75 6.937 60.75 9.541V59.281C60.75 61.944 58.547 63 56.003 63H30.002C27.637 63 24.75 62.113 24.75 59.281V47.381C24.75 46.277 23.854 45.381 22.75 45.381C21.646 45.381 20.75 46.277 20.75 47.381V59.281C20.75 63.974 24.931 67 30.002 67H56.003C61.188 67 64.75 63.823 64.75 59.281Z"
      />
      Login
    </a>
  );
};

// ModalSearchForm Molecule
export const ModalSearchForm = ({ onBack }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="nav__modal__search_mobile_top">
      <NavButton
        type="button"
        className="nav__modal_button-back"
        onClick={onBack}
      >
        <NavImage
          className="nav__modal_button-img"
          src="https://kyou.id/static/img/icon/arrow-left.png"
          alt="Back"
        />
      </NavButton>
      <NavModalFormSearch>
        <NavInput
          className="nav__input_search"
          type="search"
          placeholder="Khilaf apa hari ini?"
          name="search"
          autoComplete="off"
          value=""
          onChange={handleInputChange}
        />
      </NavModalFormSearch>
    </div>
  );
};

// ModalSearchContent Molecule
export const ModalSearchContent = ({ entries }) => {
  return (
    <div className="nav__modal__search-content">
      <NavSpan className="nav__modal__search-content-label">Riwayat</NavSpan>
      {entries.map((entry, index) => (
        <a key={index} href={entry.link}>
          <button type="button" className="nav__modal__search-content-entry">
            {entry.label}
          </button>
        </a>
      ))}
    </div>
  );
};

export const CartBadge = ({ NavItemCount }) => {
  return (
    <React.Fragment>
      {NavItemCount > 0 ? (
        <Link
          className="nav__button nav__cart-badge"
          data-count={NavItemCount}
          to="carts"
        >
          <NavImage
            className="nav__cart"
            src="https://kyou.id/static/img/icon/cart.svg"
            alt="Cart Icon"
          />
        </Link>
      ) : (
        <a className="nav__button" href="/login">
          <NavImage
            className="nav__cart"
            src="https://kyou.id/static/img/icon/cart.svg"
            alt="Cart Icon"
          />
        </a>
      )}
    </React.Fragment>
  );
};
