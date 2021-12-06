import { useParams } from "react-router-dom";
import { useAggregatedRecords } from "../../resources";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Chart from "../dashboard/Chart";
import RenderBarChart from "../dashboard/BarChart";

const AggregateRegistrations = () => {
  const params = useParams();
  console.log("params", params);
  const { status, data, error, isFetching } = useAggregatedRecords(params);
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 480,
                width: "60vw",
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 480,
                width: "60vw",
              }}
            >
              <RenderBarChart />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AggregateRegistrations;
