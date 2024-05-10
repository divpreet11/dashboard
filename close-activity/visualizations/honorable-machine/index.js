import React from "react";
import {
  AreaChart,
  LineChart,
  BarChart,
  TableChart,
  SparklineChart,
  StackedBarChart,
} from "nr1";
import { Grid, GridItem } from "nr1";

const index = () => {
  return (
    <div className="heading">
      <h1>Custom Dashboard</h1>
      <Grid>
        <GridItem columnSpan={4}>
          <AreaChart
            accountId={4438264}
            query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2NHxJTkZSQXxOQXw4NjI1Njk4OTY1MzE1NTU2MjE1') TIMESERIES AUTO"
            fullwidth
          />
        </GridItem>
        <GridItem columnSpan={4}>
          <LineChart
            accountId={4438264}
            query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI2NHxJTkZSQXxOQXw4NjI1Njk4OTY1MzE1NTU2MjE1') TIMESERIES AUTO"
            fullwidth
          />
        </GridItem>
        <GridItem columnSpan={4}>
          <BarChart
            accountId={4438264}
            query="SELECT average(cpuPercent) AS `CPU used %` FROM SystemSample WHERE (entityGuid = 'NDQzODI2NHxJTkZSQXxOQXw4NjI1Njk4OTY1MzE1NTU2MjE1') TIMESERIES AUTO"
            fullwidth
          />
        </GridItem>
      </Grid>

      <Grid>
        <GridItem columnSpan={4}>
          <TableChart
            accountId={4438264}
            query="SELECT latest(diskUsedPercent) AS `Used %` FROM StorageSample WHERE (entityGuid = 'NDQzODI2NHxJTkZSQXxOQXw4NjI1Njk4OTY1MzE1NTU2MjE1') FACET device LIMIT MAX"
            fullwidth
          />
        </GridItem>
        <GridItem columnSpan={4}>
          <SparklineChart
            accountId={4438264}
            query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2NHxJTkZSQXxOQXw4NjI1Njk4OTY1MzE1NTU2MjE1') TIMESERIES AUTO"
            fullwidth
          />
        </GridItem>
        <GridItem columnSpan={4}>
          <StackedBarChart
            accountId={4438264}
            query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI2NHxJTkZSQXxOQXw4NjI1Njk4OTY1MzE1NTU2MjE1') TIMESERIES AUTO"
            fullwidth
          />
        </GridItem>
      </Grid>
    </div>
  );
};

export default index;
