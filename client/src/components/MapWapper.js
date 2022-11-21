// react
import React, { useState, useEffect, useRef } from "react";

// openlayers
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import { Fill, RegularShape, Stroke, Style } from "ol/style";
import XYZ from "ol/source/XYZ";
import { Point } from "ol/geom";
import { transform } from "ol/proj";
import { toStringXY } from "ol/coordinate";

function MapWrapper({coord}) {
  // set intial state
  const [map, setMap] = useState();
  const  [vectorLayer, setVectorLayer] = useState()

  // pull refs
  const mapElement = useRef();

  const mapRef = useRef();
  mapRef.current = map;

  useEffect(() => {
    if(vectorLayer){
      map.removeLayer(vectorLayer)
    }
    if(coord){
    const initialVectorLayer = new VectorLayer({
      source: new VectorSource(),
    })
    const stroke = new Stroke({ color: "black", width: 2 });
    const fill = new Fill({ color: "red" });
    const point = new Point([coord.long, coord.lat])
    const source =  new VectorSource({features: [new Feature(point)] })
    const style = new Style({
      image: new RegularShape({
        fill: fill,
        stroke: stroke,
        points: 2.5,
        radius: 10,
        rotation: coord.heading,
        angle: 0,
      })
    })

    // create map
    const initialMap = map || new Map({
      target: mapElement.current,
      layers: [
        // USGS Topo
        new TileLayer({
          source: new XYZ({
            url:'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}',
          }),
        }),

      ],
      view: new View({
        projection: "EPSG:3857",
        center: [0, 0],
        zoom: 6,
      }),
      controls: [],
    });
    initialVectorLayer.setSource(source)
    initialVectorLayer.setStyle(style)
    initialMap.addLayer(initialVectorLayer)
    setVectorLayer(initialVectorLayer)
    setMap(initialMap);
    
 
  }
  }, [coord]);

  // render component
  return (
    <div
      ref={mapElement}
      className="map-container"
      style={{ height: "70vh", width: "100%" }}
    ></div>
  );
}

export default MapWrapper;
