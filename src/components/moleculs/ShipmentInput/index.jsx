import React, { useState } from "react";

import { TextAtom, LinkAtom, InputAtom } from "../../atoms/Shipment";

export const ButtonWithTextInputMolecule = ({
  inputClassName,
  buttonClassName,
  buttonText,
}) => (
  <div>
    <InputAtom
      type="text"
      className={inputClassName}
      placeholder="Kode Voucher"
      value=""
    />
    <input type="submit" className={buttonClassName} value={buttonText} />
  </div>
);
