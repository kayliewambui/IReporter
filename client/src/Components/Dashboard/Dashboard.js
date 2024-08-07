import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Dialog, DialogTitle, DialogContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import './Dashboard.css';

// Sample data for the bar charts
const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Issues',
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(75,192,192,0.6)',
      hoverBorderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

// Sample data for recent messages
const recentMessages = [
  { name: 'Kaylie Wambui', category: 'Red flag', type: 'Image', location: 'Ngong Road', status: 'Resolved' },
  { name: 'Fatuma Galgalo', category: 'Intervention', type: 'Video', location: 'Moi Avenue', status: 'Under Investigation' },
  { name: 'Hann Martin', category: 'Red flag', type: 'Image', location: 'Kilimani', status: 'Rejected' }
];

const Dashboard = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className="dashboard">
      <Typography variant="h4" gutterBottom>Welcome, Kaylie</Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card onClick={() => handleCardClick('Redflags')}>
            <CardContent>
              <Typography variant="h5">Redflags</Typography>
              <Typography variant="h6">564</Typography>
              <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card onClick={() => handleCardClick('Interventions')}>
            <CardContent>
              <Typography variant="h5">Interventions</Typography>
              <Typography variant="h6">346</Typography>
              <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card onClick={() => handleCardClick('Resolved Cases')}>
            <CardContent>
              <Typography variant="h5">Resolved Cases</Typography>
              <Typography variant="h6">112</Typography>
              <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>Recent Messages</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Image/Video</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentMessages.map((message, index) => (
              <TableRow key={index}>
                <TableCell>{message.name}</TableCell>
                <TableCell>{message.category}</TableCell>
                <TableCell>{message.type}</TableCell>
                <TableCell>{message.location}</TableCell>
                <TableCell>{message.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>{selectedCard}</DialogTitle>
        <DialogContent>
          <Bar data={data} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
