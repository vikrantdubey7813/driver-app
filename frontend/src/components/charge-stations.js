import React from "react";
import { Button } from "antd";

const ChargeStations = (props) => {
  const { chargeStations, startCharging, isChargingStarted } = props;

  return  <>
    <p>Available Charging Stations</p>
    <table className="table">
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
        chargeStations.map(chargeStation => <tr key={chargeStation._id}>
                    <td>{chargeStation.endpoint}</td>
                    <td>{chargeStation.online ? "Online" : "Offline"}</td>
                    <td>
                        {chargeStation.online ? 
                            <>
                            { isChargingStarted ? 
                            "Charging Started"
                            :
                            <Button onClick={() => startCharging()}>Start Charging</Button>
                            }
                            </>
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
