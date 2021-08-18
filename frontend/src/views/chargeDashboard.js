import React, { useState, useEffect } from "react";
import { ChargeStations } from "../components";
import { Transaction } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import { message } from 'antd';

const ChargeDashboard = () => {
  const [chargeStations, setChargeStations] = useState(null);
  const [isChargingStarted, setIsChargingStarted] = useState(false);
  const [transactions, setTransactions] = useState(null);
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const { user, getAccessTokenSilently } = useAuth0();

  const { name, picture, email } = user;

  useEffect(() => {
    if (chargeStations === null) {
      getChargeStations();
    }
    if (transactions === null) {
      getTransactions();
    }
    const interval = setInterval(() => getTransactions(), 10000)
    return () => {
      clearInterval(interval);
    }
  }, []);

  const getChargeStations = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/api/edrv/charge-stations`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responseData = await response.json();
      if(responseData.ok){
        setChargeStations(responseData.result);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const getTransactions = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/api/edrv/transactions`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responseData = await response.json();
      if(responseData.ok){
        handleTransactions(responseData.result);
      }
      else{

      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const startCharging = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/api/edrv/start-charging`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responseData = await response.json();
      if(responseData.ok){
        getTransactions();
        message.success("Charging started")
      }
      else{
        message.error(responseData.message)
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const stopCharging = async (transactionId) => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/api/edrv/stop-charging`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ transactionId: transactionId})
        }
      );
      const responseData = await response.json();
      if(responseData.ok){
        getTransactions();
        message.success("Charging stopped")
      }
      else{
        message.error(responseData.message)
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const handleTransactions = (transactions) => {
    setTransactions(transactions)
    let isChargingStarted = false;
    transactions.forEach(transaction => {
      if(transaction.status === "Started"){
        isChargingStarted = true;
      }
    })
    setIsChargingStarted(isChargingStarted)
  }


  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <ChargeStations chargeStations={chargeStations} startCharging={startCharging} isChargingStarted={isChargingStarted} />
        <Transaction transactions={transactions} stopCharging={stopCharging} />
      </div>
    </div>
  );
};

export default ChargeDashboard;
