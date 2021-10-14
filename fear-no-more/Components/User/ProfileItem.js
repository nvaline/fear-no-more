import React, { useState } from 'react';
// import EditRow from './EditRow';
import EditCol from './EditCol';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper
} from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    minWidth: '8rem'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '4rem',
  },
  cell: {
    minWidth: '8rem'
  },
  edit: {
    cursor: 'pointer'
  }
});

const ProfileItem = ({ label, text, name, submit }) => {
  const classes = useStyles();
  const [editing, setEditing] = useState(false);


  return (
    <StyledTableRow className={ classes.root }>
      <StyledTableCell
        className={ classes.cell }
        component="th"
        scope="row"
      >
      { label }</StyledTableCell>
      <StyledTableCell
        component="th"
        scope="row"
      >
      { text }</StyledTableCell>
      <StyledTableCell style={{ maxWidth: '8rem' }}>
        <EditCol name={ name } submit={ submit } fireldInfo={text}/>
      </StyledTableCell>
    </StyledTableRow>
  )
};

export default ProfileItem;