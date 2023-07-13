import styled from "styled-components";
import ReactSlider from "react-slider";
import variables from "../../Styles/_variables";

export const InputRange = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 25px;
  padding: 10px;
  > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
    width: 100%;
    p {
      font-weight: 500;
    }
  }
  > div:nth-child(3) {
    margin-top: 5px;
  }
  p {
    color: ${variables.colors.black};
    font-family: ${variables.font.title};
    font-size: 0.75rem;
  }
`;

export const StyledSlider = styled(ReactSlider)`
  width: auto;
  height: 5px;
  min-width: 250px;
`;

export const StyledThumb = styled.div`
  background-color: ${variables.colors.purple};
  border-radius: 50%;
  border: 1px solid white;
  bottom: -5px;
  cursor: grab;
  font-size: 0.1px;
  height: 15px;
  text-align: center;
  width: 15px;
`;

export const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) =>
    props.index === 2
      ? "#eaeaea"
      : props.index === 1
      ? variables.colors.purple
      : "#eaeaea"};
  border-radius: 999px;
`;
