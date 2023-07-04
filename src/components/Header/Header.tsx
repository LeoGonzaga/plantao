import React from "react";
import Input from "@/components/Input";
import * as SC from "./styles";
import Logo from "../Logo";
import Background from "../Background";

export const Header = (): JSX.Element => {
  return (
    <SC.Container>
      <Background />
      <Logo />
      <Input />
    </SC.Container>
  );
};
