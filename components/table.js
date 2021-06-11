import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// eslint-disable-next-line react/prop-types
export default function BasicTable({rows = []}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">GOOD</TableCell>
            <TableCell align="center"> </TableCell>
            <TableCell align="center"> </TableCell>
            <TableCell align="center"> </TableCell>
            <TableCell align="center">BAD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({good, bad}, idx) => (
            <TableRow key={idx}>
              <TableCell scope="row" align="center"> {good} </TableCell>
              <TableCell align="center"> </TableCell>
              <TableCell align="center"> </TableCell>
              <TableCell align="center"> </TableCell>
              <TableCell align="center"> {bad} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
