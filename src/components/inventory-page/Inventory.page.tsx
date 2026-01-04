import { Grid } from "@mui/material";
import FermentablesChart from "./charts/FermentablesChart";
import AromaHopsChart from "./charts/AromaHopsChart";
import WaterChemicalsWarnings from "./charts/WaterChemicalsWarnings";

export default function InventoryPage() {
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
