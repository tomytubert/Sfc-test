import React, { useState } from "react";
import * as S from "./styles";

const Thumb = (props, state) => (
  <S.StyledThumb {...props}>{state.valueNow}</S.StyledThumb>
);
const Track = (props, state) => (
  <S.StyledTrack {...props} index={state.index} />
);

const InputSliderHour = ({ setState, state }) => {
  const hoursTime = {
    0: "12 am",
    1: "1 am",
    2: "2 am",
    3: "3 am",
    4: "4 am",
    5: "5 am",
    6: "6 am",
    7: "7 am",
    8: "8 am",
    9: "9 am",
    10: "10 am",
    11: "11 am",
    12: "12 pm",
    13: "1 pm",
    14: "2 pm",
    15: "3 pm",
    16: "4 pm",
    17: "5 pm",
    18: "6 pm",
    19: "7 pm",
    20: "8 pm",
    21: "9 pm",
    22: "10 pm",
    23: "11 pm",
    24: "11:59 pm",
  };
  const [hour, setHour] = useState(["12 am", "11:59 pm"]);

  const handleTransformHour = (hours) => {
    const [from, to] = hours;
    setHour([hoursTime[from], hoursTime[to]]);
    setState({ ...state, hourStart: hoursTime[from], hourEnd: hoursTime[to] });
  };

  return (
    <S.InputRange>
      <div>
        <p>Desde</p>
        <p>Hasta</p>
      </div>
      <div>
        <S.StyledSlider
          defaultValue={[0, 24]}
          max={24}
          renderThumb={Thumb}
          renderTrack={Track}
          onChange={(data) => handleTransformHour(data)}
        />
      </div>
      <div>
        <p>{`${hour[0]}-${hour[1]}`}</p>
      </div>
    </S.InputRange>
  );
};

export default InputSliderHour;
