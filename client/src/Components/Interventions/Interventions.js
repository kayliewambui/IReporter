// src/components/Interventions/Interventions.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchInterventions } from '../../actions';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const Interventions = ({ interventions, fetchInterventions }) => {
  useEffect(() => {
    fetchInterventions();
  }, [fetchInterventions]);

  return (
    <div>
      <Typography variant="h5">Interventions</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Public ID</TableCell>
              <TableCell>Intervention</TableCell>
              <TableCell>Image/Video</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {interventions.map((intervention) => (
              <TableRow key={intervention.publicID}>
                <TableCell>{intervention.publicID}</TableCell>
                <TableCell>{intervention.category}</TableCell>
                <TableCell>{intervention.media}</TableCell>
                <TableCell>{intervention.location}</TableCell>
                <TableCell>{intervention.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  interventions: state.interventions.interventions,
});

export default connect(mapStateToProps, { fetchInterventions })(Interventions);
