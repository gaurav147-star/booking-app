import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import User from "../tabs/user/user";
import Hotel from "../tabs/hotels/hotel";
import Rooms from "../tabs/rooms/rooms";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
      style={{"width":"100%","height":"90vh"}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="User" {...a11yProps(0)} />
        <Tab label="Hotels" {...a11yProps(1)} />
        <Tab label="Rooms" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0} style={{"width":"100%"}}>
        <User/>
      </TabPanel>
      <TabPanel value={value} index={1} style={{"width":"100%"}}>
       <Hotel/>
      </TabPanel>
      <TabPanel value={value} index={2} style={{"width":"100%"}}>
        <Rooms/>
      </TabPanel>
    </Box>
  );
}
