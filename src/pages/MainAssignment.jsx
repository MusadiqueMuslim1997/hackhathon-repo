import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar,
  Container, Paper, Box, CssBaseline, IconButton, Divider, useMediaQuery, useTheme, Button
} from '@mui/material'; // Add Button here
import {
  Home, Assignment, Assessment, Notifications, Person, Help, ExitToApp, Menu, ChevronLeft
} from '@mui/icons-material';
import SubmitAssignment from '../SubmitAssignment';

const AssignmentPreview = ({ onAddAssignment }) => (
  <Box>
    <Typography variant="h4">Assignment Preview</Typography>
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6">Assignment Title</Typography>
      <Typography variant="body1">Description of the assignment goes here. This will help you understand what needs to be done.</Typography>
      <Typography variant="body2" color="textSecondary">Deadline: 2024-08-01</Typography>
      <Box mt={2}>
        <Button variant="contained" onClick={onAddAssignment}>Add Assignment</Button>
      </Box>
    </Paper>
  </Box>
);

export default function MainAssignment() {
  const [selectedSection, setSelectedSection] = useState('preview');
  const [user] = useState({ name: 'Student Name', profilePic: 'https://via.placeholder.com/150' });
  const [drawerOpen, setDrawerOpen] = useState(false); // Start with sidebar closed on small screens

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen width is small

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'submit-assignment':
        return <SubmitAssignment />;
      case 'preview':
        return <AssignmentPreview onAddAssignment={() => setSelectedSection('submit-assignment')} />;
      default:
        return <AssignmentPreview onAddAssignment={() => setSelectedSection('submit-assignment')} />;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer}
          sx={{ mr: 2, color: 'silver', position: 'fixed', top: theme.spacing(2), left: theme.spacing(2), zIndex: theme.zIndex.drawer + 1 }}
        >
          <Menu />
        </IconButton>
      )}
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
            display: isMobile ? (drawerOpen ? 'block' : 'none') : 'block', // Hide on mobile when closed
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: 1,
          }}
        >
          {isMobile && (
            <IconButton onClick={toggleDrawer} sx={{ color: 'silver' }}>
              <ChevronLeft />
            </IconButton>
          )}
        </Box>
        <Divider />
        <List>
          <ListItem button onClick={() => setSelectedSection('preview')}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => setSelectedSection('submit-assignment')}>
            <ListItemIcon>
              <Assignment />
            </ListItemIcon>
            <ListItemText primary="Submit Assignment" />
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
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Container>
          <Paper sx={{ p: 2 }}>
            {renderContent()}
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
