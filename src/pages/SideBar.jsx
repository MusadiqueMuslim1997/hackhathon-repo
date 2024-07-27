import React from 'react';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton, useMediaQuery, useTheme
} from '@mui/material';
import {
  Home, Assignment, Assessment, Notifications, Person, Help, ExitToApp, Menu as MenuIcon, ChevronLeft
} from '@mui/icons-material';

export default function Sidebar({ drawerOpen, toggleDrawer, setSelectedSection }) {
  const theme = useTheme(); // Access the theme object
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const drawerContent = (
    <>
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
    </>
  );

  return (
    <>
      {/* Temporary Drawer for Mobile */}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Permanent Drawer for Desktop */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Toggle Button for Mobile */}
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer}
          sx={{ mr: 2, color: 'silver', position: 'fixed', top: 16, left: 16, zIndex: 1201 }}
        >
          <MenuIcon />
        </IconButton>
      )}
    </>
  );
}
