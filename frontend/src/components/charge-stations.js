import React from "react";
import { Button } from "antd";

const ChargeStations = (props) => {
  const { chargeStations, startCharging, isChargingStarted } = props;

  return  <>
    <p>Available Charging Stations</p>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">CSID</th>
      <th scope="col">State</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {chargeStations !== null 
    && 
    chargeStations.map(chargeStation => <tr>
                <td>{chargeStation.endpoint}</td>
                <td>{chargeStation.online ? "Online" : "Offline"}</td>
                <td>
                    {chargeStation.online ? 
                    <Button class="button" onClick={() => startCharging()} primary>Start Charging</Button>
                    :
                    "Station not online"
                    }
                </td>
            </tr>
        )
    }
    </tbody>
    </table>
  </>
};

export default ChargeStations;
