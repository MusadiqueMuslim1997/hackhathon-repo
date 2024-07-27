import React from 'react';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Box
} from '@mui/material';
import {
  Assignment, Home, Assessment, Notifications, Person, Help, ExitToApp, Menu, ChevronLeft
} from '@mui/icons-material';
import { useTheme, useMediaQuery } from '@mui/material';

export default function SideBar({ drawerOpen, toggleDrawer, setSelectedSection }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={drawerOpen}
      onClose={toggleDrawer}
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
          display: isMobile ? (drawerOpen ? 'block' : 'none') : 'block',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: 1 }}>
        {isMobile && (
          <IconButton onClick={toggleDrawer} sx={{ color: 'silver' }}>
            <ChevronLeft />
          </IconButton>
        )}
      </Box>
      <Divider />
      <List>
        <ListItem button onClick={() => setSelectedSection('assignment-preview')}>
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="Assignment Preview" />
        </ListItem>
        <ListItem button onClick={() => setSelectedSection('submit-assignment')}>
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="Submit Assignment" />
        </ListItem>
        <ListItem button onClick={() => setSelectedSection('home')}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => setSelectedSection('grades-results')}>
          <ListItemIcon>
            <Assessment />
          </ListItemIcon>
          <ListItemText primary="Grades/Results" />
        </ListItem>
        <ListItem button onClick={() => setSelectedSection('notifications')}>
          <ListItemIcon>
            <Notifications />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button onClick={() => setSelectedSection('profile')}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button onClick={() => setSelectedSection('help-support')}>
          <ListItemIcon>
            <Help />
          </ListItemIcon>
          <ListItemText primary="Help/Support" />
        </ListItem>
        <ListItem button onClick={() => setSelectedSection('logout')}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
}
