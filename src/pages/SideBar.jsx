import React, { useState } from 'react';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton, useMediaQuery, useTheme
} from '@mui/material';
import {
  Assignment, Book, Chat, Person, Help, ExitToApp, Menu as MenuIcon, ChevronLeft, Dashboard, MoreVert, Close
} from '@mui/icons-material';
import UserProfile from '../components/userprofile/UserProfile'; // Import your UserProfile component

export default function Sidebar({ drawerOpen, toggleDrawer, setSelectedSection, selectedSection }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [miniDrawer, setMiniDrawer] = useState(false);

  const handleMiniDrawerToggle = () => {
    setMiniDrawer(!miniDrawer);
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
    console.log('Selected section:', section); // Debugging: Log the selected section
  };

  const drawerContent = (
    <>
      {/* Only show mini drawer toggle button for desktop */}
      {!isMobile && (
        <IconButton onClick={handleMiniDrawerToggle} sx={{ color: 'silver' }}>
          {miniDrawer ? <MoreVert /> : <ChevronLeft />}
        </IconButton>
      )}
      <Divider />
      <List sx={{ mt: 2 }}>
        <ListItem button onClick={() => handleSectionChange('Dashboard')}>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => handleSectionChange('view-assignments')}>
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="View Assignments" />
        </ListItem>
        <ListItem button onClick={() => handleSectionChange('submit-assignment')}>
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="Submit Assignment" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Book />
          </ListItemIcon>
          <ListItemText primary="Notes Lectures" />
        </ListItem>
        <ListItem button onClick={() => handleSectionChange('User Profile')}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="User Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Chat />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>
      </List>
    </>
  );

  return (
    <>
      {/* Temporary Drawer for Mobile */}
      <Drawer
        variant='temporary'
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: miniDrawer ? 70 : 240,
            boxSizing: 'border-box',
            marginTop: '75px', // Adjusted margin top
            transition: 'width 0.3s',
            overflowX: 'hidden', // Prevent horizontal scrolling
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
          width: miniDrawer ? 70 : 240,
          flexShrink: 0,
          [& .MuiDrawer-paper]: {
            width: miniDrawer ? 70 : 240,
            boxSizing: 'border-box',
            marginTop: '75px', // Adjusted margin top
            transition: 'width 0.3s',
            overflowX: 'hidden', // Prevent horizontal scrolling
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
          sx={{ mt: 1, mr: 2, color: 'silver', position: 'fixed', top: 65, left: 16, zIndex: 1201 }} // Adjusted margin and position
        >
          {drawerOpen ? <Close /> : <MenuIcon />}
        </IconButton>
      )}

      {/* Conditional rendering of the UserProfile component */}
      {selectedSection === 'User Profile' && (
        <div>
          <p>Selected Section: {selectedSection}</p> {/* Debugging: Display the selected section */}
          <UserProfile />
        </div>
      )}
    </>
  );
}