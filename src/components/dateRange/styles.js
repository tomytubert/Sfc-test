import styled from "styled-components";

export const DateInput = styled.div`
  border-radius: 10px;
  border: 1px solid #8080808c;
  padding: 5px;
  width: 100%;
  .react-datepicker-wrapper {
    display: flex;
  }
  .react-datepicker__input-container {
    display: flex;
    > svg {
      position: relative;
      padding-left: 10px;
    }
  }
  .react-datepicker-popper {
    z-index: 5;
  }
  input {
    border: none;
    font-size: 1rem;
    padding: 5px;
    width: 100%;
  }
  @media (min-width: 768px) {
    width: auto;
  }
`;
