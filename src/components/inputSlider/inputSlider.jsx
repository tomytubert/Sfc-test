import React from "react";
import * as S from "./styles";

const Thumb = (props, state) => (
  <S.StyledThumb {...props}>{state.valueNow}</S.StyledThumb>
);
const Track = (props, state) => (
  <S.StyledTrack {...props} index={state.index} />
);

const InputSlider = ({ setState, state,ranges,stateValue,title }) => {

  const handleTransform = (value) => {
    setState({ ...state, [stateValue]: ranges[value] });
  };

  return (
    <S.InputRange>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <S.StyledSlider
          defaultValue={0}
          max={Object.keys(ranges).length-1}
          renderThumb={Thumb}
          renderTrack={Track}
          onChange={(data) => handleTransform(data)}
        />
      </div>
      <div>
        <p>{state[stateValue]}</p>
      </div>
    </S.InputRange>
  );
};

export default InputSlider;
