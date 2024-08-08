// src/components/Redflags/Redflags.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRedflags } from '../../actions';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const Redflags = ({ redflags, fetchRedflags }) => {
  useEffect(() => {
    fetchRedflags();
  }, [fetchRedflags]);

  return (
    <div>
      <Typography variant="h5">Redflags</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Public ID</TableCell>
              <TableCell>Redflag</TableCell>
              <TableCell>Image/Video</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {redflags.map((redflag) => (
              <TableRow key={redflag.publicID}>
                <TableCell>{redflag.publicID}</TableCell>
                <TableCell>{redflag.category}</TableCell>
                <TableCell>{redflag.media}</TableCell>
                <TableCell>{redflag.location}</TableCell>
                <TableCell>{redflag.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  redflags: state.redflags.redflags,
});

export default connect(mapStateToProps, { fetchRedflags })(Redflags);
