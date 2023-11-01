import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, price,history,area) {
  return { name, price,history,area};
}

const rows = [
  createData('판교 푸르지오그랑블', 18, 21,38),
  createData('광교 자연앤힐스', 14, 15,34),
  createData('동탄 더샵센트럴시티', 11, 13,34),
];

export default function AccessibleTable() {
  return (
    <div className='px-10'>
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>아파트명</TableCell>
            <TableCell align="center">가격(억)</TableCell>
            <TableCell align="center">실거래가(억)</TableCell>
            <TableCell align="center">평형(평)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.history}</TableCell>
              <TableCell align="center">{row.area}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
