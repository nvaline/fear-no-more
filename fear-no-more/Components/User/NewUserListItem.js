import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
// import EditRow from './EditRow';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
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

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // display: 'flex',
  }
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    minWidth: '200px'
    // flexGrow: 1
  },
}))(TableCell);

const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25px',
  },
  cell: {
    minWidth: '500px'
  },
  edit: {
    cursor: 'pointer'
  },
  formControl: {
    minWidth: 176,
  },
  // select: {
  //   padding: '16px'
  // },
  // selectEmpty: {
  //   marginTop: theme.spacing(2),
  // },
});


const NewUserListItem = ({ fields, dropdown, blankCells }) => {
  const classes = useStyles();
  const [editing, setEditing] = useState(true);

  return (
    <StyledTableRow className={classes.root}>
      {
        fields.map((field, i) => {
          return (
            <StyledTableCell key={i}>
              <TextField
                label={field.label}
                type={field.label === "Password" ? 'password' : 'text'}
                onChange={(e) => { field.setter(e.target.value); }}
              />
            </StyledTableCell>
          )
        })
      }
      {
        dropdown
          ?
          <StyledTableCell>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">{dropdown.label}</InputLabel>
              <Select
                native
                value={dropdown.field}
                onChange={(e) => dropdown.setter(e.target.value) }
                inputProps={{
                  name: dropdown.label,
                  id: 'age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                {
                  dropdown.options.map((option, i) =>
                    <option value={option.value} key={ i }>
                      {option.display}
                    </option>
                  )
                }
              </Select>
            </FormControl>
          </StyledTableCell>
          :
        null
      }
      {
        blankCells.map((cell, i) => <StyledTableCell key={ i }></StyledTableCell>)
      }
    </StyledTableRow>
  )
};

export default NewUserListItem;