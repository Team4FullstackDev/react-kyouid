import { Link } from "react-router-dom";
import { NavSpan, NavForm, NavButton, NavImage, NavInput, NavModalFormSearch } from "../../atoms/Navbar";
import React, { useState } from "react";
import { LoginSVG,LogoutSVG, AdressBookSVG, MyAccountSVG, OrderHistorySVG, UniqueRequestSVG } from "../../atoms/Svg";

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
    <Link className="nav__modal_link_menu" to="/login">
      <NavImage src="" /> Login
    </Link>
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
        <Link key={index} to={entry.link}>
          <NavButton type="button" className="nav__modal__search-content-entry">
            {entry.label}
          </NavButton>
        </Link>
      ))}
    </div>
  );
};

export const CartBadge = ({ NavItemCount }) => {
  return (
    <>
      {NavItemCount > 0 ? (
        <a
          className="nav__button nav__cart-badge"
          data-count={NavItemCount}
          href="/user/itemOrder"
        >
          <NavImage
            className="nav__cart"
            src="https://kyou.id/static/img/icon/cart.svg"
            alt="Cart Icon"
          />
        </a>
      ) : (
        <a className="nav__button" href="/login">
          <NavImage
            className="nav__cart"
            src="https://kyou.id/static/img/icon/cart.svg"
            alt="Cart Icon"
          />
        </a>
      )}
    </>
  );
};

export const NavUserInfo = ({ username }) => {
  return (
    <div className="nav__menu_user-info">
      <NavImage
        className="nav__menu_user-info-face"
        src="https://kyou.id/static/img/icon/face.png"
        alt="Face Kyou"
      />
      <div className="nav__menu_user-info-detail">
        <NavSpan className="nav__menu_user-info-detail-name">
          {username}
        </NavSpan>
        <NavSpan className="nav__menu_user-info-detail-email">
          3480819118900278
        </NavSpan>
      </div>
    </div>
  );
};

export const NavFriendShip = () => {
  return (
    <div className="nav__menu_friend-ship">
      <div className="nav__menu_friend-ship_detail">
        <NavSpan className="nav__menu_friend-ship_detail_title">
          Friendship Points
        </NavSpan>
        <NavSpan className="nav__menu_friend-ship_detail_points">
          0 Points
        </NavSpan>
      </div>
      <Link className="nav__menu_friend-ship_button" to="/friend-ship">
        FP Shop
      </Link>
    </div>
  );
};

export const DropDownLinkList = () => {
  return (
    <div className="nav__menu_dropdown_list">
      <Link className="nav__menu_dropdown_link" to="">
        <OrderHistorySVG/>
        Order History
      </Link>
      <Link className="nav__menu_dropdown_link" to="">
        <UniqueRequestSVG/>
        Unique Request
      </Link>
      <Link className="nav__menu_dropdown_link" to="">
        <AdressBookSVG/>
        Adress Book
      </Link>
      <Link className="nav__menu_dropdown_link" to="">
        <MyAccountSVG/>
        My Account
      </Link>
    </div>
  );
};

export const BtnLogout = ({ onClick }) => {
  return (
    <NavButton
      type="button"
      className="nav__menu_dropdown_link"
      onClick={onClick}
    >
      <UniqueRequestSVG />
      Log Out
    </NavButton>
  );
};
