import Drawer from "@mui/material/Drawer";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import List from "@mui/material/List";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
const DrawerComponent = () => {
  const [open, setOpen] = useState(false);


const navbarSmall = {

  color: "white",
  textDecoration:  "none",
  fontSize: "1.2rem",
    
    

}
  
  return (
    <>
      <Drawer PaperProps= {{sx:{backgroundColor: "#121320"}}}
       anchor="right" open={open} onClose={() => setOpen(false)}>
        <List>
            <ListItemButton divider onClick={() => setOpen(false)}>
            <ListItemIcon>
                <ListItemText>
                <Link style={navbarSmall}  to="/Favorites">Favorites</Link>
                </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton divider onClick={() => setOpen(false)}>
            <ListItemIcon>
                <ListItemText >
                <Link  style={navbarSmall} to="/Viewed">Viewed</Link>
                </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton  size="large" color="inherit" onClick={() => setOpen(!open)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
