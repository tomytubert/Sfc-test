import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as S from "./styles";

const DateRange = ({ setState, state }) => {

  return (
    <S.DateInput>
      <ReactDatePicker
        showIcon
        selectsRange={true}
        startDate={state.dateStart}
        endDate={state.dateEnd}
        onChange={(update) => {
          setState({ ...state, dateStart: update[0], dateEnd: update[1] });
        }}
        className="red-border"
      />
    </S.DateInput>
  );
};

export default DateRange;
