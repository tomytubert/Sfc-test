import styled from "styled-components";
import variables from "../../Styles/_variables"

export const Button = styled.a`
  background: transparent;
  border: none;
  color: ${variables.colors.black};
  cursor:pointer;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  text-decoration:none; 
  &:hover,&:active{
    color: ${variables.colors.red};
    text-decoration:underline; 
  }
`;
