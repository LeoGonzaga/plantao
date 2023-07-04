import React from "react";
import Logo from "../Logo";
import Background from "@/components/Background";
import Input from "@/components/Input";

import * as SC from "./styles";

export const Header = (): JSX.Element => {
  return (
    <SC.Container>
      <Background />
      <Logo />
      <Input />
    </SC.Container>
  );
};
