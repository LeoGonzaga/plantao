import React from "react";
import * as SC from "./styles";
import Tag from "../Tag";
import Title from "../Title";
import Address from "../Address";
import Image from "next/image";

import BLOB1 from "../../../assets/Group 9.png";

export const Card = (): JSX.Element => {
  return (
    <SC.Container>
      <div>
        <Image src={BLOB1} alt="" />
      </div>
      <div>
        <Tag />
        <Title />
        <Address />
      </div>
    </SC.Container>
  );
};
