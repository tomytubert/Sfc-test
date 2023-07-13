import React, { useMemo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import * as S from "./styles.js"


const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat:   41.3776549, lng: 2.1487613 }), []);

  return (
    <S.Map>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
        />
      )}
    </S.Map>
  );
};

export default Map;
