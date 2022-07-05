import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { Link, useNavigate } from "react-router-dom";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteUser from "./user/deleteUser";
import EditUser from "./user/editUser";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({ data }) {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Full Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">City & Country</StyledTableCell>
            <StyledTableCell align="right">Phone No.</StyledTableCell>
            <StyledTableCell align="right">Admin</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((per) => (
            <StyledTableRow key={per._id}>
              <StyledTableCell component="th" scope="row">
                {per.name}
              </StyledTableCell>
              <StyledTableCell align="right">{per.email}</StyledTableCell>
              <StyledTableCell align="right">
                {per.city} {per.country}
              </StyledTableCell>
              <StyledTableCell align="right">{per.phone}</StyledTableCell>
              <StyledTableCell align="right">{`${
                per.isAdmin ? "true" : "false"
              }`}</StyledTableCell>
              <StyledTableCell align="right">
                <EditUser id={per._id} />
              </StyledTableCell>
              <StyledTableCell align="right">
                <DeleteUser id={per._id} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
