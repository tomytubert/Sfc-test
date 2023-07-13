import React from "react";
import * as S from "./styles"

const SelectedButtons = ({setState,state}) => {

  return (
      <div>
        <S.Button
          type="button"
          clicked={state.typeOf === "industrial" ? "true" : "false"}
          onClick={() => setState({ ...state, typeOf: "industrial" })}
        >
          Industrial
        </S.Button>
        <S.Button
          type="button"
          clicked={state.typeOf === "urban" ? "true" : "false"}
          onClick={() => setState({ ...state, typeOf: "urban" })}
        >
          Urbano
        </S.Button>
        <S.Button
          type="button"
          clicked={state.typeOf === "residues" ? "true" : "false"}
          onClick={() => setState({ ...state, typeOf: "residues" })}
        >
          Residuos y aguas residuales
        </S.Button>
        <S.Button
          type="button"
          clicked={state.typeOf === "countryside" ? "true" : "false"}
          onClick={() => setState({ ...state, typeOf: "countryside" })}
        >
          Campo y naturaleza
        </S.Button>
        <S.Button
          type="button"
          clicked={state.typeOf === "food" ? "true" : "false"}
          onClick={() => setState({ ...state, typeOf: "food" })}
        >
          Comida
        </S.Button>
      </div>
  );
};

export default SelectedButtons;
