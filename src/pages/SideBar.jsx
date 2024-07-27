import React from 'react';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton
} from '@mui/material';
import {
  Home, Assignment, Assessment, Notifications, Person, Help, ExitToApp, ChevronLeft
} from '@mui/icons-material';

export default function Sidebar({ drawerOpen, toggleDrawer, setSelectedSection }) {
  return (
    <Drawer
      variant="permanent"
      open={drawerOpen}
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <IconButton onClick={toggleDrawer} sx={{ color: 'silver' }}>
        <ChevronLeft />
      </IconButton>
      <Divider />
      <List>
        <ListItem button onClick={() => setSelectedSection('view-assignments')}>
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="View Assignments" />
        </ListItem>
        <ListItem button onClick={() => setSelectedSection('submit-assignment')}>
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="Submit Assignment" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Assessment />
          </ListItemIcon>
          <ListItemText primary="Grades/Results" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Notifications />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Help />
          </ListItemIcon>
          <ListItemText primary="Help/Support" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
}
