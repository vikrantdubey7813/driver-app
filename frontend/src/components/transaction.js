import React from "react";
import { Button } from 'antd';
import NumberFormat from 'react-number-format';


const Transaction = (props) => {
  const { transactions, stopCharging } = props;

  return  <>
    <p>Transactions</p>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Status</th>
      <th scope="col">Energy Consumed (kWh)</th>
      <th scope="col">Time</th>
      <th scope="col">Cost</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {transactions !== null 
    && 
    transactions.map(transaction => <tr key={transaction._id}>
                <td>{transaction.status}</td>
                <td>{transaction.metrics.wattHoursConsumed / 1000}</td>
                <td>{transaction.metrics.timeSpentCharging ? transaction.metrics.timeSpentCharging : transaction.metrics.chargingStart}</td>
                <td>{transaction.cost ? 
                        <span style={{textTransform: "uppercase"}}>
                            <NumberFormat value={transaction.cost.amount} displayType={'text'} decimalScale={2} thousandSeparator={true} />
                            {" " + transaction.cost.currency}
                        </span>
                        :
                        "NA"
                    }
                </td>
                <td>
                    {transaction.status === "Started" ? 
                    <Button class="button" danger onClick={() => stopCharging(transaction._id)}>Stop Charging</Button>
                    :
                    null
                    }
                </td> 
            </tr>
        )
    }
    </tbody>
    </table>
  </>
};

export default Transaction;
