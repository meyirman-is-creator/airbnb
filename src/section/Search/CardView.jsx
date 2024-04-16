import { Box, Tab, Tabs } from "@mui/material";
import {
  CastleTurret,
  Park,
  SwimmingPool,
  TreePalm,
  Umbrella,
} from "@phosphor-icons/react";
import PropTypes from "prop-types";
CardView.propTypes = {
  value: PropTypes.number,
  handleChangeTab: PropTypes.func,
  view:PropTypes.string,
};
import Properties from "./Properties";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}
export default function CardView(props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={props.value}
          onChange={props.handleChangeTab}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          <Tab label="National Parks" icon={<Park size={20} />} />
          <Tab label="Castle" icon={<CastleTurret size={20} />} />
          <Tab label="Beach" icon={<Umbrella size={20} />} />
          <Tab label="Tropical" icon={<TreePalm size={20} />} />
          <Tab label="Parks" icon={<Park size={20} />} />
          <Tab label="Amazing Pool" icon={<SwimmingPool size={20} />} />
        </Tabs>
      </Box>
      <CustomTabPanel value={props.value} index={0}>
        <Properties view={props.view}/>
      </CustomTabPanel>
      <CustomTabPanel value={props.value} index={1}>
        {/* <Properties /> */}
      </CustomTabPanel>
      <CustomTabPanel value={props.value} index={2}>
        <Properties />
      </CustomTabPanel>
      <CustomTabPanel value={props.value} index={3}>
        <Properties />
      </CustomTabPanel>
      <CustomTabPanel value={props.value} index={4}>
        <Properties />
      </CustomTabPanel>
      <CustomTabPanel value={props.value} index={5}>
        <Properties />
      </CustomTabPanel>
    </Box>
  );
}
