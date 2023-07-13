import React, { useState } from "react";
import * as S from "./styles";
import SelectedButtons from "../../components/selectedButtons/selectedButtons";
import Search from "../../components/Icons/Search/Search";
import DateRange from "../../components/dateRange/DateRange";
import InputSliderHour from "../../components/inputSliderHour/inputSliderHour";
import InputSlider from "../../components/inputSlider/inputSlider";
import Map from "../../components/map/Map";

const OdourInputs = () => {
  const initialState = {
    location: "",
    dateStart: null,
    dateEnd: null,
    typeOf: "",
    hourStart: 0,
    hourEnd: 0,
    intensity: "Muy débil",
    pleasantness: "Extremadamente agradable",
  };

  const intensityRanges = {
    0: "Muy débil",
    1: "Débil",
    2: "Normal",
    3: "Fuerte",
    4: "Muy Fuerte",
  };
  const pleasantnessRanges = {
    0: "Extremadamente agradable",
    1: "Agradable",
    2: "Normal",
    3: "Desagradable",
    4: "Extremadamente desagradable",
  };

  const [state, setState] = useState(initialState);

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  return (
    <S.Content>
      <S.Nav>
        <div>
          <img
            src="./Proposal Wireframes_OdourCollect Logo.svg"
            alt="Odour Collect Logo"
          />
        </div>
      </S.Nav>
      <section>
        <S.Form>
          <div>
            <label htmlFor="location" />
            <S.InputBox>
              <Search />
              <input
                name="location"
                type="text"
                value={state.location || "Ubicación"}
                onChange={handleChange}
              />
            </S.InputBox>
            <label htmlFor="date-start" />
            <DateRange setState={setState} state={state} />
            <div id="type-of-odour">
              <label htmlFor="type-of-odour">Tipo de olor</label>
              <SelectedButtons setState={setState} state={state} />
            </div>
          </div>
          <div>
            <InputSliderHour setState={setState} state={state} />
            <InputSlider
              setState={setState}
              state={state}
              ranges={intensityRanges}
              stateValue={"intensity"}
              title={"Intensidad"}
            />
            <InputSlider
              setState={setState}
              state={state}
              ranges={pleasantnessRanges}
              stateValue={"pleasantness"}
              title={"Agradabilidad"}
            />
          </div>
        </S.Form>
      </section>
      <Map />
    </S.Content>
  );
};

export default OdourInputs;
