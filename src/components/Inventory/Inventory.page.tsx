import { Grid } from "@mui/material";
import FermentablesChart from "../Charts/FermentablesChart";
import AromaHopsChart from "../Charts/AromaHopsChart";
import WaterChemicalsWarnings from "../Charts/WaterChemicalsWarnings";

export default function Inventory() {
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <FermentablesChart />
      </Grid>
      <Grid size={4}>
        <AromaHopsChart />
      </Grid>
      <Grid size={4}>
        <WaterChemicalsWarnings />
      </Grid>
    </Grid>
  )
}
