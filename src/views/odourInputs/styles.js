import styled from "styled-components";
import variables from "../../Styles/_variables";

export const Content = styled.main`
  background-color: white;
  padding-top: 100px;
`;

export const Nav = styled.nav`
  background: transparent;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 5;
  > div {
    padding: 20px 60px;
  }
  img {
    width: 100%;
    max-width: 150px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 60px 20px;
  input,
  p,
  label,
  button {
    font-family: ${variables.font.title};
  }
  label {
    font-size: 1rem;
    font-weight: 500;
  }
  > div {
    align-items: flex-end;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  #type-of-odour {
    display: flex;
    flex-direction: column;
    gap: 10px;
    > div {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
    }
  }
`;

export const InputBox = styled.div`
  align-items: center;
  border-radius: 10px;
  border: 1px solid #8080808c;
  display: flex;
  gap: 5px;
  padding: 10px;
  width: 100%;
  input {
    border: none;
    font-size: 1rem;
    height: fit-content;
  }
  @media (min-width: 768px) {
    width: auto;
    > div {
      flex-wrap: nowrap;
    }
  }
`;
