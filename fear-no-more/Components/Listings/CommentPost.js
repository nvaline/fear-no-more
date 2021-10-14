import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import AuthContext from '../Context/AuthContext.js';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '100%',
    },
    width: '100%',
  },
  button: {
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '700px',
  }
}));

export default function PostRequest({ post_id, thread_id, email, trigger, setTrigger }) {
  const classes = useStyles();

  const { focusPost, userProfile } = useContext(AuthContext);
  const [info, setInfo] = useState('');

  const handleChange = (e) => {
    const text = e.target.value;
    setInfo(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const comment = {
      post_id: focusPost,
      email: userProfile.email,
      body: info
    }

    if (info !== '') {
      await axios.post(`http://18.222.198.9/api/comments`, comment).catch(err => err);
    }
    setTrigger(!trigger);
  };

  return (
    <AuthContext.Consumer>
      {(value) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={ classes.container }>
            <form className={ classes.root } noValidate autoComplete="off" onSubmit={ (e) => handleSubmit(e) }>
              <TextField
                id="outlined-multiline-static"
                label="Have a question, leave some words"
                multiline
                rows= { 8 }
                columns= { 9 }
                defaultValue= ""
                variant= "outlined"
                style={{ marginBottom: '30px' }}
                onChange={ handleChange }
              />
            <Button type="submit" variant="contained" style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '30px', }} color="primary">Submit</Button>
            </form>
          </div>
          </div>
        )
      }}
    </AuthContext.Consumer>
  );
}