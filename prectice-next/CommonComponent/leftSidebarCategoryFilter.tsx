import { TreeItem, TreeView } from "@mui/lab";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LeftSidebarCategoryFilter = () => {
  return (
    <>
      <Typography
        className="sidebar-title fs-20 font-semibold text-capitalize"
        mb={2}
      >
        Product categories
      </Typography>
      <Box className="block-wrap">
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ChevronRightIcon />}
          defaultExpandIcon={<ExpandMoreIcon />}
          sx={{ flexGrow: 1, overflowY: "auto" }}
        >
          <TreeItem
            nodeId="1"
            label="INTERNAL STORAGE"
            className="border-bottom border-color-1"
          >
            <FormControlLabel
              control={<Checkbox />}
              label="16 20.9 MP"
              className="m-0 fs-14"
            />
          </TreeItem>
          <TreeItem
            nodeId="3"
            label="BATTERY CAPACITY"
            className="border-bottom border-color-1"
          >
            <FormControlLabel
              control={<Checkbox />}
              label="16 20.9 MP"
              className="m-0"
            />
          </TreeItem>
          <TreeItem
            nodeId="4"
            label="SECONDARY CAMERA"
            className="border-bottom border-color-1"
          >
            <FormControlLabel
              control={<Checkbox />}
              label="16 20.9 MP"
              className="m-0"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="21 MP & Above"
              className="m-0"
            />
          </TreeItem>
        </TreeView>
      </Box>
    </>
  );
};
export default LeftSidebarCategoryFilter;
