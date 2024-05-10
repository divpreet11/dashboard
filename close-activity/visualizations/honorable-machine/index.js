import React from "react";
 
import { AreaChart, LineChart } from "nr1";
 
import { Grid, GridItem } from "nr1";
 
const index = () => {
  return (
    <div className="heading">
      <h1>Custom Dashboard</h1>
      <AreaChart
        accountId={4438264}
        query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2NHxJTkZSQXxOQXw4NjI1Njk4OTY1MzE1NTU2MjE1') TIMESERIES AUTO"
        fullWidth
      />
    </div>
  );
};
 
export default index;
