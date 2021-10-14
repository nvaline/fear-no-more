import React, { useState, useEffect } from 'react';
import AuthContext from '../../Components/Context/AuthContext.js';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Container, List } from '@material-ui/core';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper
} from '@material-ui/core';
import ProfileItem from '../../Components/User/ProfileItem';
import Layout from '../../Components/layout';

const useStyles = makeStyles({
  root: {
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'center',
    alignItems:     'center',
    height:         '100%',
    marginBottom:   '70px',
    width: '750px',
    marginTop: '30px',
  },
  table: {
    minWidth: 700,
  }
});

const Profile = ({ /*user*/ }) => {
  const classes = useStyles();
  const [user, setUser] = useState({});

  const updateProfile = async (e, name, userInfo, user, updateTrigger, setUpdateTrigger) => {
    e.preventDefault();
    const data = {...user, ogemail: user.email, [name]: userInfo};
    await axios.put(`http://18.222.198.9/api/profile`, data)
      .then(response => setUpdateTrigger(!updateTrigger))
      .catch(err => err)
  };

  return (
    <AuthContext.Consumer>
      {(value) => {
        return (
          <Layout>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px', marginBottom: '60px', fontSize: '40px', fontWeight: 500 }}>Profile</div>
            <Container component="main" maxWidth="lg" className={ classes.root }>
              <TableContainer component={ Paper } >
                <Table className={ classes.table }>
                  <TableHead>
                    <TableRow style={{ backgroundColor: '#496fbf', height: '2.5rem'}}>
                      <TableCell style={{ color: 'white'}}>
                        Account
                      </TableCell>
                      <TableCell />
                      <TableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <ProfileItem label="Username"     text={value.userProfile.username}     name="username"     submit={ updateProfile }/>
                    <ProfileItem label="Password"     text="******"                         name="password"     submit={ updateProfile }/>
                    <ProfileItem label="First Name"   text={value.userProfile.firstname}    name="firstname"    submit={ updateProfile }/>
                    <ProfileItem label="Last Name"    text={value.userProfile.lastname}     name="lastname"     submit={ updateProfile }/>
                    <ProfileItem label="Role"         text={value.userProfile.roleDisplay}         name="role"         submit={ updateProfile }/>
                    <ProfileItem label="Organization" text={value.userProfile.organization} name="organization" submit={ updateProfile }/>
                  </TableBody>
                  <TableHead>
                    <TableRow style={{ backgroundColor: '#496fbf', height: '2.5rem'}}>
                      <TableCell style={{ color: 'white'}}>
                        Contact
                      </TableCell>
                      <TableCell />
                      <TableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <ProfileItem label="Home Phone"     text={value.userProfile.homephone}        name="homephone"        submit={ updateProfile }/>
                    <ProfileItem label="Cell Phone"     text={value.userProfile.mobile}           name="mobile"           submit={ updateProfile }/>
                    <ProfileItem label="Email"          text={value.userProfile.email}            name="email"            submit={ updateProfile }/>
                    <ProfileItem label="Contact Method" text={value.userProfile.contactDisplay} name="preferredcontact" submit={ updateProfile }/>
                  </TableBody>
                  <TableHead>
                  <TableRow style={{ backgroundColor: '#496fbf', height: '2.5rem'}}>
                      <TableCell style={{ color: 'white'}}>
                        Address
                      </TableCell>
                      <TableCell />
                      <TableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <ProfileItem label="City"      text={value.userProfile.city}     name="city"     submit={ updateProfile }/>
                    <ProfileItem label="State"     text={value.userProfile.state}    name="state"    submit={ updateProfile }/>
                    <ProfileItem label="Zip"       text={value.userProfile.zip}      name="zip"      submit={ updateProfile }/>
                    <ProfileItem label="Address 1" text={value.userProfile.address1} name="address1" submit={ updateProfile }/>
                    <ProfileItem label="Address 2" text={value.userProfile.address2} name="address2" submit={ updateProfile }/>
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </Layout>
        )
      }}
    </AuthContext.Consumer>
  )
};

export default Profile;