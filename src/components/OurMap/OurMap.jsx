/* eslint-disable */
import React from "react";
import {
  Clusterer,
  FullscreenControl,
  Map,
  ObjectManager,
  Placemark,
  YMaps,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import { points } from "../../constants/points";
import style from "./styles.module.css";

const defaultState = {
  center: [51.501386, 81.201791],
  zoom: 3,
};

function OurMap() {
  return (
    <div className={style.map_wrap}>
      <YMaps>
        <Map
          defaultState={defaultState}
          width="100%"
          height="100%"
          modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
        >
          <FullscreenControl />
          <ZoomControl options={{ float: "right" }} />
          <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: false,
            }}
          >
            {points.map((point) => (
              <Placemark
                key={point.id}
                geometry={point.coords}
                options={{
                  iconColor: point.color, // цвет иконки, можно также задавать в hex
                }}
                properties={{
                  // пару символов помещается
                  hintContent: `<b>${point.hint}</b>`,
                  // создаём пустой элемент с заданными размерами
                  balloonContent: `<div><h2>${point.title}</h2><h3>${point.description}</h3></div>`,
                  modules: ["geoObject.addon.balloon", "geoObject.addon.hint"],
                }}
              />
            ))}
          </Clusterer>
          <ObjectManager
            options={{
              clusterize: true,
              gridSize: 32,
            }}
            objects={{
              openBalloonOnClick: true,
              preset: "islands#greenDotIcon",
            }}
            filter={(object) => object.id % 2 === 0}
            modules={["objectManager.addon.objectsBalloon", "objectManager.addon.objectsHint"]}
          />
        </Map>
      </YMaps>
    </div>
  );
}

export default OurMap;
