import { Marker } from "@react-google-maps/api";

const CurveMarker = ({ pos1, pos2, mapProjection, zoom }) => {
    console.log('pos1111', pos1, pos2, mapProjection, zoom)
    if (!mapProjection) return <div/>;
    var curvature = 0.4
  
    const p1 = mapProjection.fromLatLngToPoint(pos1),
          p2 = mapProjection.fromLatLngToPoint(pos2);
  
    // Calculating the arc.
    const e = new window.google.maps.Point(p2.x - p1.x, p2.y - p1.y), // endpoint
      m = new window.google.maps.Point(e.x / 2, e.y / 2), // midpoint
      o = new window.google.maps.Point(e.y, -e.x), // orthogonal
      c = new window.google.maps.Point(m.x + curvature * o.x, m.y + curvature * o.y); //curve control point
  
    const pathDef = 'M 0,0 ' + 'q ' + c.x + ',' + c.y + ' ' + e.x + ',' + e.y;
  
    const scale = 1 / (Math.pow(2, -zoom));
  
    const symbol = {
      path: pathDef,
      scale: scale,
      strokeWeight: 2,
      fillColor: 'none'
    };
  
    return <Marker 
              position={pos1} 
              clickable={false} 
              icon={symbol}
              zIndex={0}
            />;
  };
  export default CurveMarker;