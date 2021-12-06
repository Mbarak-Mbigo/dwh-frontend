import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { useNavigate } from "react-router-dom";

// export const mainListItems = (
//   <div>
//     <ListItem button>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Dashboard" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <ShoppingCartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Orders" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <PeopleIcon />
//       </ListItemIcon>
//       <ListItemText primary="Customers" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <BarChartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Reports" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <LayersIcon />
//       </ListItemIcon>
//       <ListItemText primary="Integrations" />
//     </ListItem>
//   </div>
// );

export const MainLinks = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => () => {
    navigate(path);
  };

  return (
    <div>
      <ListItem
        button
        onClick={navigateTo(
          "/facility/registeredPatientsSummary/November-2021"
        )}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Registrations: Monthly" />
      </ListItem>
      <ListItem
        button
        onClick={navigateTo(
          "/registeredPatientsSummary/month/aggregate?period=November-2021"
        )}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Total by Month" />
      </ListItem>
      <ListItem
        button
        onClick={navigateTo(
          "/registeredPatientsSummary/facility/aggregate?gender=female"
        )}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Total by Gender" />
      </ListItem>
      <ListItem
        button
        onClick={navigateTo(
          "/registeredPatientsSummary/county/aggregate?agegroup=agegropup"
        )}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Total by Age Group" />
      </ListItem>
      {/* <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem> */}
    </div>
  );
};

// export const FacilitiesLinks = () => {
//   const navigate = useNavigate();

//   const navigateTo = (path) => () => {
//     navigate(path);
//   };

//   return (
//     <div>
//       <ListSubheader inset>Health Facilities</ListSubheader>
//       <ListItem button onClick={navigateTo("/me")}>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="Current month" />
//       </ListItem>
//       <ListItem button>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="Last quarter" />
//       </ListItem>
//       <ListItem button>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="Year-end sale" />
//       </ListItem>
//     </div>
//   );
// };
