import React, { useEffect, useState } from "react";
import axios from "axios";

import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

function Tracker() {

  const [location, setLocation] = useState({
    lat: 17.3850,
    lng: 78.4867
  });

  const busNumber =
  window.location.pathname.split("/")[2];
// eslint-disable-next-line
  useEffect(() => {

    const getLocation = async () => {

      const res = await axios.get(
        "http://localhost:5000/api/location/" + busNumber
      );

      if (res.data) {
        setLocation({
          lat: res.data.lat,
          lng: res.data.lng
        });
      }

    };

    setInterval(getLocation, 3000);

  }, [busNumber]);

  return (

    <div>

      <h2 style={{textAlign:"center"}}>Live Bus Tracker</h2>

      <LoadScript googleMapsApiKey="AIzaSyCyOrP7k_Gq7XxN13JZ6SM1mfFiATLqbyc">

        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "500px"
          }}
          center={location}
          zoom={14}
        >

          <Marker position={location} />

        </GoogleMap>

      </LoadScript>

    </div>

  );

}

export default Tracker;