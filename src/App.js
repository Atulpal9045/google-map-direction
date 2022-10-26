import React from "react";
import {
  Circle,
  DrawingManager,
  GoogleMap,
  Marker,
  MarkerClusterer,
  OverlayView,
  Polygon,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";
import CurveMarker from "./components/CurveMarker";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = { lat: 29.4727, lng: 77.7085 };

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAyWL0a-gTuCOVfpQSKAVFyL7MKF1cMZeQ",
  });

  const [map, setMap] = React.useState(null);
  const [projection, setProjection] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    let Map = window.google.maps.Map;
    // let LatLng = window.google.maps.LatLng;
    let LatLngBounds = window.google.maps.LatLngBounds;
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    // setMap(map);

    // const pos1 = new LatLng(path[0]);
    // const pos2 = new LatLng(path[3]);

    const bounds = new LatLngBounds();
    bounds.extend(locations[0]);
    bounds.extend(locations[1]);

    // let map1 = new window.google.maps.Map(
    //   document.getElementById("map-canvas"),
    //   {
    //     center: bounds.getCenter(),
    //     zoom: 12,
    //   }
    // );
    setMap(map);
    map.fitBounds(bounds);
    console.log("map", map);
    const projection = map.getProjection();

    setProjection(projection);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  /* marker functoin */

  const locations = [
    { lat: 28.9845, lng: 77.7064 },
    { lat: 29.2773, lng: 77.707 },
    { lat: 29.9578, lng: 77.5541 },
    { lat: 30.3165, lng: 78.0322 },
  ];

  // const options = {
  //   imagePath:
  //     "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m6.png", // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  // };

  function createKey(location) {
    return location.lat + location.lng;
  }

  //   /* cricle */

  //   const options1 = {
  //     strokeColor: "#FF0000",
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: "#FF0000",
  //     fillOpacity: 0.35,
  //     clickable: false,
  //     draggable: false,
  //     editable: false,
  //     visible: true,
  //     radius: 30000,
  //     zIndex: 1,
  //   };

  //   const onLoad1 = (circle) => {
  //     console.log("Circle onLoad circle: ", circle);
  //   };

  //   const onUnmount1 = (circle) => {
  //     console.log("Circle onUnmount circle: ", circle);
  //   };

  //   /* overlay */
  //   const onClick = () => {
  //     console.info("I have been clicked!");
  //   };

  //   const divStyle = {
  //     background: "white",
  //     border: "1px solid #ccc",
  //     padding: 15,
  //   };

  //   let position = {
  //     lat: 28.9845,
  //     lng: 77.7064,
  //   };

  //   /* polygon */

  //   const options2 = {
  //     fillColor: "lightblue",
  //     fillOpacity: 1,
  //     strokeColor: "red",
  //     strokeOpacity: 1,
  //     strokeWeight: 2,
  //     clickable: false,
  //     draggable: false,
  //     editable: false,
  //     geodesic: false,
  //     zIndex: 1,
  //   };

  //   /* polylines */

  //   var lineSymbol = {
  //     path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
  //   };

  //   const options3 = {
  //     strokeColor: "#FF0000",
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: "#FF0000",
  //     fillOpacity: 0.35,
  //     clickable: true,
  //     draggable: true,
  //     editable: true,
  //     visible: true,
  //     radius: 300000,
  //     paths: locations,
  //     zIndex: 1,
  //     geodesic: true,
  //     icons: [
  //       {
  //         icon: lineSymbol,
  //         offset: "100%",
  //       },
  //     ],
  //   };

  return isLoaded ? (
    <GoogleMap
      id="map-canvas"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={3}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* <MarkerClusterer options={options}>
//         {(clusterer) =>
//           locations.map((location) => (
//             <Marker
//               key={createKey(location)}
//               position={location}
//               clusterer={clusterer}
//             />
//           ))
//         }
//       </MarkerClusterer> */}
      {/* <Circle
//         // optional
//         onLoad={onLoad1}
//         // optional
//         onUnmount={onUnmount1}
//         // required
//         center={center}
//         zoom={3}
//         // required
//         options={options1}
//       /> */}
      {/* <DrawingManager onLoad={onLoad1} onPolygonComplete={onPolygonComplete} /> */}
      {/* <OverlayView
//         position={center}
//         mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//         // position={position}
//       >
//         <div style={divStyle}>
//           <h1>OverlayView</h1>

//           <button onClick={onClick} type="button">
//             Click me
//           </button>
//         </div>
//       </OverlayView> */}
      {/* <Marker
//         icon={{
//           path: window.google.maps.SymbolPath.CIRCLE,
//           scale: 7,
//         }}
//         position={center}
//       /> */}
      {/* <Marker
//         options={{
//           imagePath:
//             "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m6.png",
//         }}
//         position={locations[0]}
//       /> */}
      {/* <Marker
//         options={{
//           imagePath:
//             "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m6.png",
//         }}
//         position={locations[1]}
//       /> */}
      {/* <Marker
//         options={{
//           imagePath:
//             "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m6.png",
//         }}
//         position={locations[2]}
//       /> */}
      {/* <Marker
//         options={{
//           imagePath:
//             "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m6.png",
//         }}
//         position={locations[3]}
//       /> */}
      {/* <Polygon onLoad={onLoad1} paths={locations} options={options2} /> */}
      {/* <Polyline onLoad={onLoad1} path={locations} options={options3} /> */}
      <CurveMarker
        pos1={locations[0]}
        pos2={locations[2]}
        mapProjection={projection}
        zoom={6}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default App;

// import React from "react";
// import { GoogleMap, Polyline, useLoadScript } from "@react-google-maps/api";
// import CurveMarker from "./components/CurveMarker";

// let Map = window.google.maps.Map;
// let LatLng = window.google.maps.LatLng;
// let LatLngBounds = window.google.maps.LatLngBounds;
// // Marker = window.google.maps.Marker,
// // Point = window.google.maps.Point;und

// const containerStyle = {
//   width: "100%", //or any other form of width px, em, rem,
//   height: "90vh",
//   // margin: '1rem',
//   // zindex: 1,
// };
// // must include geometry for curved lines
// const libraryList = ["places", "geometry", "drawing"];
// const center = { lat: 29.4727, lng: 77.7085 };
// const api_Key = "AIzaSyAyWL0a-gTuCOVfpQSKAVFyL7MKF1cMZeQ";
// // your gps points to connect in sequence can be from props etc
// const path = [
//   // {lat: -19.079030990601, lng: -169.92559814453}, //first/start
//   // {lat: 28.2014833, lng: -177.3813083},
//   // {lat: 39.849312, lng: -104.673828},
//   // {lat: 16.7249971, lng: -3.00449998}  // last/finish
//   // { lat: 28.9845, lng: 77.7064 },
//   { lat: 29.2773, lng: 77.707 },
//   { lat: 29.9578, lng: 77.5541 },
//   { lat: 22.2587, lng: 71.1924 },
//   { lat: 30.3165, lng: 78.0322 },
// ];
// //geodesic: true for curve, otherwise straight lines
// const pathOptions = {
//   strokeColor: "#FF0000",
//   strokeOpacity: 0.5,
//   strokeWeight: 2,
//   fillColor: "#FF0000",
//   fillOpacity: 0.5,
//   clickable: false,
//   draggable: false,
//   editable: false,
//   visible: true,
//   radius: 30000,
//   paths: path,
//   geodesic: true,
//   zIndex: 2,
// };

// const pos1 = new LatLng(path[0]);
// const pos2 = new LatLng(path[3]);

// const bounds = new LatLngBounds();
// bounds.extend(pos1);
// bounds.extend(pos2);

// let map = new Map(document.getElementById("map-canvas"), {
//   center: bounds.getCenter(),
//   zoom: 12,
// });
// map.fitBounds(bounds);

// const projection = map.getProjection();

// function App() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: api_Key,
//     libraryList,
//   });
//   if (loadError) return "Error msg or function";
//   if (!isLoaded) return "Loading msg or function";
//   return (
//     <div>
//       <h2>A nice map title</h2>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         zoom={7}
//         center={center}
//         onLoad=
//         // mapTypeId={"satellite"} //can be omitted
//       >
//         {/* <Polyline path={path} options={pathOptions} /> */}
//         <CurveMarker
//           pos1={pos1}
//           pos2={pos2}
//           mapProjection={projection}
//           zoom={6}
//         />
//       </GoogleMap>
//     </div>
//   );
// }

// export default App;
