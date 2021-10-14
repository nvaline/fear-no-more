import AuthContext from '../Context/AuthContext.js';
import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Formik, Field, Form } from "formik";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    fontSize: '22px',
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function PostRequest(props) {
  const classes = useStyles();
  const [categoryText, setCategoryText] = React.useState('');
  const [open, setOpen] = React.useState(false);

  let bodyText = '';
  let titlePost = '';
  // let categoryText = '';
  let canSubmit = false;

  const handleBody = (event) => {
    bodyText = event.target.value;
    // console.log(bodyText)
  };

  const handleTitle = (event) => {
    titlePost = event.target.value;
    // console.log(titlePost)
  }


  const handleChange = (event) => {
    setCategoryText(event.target.value);
    // categoryText = event.target.value
    // console.log(categoryText)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (event) => {

    if (categoryText.length && bodyText.length && titlePost.length) {
      canSubmit = true;
    }

    if (canSubmit) {
      // let db = {
      //   email: event.userProfile.username,
      //   title: titlePost,
      //   body: bodyText,
      //   category: categoryText
      // }
      axios.post(`http://18.222.198.9/api/listings/requests`, {

          email: event.userProfile.email,
          title: titlePost,
          body: bodyText,
          category: categoryText

      })
        .then(() => console.log('Success'))
        .catch(err => console.log(err))
    }

    // console.log(canSubmit)
  }

  return (
    <AuthContext.Consumer>
      {(value) => {
        console.log(value)
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '600px', display: 'flex', justifyContent: 'center', flexDirection: 'column',  }}>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <h3>Create Listing</h3>
                <div>

                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={categoryText}
                      onChange={handleChange}
                      style={{width: '200px'}}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'housing'}>Housing</MenuItem>
                      <MenuItem value={'food'}>Food</MenuItem>
                      <MenuItem value={'bills'}>Bills</MenuItem>
                      <MenuItem value={'homegoods'}>Homegoods</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <TextField id="standard-basic" label="Title" onChange={handleTitle} style={{width: '100%'}}/>
                <div style={{margin: '15px'}}/>
                <TextField
                  id="outlined-multiline-static"
                  label="Post Request"
                  multiline
                  rows={8}
                  columns={9}
                  defaultValue=""
                  variant="outlined"
                  onChange={handleBody}
                  style={{ width: '100%', marginBottom: '30px' }}
                />
              </div>
            </form>
            <Button variant="contained" color="primary" style={{ marginBottom: '40px' }} onClick={() => handleSubmit(value)}>
              Post
            </Button>
          </div>
      </div>
        )
      }}
    </AuthContext.Consumer>
  );
}