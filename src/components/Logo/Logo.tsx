import React from "react";
import * as SC from "./styles";

import LOGO from "../../../assets/logo.png";
import Image from "next/image";

export const Logo = (): JSX.Element => {
  return (
    <SC.Container>
      <Image src={LOGO} alt="" />
    </SC.Container>
  );
};
