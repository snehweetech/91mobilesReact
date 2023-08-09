import LeftSidebar from "@/CommonComponent/leftSidebar";
import PrimaryContent from "@/CommonComponent/primaryContent";
import { Box, Grid } from "@mui/material";

const SidebarPageLayout = () => {
  return (
    <Box className="product-list-page section-top-gapping">
      <Grid container className="" spacing={3}>
        <Grid item xs={12} md={3.5} lg={3}>
          <LeftSidebar />
        </Grid>
        <Grid item xs={12} md={8.5} lg={9}>
          <PrimaryContent />
        </Grid>
      </Grid>
    </Box>
  );
};
export default SidebarPageLayout;
