import React, { useState, useContext } from 'react';
import axios from 'axios';

import CommentIcon from '@material-ui/icons/Comment';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  TextField,
  Typography
} from '@material-ui/core';
import DisplayComment from '../../Components/Listings/DisplayComment';

import AuthContext from '../Context/AuthContext.js';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";


const useStyles = makeStyles((theme) => ({
  input: {
    color: 'white',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    form: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
}}));

const Thread = ({ thread, setTrigger, trigger }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState('');
  const [threadComment, setThreadComment] = useState('');

  const { focusPost, userProfile } = useContext(AuthContext);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const threadCommentChange = (e) => {
    const text = e.target.value;
    setThreadComment(text);
  };

  const addComment = async (e) => {
    e.preventDefault();
    const comment = {
      ///////////////////////////////////////
      //MOST OF THIS SHOULD COME FROM CONTEXT
      post_id: focusPost,
      thread_id: thread[0].thread_id,
      email: userProfile.email,
      body: threadComment
    }

    if (threadComment !== '') {
      await axios.post(`http://18.222.198.9/api/comments`, comment).catch(err => err);
    }
    setThreadComment('');
    setTrigger(!trigger);
  };

  return (
    <div>
      <Accordion sqaure expanded={ expanded === 'panel1' } onChange={ handleChange('panel1') } style={{ backgroundColor: '#3f51b5', color: 'white', marginBottom: '15px' }}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div style={{ width: '100%'}}>
           <div style={{ fontSize: '12px' }}> @{thread[0].username} </div> <br/>
           <div style={{ fontSize: '20px', marginBottom: '15px' }}> {thread[0].body} </div>
          </div>
          <CommentIcon />

        </AccordionSummary>
          <AccordionDetails>
            <form onSubmit={(e) => addComment(e)} className={ classes.form }>
              <TextField
                variant="outlined"
                type="text"
                style={{ backgroundColor: '#2d3c8e', border: 'none', width: '100%', marginBottom: '15px', }}
                InputProps={{
                  className: classes.input,
                }}
                value={ threadComment }
                onChange={ threadCommentChange }/>
              <Button
                variant="contained"
                style={{ backgroundColor: '#2b387c', color: 'white', width: '100%',  hover: {
                  "&:hover": {
                    backgroundColor: '#171e43'
                  } }}}
                type="submit">SUBMIT</Button>
            </form>
          </AccordionDetails>
          {
            thread.slice(1).map((c, i) =>
              <AccordionDetails key={ i } >
                <DisplayComment comment={ c } key={ i }/>
              </AccordionDetails>
          )}
      </Accordion>
    </div>
  )
};

export default Thread;