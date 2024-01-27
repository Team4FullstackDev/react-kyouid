// ShipmentFormPage.jsx
import React, { useState } from "react";
import {TextAtom , LinkAtom , InputAtom} from "../../atoms/Shipment";
import { ButtonWithTextInputMolecule } from "../../moleculs/ShipmentInput";


const ShipmentFormPage = () => {

  return (
    <section className="shipment-container">
      <div className="shipment-review">
        <h2>Detail Pengiriman</h2>
        <div className="shipment-content">
          <div className="shipment-box">
            <div className="shipment-main">
              <TextAtom className="shipment-name">
                User_login
              </TextAtom>
              <div className="shipment-action">
                <LinkAtom className="shipment-btn-action" href="#">
                  Ganti Alamat
                </LinkAtom>
              </div>
            </div>
            <div className="shipment-desc-info">
              <TextAtom className="shipment-desc-info-text">
                Jl.lalu Mesir Negara no.2, sandubaya, kota
                mataram, Nusa Tenggara Barat <br />
                MATARAM <br />
                NUSA TENGGARA BARAT 83233 <br />
                087831410109
              </TextAtom>
              <div className="shipment-method">
                <div>
                  <TextAtom>Metode Pengiriman</TextAtom>
                </div>
                <select>
                  <option value="" disabled="">
                    Pilih Metode
                  </option>
                  <optgroup label="Regular">
                    <option value="JNE REG">JNE REG</option>
                    <option value="SICEPAT REG">SiCepat REG</option>
                    <option value="POS REGULER">POS Indonesia Reguler</option>
                  </optgroup>
                  <optgroup label="Next Day">
                    <option value="JNE YES">JNE YES</option>
                    <option value="SICEPAT BEST">SiCepat BEST</option>
                  </optgroup>
                  <optgroup label="Same Day">
                    <option value="GOSEND">GoSend</option>
                  </optgroup>
                  <optgroup label="Store Pickup">
                    <option value="PICKUP_Alpha">Alpha Store</option>
                  </optgroup>
                </select>
              </div>
            </div>
          </div>
          <div className="shipment-box-2">
            <div className="shipment-main">
              <TextAtom className="shipment-payment-detail">
                Payment Details
              </TextAtom>
            </div>
            <div className="shipment-pay-content">
              <div className="shipment-pay-details">
                <div className="shipment-pay-grow">
                  <TextAtom>Subtotal</TextAtom>
                  <TextAtom className="shipment-itemNum">1 items(s)</TextAtom>
                </div>
                <TextAtom>IDR 89,000</TextAtom>
              </div>
              <div className="shipment-pay-details">
                <div className="shipment-pay-grow">
                  <TextAtom>Shipping Fee</TextAtom>
                </div>
                <TextAtom>IDR 0</TextAtom>
              </div>
              <div className="shipment-pay-details">
                <div className="shipment-pay-grow">
                  <TextAtom className="shipment-voucher">
                    Punya kode voucher?
                  </TextAtom>
                  <ButtonWithTextInputMolecule
                    inputClassName="shipment-voucher-input"
                    buttonClassName="shipment-voucher-submit"
                    buttonText="Submit"
                  />
                </div>
              </div>
              <div className="shipment-detail-total">
                <div className="shipment-pay-details">
                  <div className="shipment-pay-grow">
                    <TextAtom>Total</TextAtom>
                  </div>
                  <TextAtom>IDR 89,000</TextAtom>
                </div>
              </div>
              <div className="shipment-pay-details">
                <div className="shipment-pay-grow">
                  <LinkAtom className="shipment-button-checkout" href="#">
                    Pay Now
                  </LinkAtom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShipmentFormPage;
