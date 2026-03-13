
import React, { useState } from "react";
import axios from "axios";
import bus from "../images/bus.jpg";

function Login() {

  const [busNumber, setBusNumber] = useState("");
  const [route, setRoute] = useState("");

  const login = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/bus/login",
        { busNumber, route }
      );

      if (res.data.success) {

        window.location = "/tracker/" + busNumber;

      } else {

        alert("Bus not found");

      }

    } catch (error) {

      alert("Server error");

    }

  };

  return (

    <div style={styles.container}>

      <div style={styles.box}>

        <h2>Bus Tracker Login</h2>

        <input
          type="text"
          placeholder="Bus Number"
          onChange={(e)=>setBusNumber(e.target.value)}
        />

        <br/><br/>

        <input
          type="text"
          placeholder="Route"
          onChange={(e)=>setRoute(e.target.value)}
        />

        <br/><br/>

        <button onClick={login}>Login</button>

      </div>

    </div>

  );

}

const styles = {

  container:{
    height:"100vh",
    backgroundImage: `url(${bus})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },

  box:{
    background:"white",
    padding:"40px",
    borderRadius:"10px",
    textAlign:"center"
  }

};

export default Login;