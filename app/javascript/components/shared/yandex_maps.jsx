import React from 'react';
import {Map, Placemark, YMaps} from "react-yandex-maps";

export default function YandexMaps(props) {
  const { places, width, height, zoom, center } = props;
  return (
    <YMaps>
      <Map
        width={width}
        height={height}
        defaultState={{
          center: center,
          zoom: zoom,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        {places.map((place, i) =>
          <Placemark
            key={i}
            modules={['geoObject.addon.balloon']}
            geometry={[place.longitude, place.latitude]}
            properties={{
              balloonContentBody:
              place.address,
            }}
          />
        )}
      </Map>
    </YMaps>
  );
}
