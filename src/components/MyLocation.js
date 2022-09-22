import React from 'react'
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 51.42827979585824,
  lng:  6.7794875
};

function MyComponent() {
  return (
    <LoadScript
      /* googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY} */
      googleMapsApiKey='AIzaSyCYhwBqMdTCuZ8Bic1BWmA3EwzBZm2POpU'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        
        <Marker
      
      position={center}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)