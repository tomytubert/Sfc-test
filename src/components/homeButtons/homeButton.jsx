import React from "react";
import { Button } from "./styles";


const HomeButton = ({ text,href }) => {
  return <Button href={href}>{text}</Button>;
};

export default HomeButton;
