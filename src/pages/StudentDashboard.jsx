import React, { useState } from 'react';
import {
  Box, Typography, Container, IconButton, CssBaseline, Select, MenuItem, Button, Grid
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import Sidebar from './SideBar';


export default function StudentDashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSession, setSelectedSession] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');

  const toggleDrawer = () => {
    setDrawerOpen(prev => !prev);
  };

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* IconButton for mobile to open sidebar */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={toggleDrawer}
        sx={{ mr: 2, color: 'silver', position: 'fixed', top: 16, left: 16, zIndex: 1201 }}
      >
        <Menu />
      </IconButton>
      <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} setSelectedSection={() => {}} />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Student Dashboard
          </Typography>
          <Box sx={{ 
            boxShadow: 3, // Adjust shadow for different effects
            borderRadius: 2, // Rounded corners
            p: 3, // Padding inside the box
            mb: 3, // Margin at the bottom
            backgroundColor: 'background.paper' // Background color
          }}>
            <Grid container spacing={2} alignItems="center">
              {/* First line: Select Course and Select Session */}
              <Grid container item xs={12} spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Select
                    value={selectedCourse}
                    onChange={handleChange(setSelectedCourse)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select Course' }}
                    fullWidth
                    sx={{ height: '56px' }} // Consistent height
                  >
                    <MenuItem value="" disabled>Select Course</MenuItem>
                    <MenuItem value="course1">Course 1</MenuItem>
                    <MenuItem value="course2">Course 2</MenuItem>
                    <MenuItem value="course3">Course 3</MenuItem>
                    {/* Add more courses as needed */}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select
                    value={selectedSession}
                    onChange={handleChange(setSelectedSession)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select Session' }}
                    fullWidth
                    sx={{ height: '56px' }} // Consistent height
                  >
                    <MenuItem value="" disabled>Select Session</MenuItem>
                    <MenuItem value="session1">Session 1</MenuItem>
                    <MenuItem value="session2">Session 2</MenuItem>
                    <MenuItem value="session3">Session 3</MenuItem>
                    {/* Add more sessions as needed */}
                  </Select>
                </Grid>
              </Grid>

              {/* Second line: Select Batch, Select Teacher, and View Assignments */}
              <Grid container item xs={12} spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Select
                    value={selectedBatch}
                    onChange={handleChange(setSelectedBatch)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select Batch' }}
                    fullWidth
                    sx={{ height: '56px' }} // Consistent height
                  >
                    <MenuItem value="" disabled>Select Batch</MenuItem>
                    <MenuItem value="batch1">Batch 1</MenuItem>
                    <MenuItem value="batch2">Batch 2</MenuItem>
                    <MenuItem value="batch3">Batch 3</MenuItem>
                    {/* Add more batches as needed */}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Select
                    value={selectedTeacher}
                    onChange={handleChange(setSelectedTeacher)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select Teacher' }}
                    fullWidth
                    sx={{ height: '56px' }} // Consistent height
                  >
                    <MenuItem value="" disabled>Select Teacher</MenuItem>
                    <MenuItem value="teacher1">Teacher 1</MenuItem>
                    <MenuItem value="teacher2">Teacher 2</MenuItem>
                    <MenuItem value="teacher3">Teacher 3</MenuItem>
                    {/* Add more teachers as needed */}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={4} display="flex" alignItems="center" justifyContent="center">
                  <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ height: '56px', py: 1.5 }} // Consistent height
                    fullWidth
                  >
                    View Assignments
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
