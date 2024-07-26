import React from 'react';
import { Typography, Box, Card, CardContent, CardMedia, Button } from '@mui/material';

const AssignmentPreview = ({ title, description, file, deadline, onAddAssignment }) => {
  const renderFilePreview = () => {
    if (!file) return null;

    const fileURL = URL.createObjectURL(file);

    if (file.type.startsWith('image/')) {
      return (
        <CardMedia
          component="img"
          alt={file.name}
          image={fileURL}
          sx={{ maxHeight: 400, objectFit: 'contain', mt: 2 }}
        />
      );
    }

    if (file.type === 'application/pdf') {
      return (
        <iframe
          src={fileURL}
          width="100%"
          height="600px"
          style={{ border: 'none', mt: 2 }}
          title="PDF Preview"
        />
      );
    }

    return (
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Unsupported file type: {file.type}
      </Typography>
    );
  };

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', mt: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title || 'Assignment Title'}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {description || 'Detailed description of the assignment goes here.'}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Deadline: {deadline || '2024-08-01'}
        </Typography>
        {renderFilePreview()}
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={onAddAssignment}
        >
          Add Assignment
        </Button>
      </CardContent>
    </Card>
  );
};

export default AssignmentPreview;
