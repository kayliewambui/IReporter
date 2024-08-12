import React from 'react';
import { Typography, Button } from '@mui/material';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Typography variant="h4" className="dashboard-title">Dashboard</Typography>
      <Typography variant="h6" className="welcome-message">Welcome back, Kaylie</Typography>

      <div className="steps-guide">
        <div className="step">
          <div className="icon">🔴</div>
          <div className="text">
            <Typography variant="h6">SPEAK UP</Typography>
            <Typography variant="body2">Document the issue using our friendly app. Add photos, videos, or location data to strengthen your report.</Typography>
          </div>
        </div>
        <div className="step">
          <div className="icon">🟠</div>
          <div className="text">
            <Typography variant="h6">STAY SAFE</Typography>
            <Typography variant="body2">Rest easy knowing your report is encrypted and your identity is protected. We prioritize your safety and privacy.</Typography>
          </div>
        </div>
        <div className="step">
          <div className="icon">🔴</div>
          <div className="text">
            <Typography variant="h6">SEE CHANGE</Typography>
            <Typography variant="body2">Track your report’s progress and witness its impact. Be part of the solution as authorities take action.</Typography>
          </div>
        </div>
      </div>

      <Button variant="contained" color="primary" className="report-button">
        REPORT NOW
      </Button>
      <Typography variant="body2" className="help-link">Need help?</Typography>
    </div>
  );
};

export default Dashboard;
