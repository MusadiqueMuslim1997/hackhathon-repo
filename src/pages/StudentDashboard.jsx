import React, { useState } from 'react';
import {
  Box, Typography, Container, IconButton, CssBaseline, Select, MenuItem, Button, Grid
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import Sidebar from './SideBar';
import AssignmentPreview from './AssignmentPreview'; // Import the AssignmentPreview component
import SubmitAssignment from '../SubmitAssignment'; // Import the SubmitAssignment component

export default function StudentDashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSession, setSelectedSession] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedSection, setSelectedSection] = useState(''); // Track current section
  const [deadline, setDeadline] = useState('2024-08-01'); // Example deadline date

  const toggleDrawer = () => {
    setDrawerOpen(prev => !prev);
  };

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'view-assignments':
        return (
          <AssignmentPreview 
            onAddAssignment={() => setSelectedSection('submit-assignment')}
            deadline={deadline} // Passing deadline as prop to AssignmentPreview
          />
        );
      case 'submit-assignment':
        return <SubmitAssignment deadline={deadline} />;
      default:
        return (
          <Box>
            <Typography variant="h4" gutterBottom>
              Student Dashboard
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid container item xs={12} spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Select
                    value={selectedCourse}
                    onChange={handleChange(setSelectedCourse)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select Course' }}
                    fullWidth
                    sx={{ height: '56px' }}
                  >
                    <MenuItem value="" disabled>Select Course</MenuItem>
                    <MenuItem value="course1">Course 1</MenuItem>
                    <MenuItem value="course2">Course 2</MenuItem>
                    <MenuItem value="course3">Course 3</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select
                    value={selectedSession}
                    onChange={handleChange(setSelectedSession)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select Session' }}
                    fullWidth
                    sx={{ height: '56px' }}
                  >
                    <MenuItem value="" disabled>Select Session</MenuItem>
                    <MenuItem value="session1">Session 1</MenuItem>
                    <MenuItem value="session2">Session 2</MenuItem>
                    <MenuItem value="session3">Session 3</MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <Grid container item xs={12} spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Select
                    value={selectedBatch}
                    onChange={handleChange(setSelectedBatch)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select Batch' }}
                    fullWidth
                    sx={{ height: '56px' }}
                  >
                    <MenuItem value="" disabled>Select Batch</MenuItem>
                    <MenuItem value="batch1">Batch 1</MenuItem>
                    <MenuItem value="batch2">Batch 2</MenuItem>
                    <MenuItem value="batch3">Batch 3</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Select
                    value={selectedTeacher}
                    onChange={handleChange(setSelectedTeacher)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select Teacher' }}
                    fullWidth
                    sx={{ height: '56px' }}
                  >
                    <MenuItem value="" disabled>Select Teacher</MenuItem>
                    <MenuItem value="teacher1">Teacher 1</MenuItem>
                    <MenuItem value="teacher2">Teacher 2</MenuItem>
                    <MenuItem value="teacher3">Teacher 3</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={4} display="flex" alignItems="center" justifyContent="center">
                  <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ height: '56px', py: 1.5 }} 
                    fullWidth
                    onClick={() => setSelectedSection('view-assignments')} // Set section to view-assignments
                  >
                    View Assignments
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        );
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={toggleDrawer}
        sx={{ mr: 2, color: 'silver', position: 'fixed', top: 16, left: 16, zIndex: 1201 }}
      >
        <Menu />
      </IconButton>
      <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} setSelectedSection={setSelectedSection} />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Container>
          <Box sx={{ 
            boxShadow: 3,
            borderRadius: 2,
            p: 3,
            mb: 3,
            backgroundColor: 'background.paper'
          }}>
            {renderContent()}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
