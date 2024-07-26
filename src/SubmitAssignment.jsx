import React, { useState } from 'react';
import { TextField, Button, Typography, Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const SubmitAssignment = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [link, setLink] = useState('');
  const [submissionType, setSubmissionType] = useState('file'); // file, link, both
  const [status, setStatus] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && ((submissionType === 'file' && file) || (submissionType === 'link' && link) || (submissionType === 'both' && file && link))) {
      setStatus('Assignment submitted successfully!');
    } else {
      setStatus('Please fill all the fields and provide the required submission type.');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h4" gutterBottom>
        Submit Assignment
      </Typography>
      <TextField
        label="Assignment Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Description/Instructions"
        fullWidth
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <TextField
        label="Deadline Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        fullWidth
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <FormControl component="fieldset">
        <Typography variant="h6">Submission Type</Typography>
        <RadioGroup
          value={submissionType}
          onChange={(e) => setSubmissionType(e.target.value)}
        >
          <FormControlLabel value="file" control={<Radio />} label="File Only" />
          <FormControlLabel value="link" control={<Radio />} label="Link Only" />
          <FormControlLabel value="both" control={<Radio />} label="Both File and Link" />
        </RadioGroup>
      </FormControl>
      {submissionType === 'file' || submissionType === 'both' ? (
        <>
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          {file && (
            <Typography variant="body2">
              {file.name}
            </Typography>
          )}
        </>
      ) : null}
      {submissionType === 'link' || submissionType === 'both' ? (
        <TextField
          label="Link"
          fullWidth
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      ) : null}
      <Button type="submit" variant="contained" color="primary">
        Submit Assignment
      </Button>
      {status && (
        <Typography variant="body1" color="success">
          {status}
        </Typography>
      )}
    </Box>
  );
};

export default SubmitAssignment;
