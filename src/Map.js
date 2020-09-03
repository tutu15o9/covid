import React from "react";
import "./Map.css";
import { Map as LMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "./helper/util";
function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LMap>
    </div>
  );
}

export default Map;
