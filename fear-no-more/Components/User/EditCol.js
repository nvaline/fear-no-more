import React, { useState } from 'react';
import AuthContext from '../Context/AuthContext.js';
import EditIcon from '@material-ui/icons/Edit';
import { TextField, Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    padding: '0'
  }
});

const EditCol = ({ submit, fieldInfo, name }) => {
  const classes = useStyles();
  var info = fieldInfo;
  const [editing, setEditing] = useState(false);
  const [userInfo, setUserInfo] = useState('');

  const resetForm = (e) => {
    e.preventDefault();
    setEditing(false);
    setUserInfo('');
  };

  const handleChange = (e) => setUserInfo(e.target.value);

  return (
    <AuthContext.Consumer>
      {(value) => {
        const user = value.userProfile;
        const updateTrigger = value.updateTrigger;
        const setUpdateTrigger = value.setUpdateTrigger;

        return (
          <React.Fragment>
            {
              editing ?
                <form onSubmit={(e) => {
                  resetForm(e, name)
                  submit(e, name, userInfo, user, updateTrigger, setUpdateTrigger);
                }}
                >
                  <TextField
                    name={name}
                    value={userInfo}
                    onChange={(e) => handleChange(e)}
                  />
                  <Button variant="contained" size="small" type="submit">Submit</Button>
                  <Button variant="contained" size="small" onClick={(e) => resetForm(e)}>X</Button>
                </form> :
                <EditIcon onClick={() => setEditing(true)} />
            }
          </React.Fragment>
        )
      }}
    </AuthContext.Consumer>

  )
};

export default EditCol;