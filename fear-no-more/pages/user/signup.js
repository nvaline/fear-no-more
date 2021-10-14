import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import firebase from '../../firebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Layout, { siteTitle } from '../../Components/layout';
import Head from 'next/head';
import Button from '@material-ui/core/Button';
import NewUserListItem from '../../Components/User/NewUserListItem';

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

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginBottom: '3rem',
    width: '750px'
  },
  table: {
    minWidth: '500px',
  }
});

const Profile = () => {
  const auth = getAuth();
  const [fireBaseID, setFireBaseID] = useState('Guest');
  //Account Category
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]  = useState('');
  const [role, setRole] = useState('');
  const [organization, setOrganization] = useState('');

  const accountRow = [
    {label: 'Username', setter: setUsername},
    {label: 'Password', setter: setPassword},
    {label: 'First Name', setter: setFirstName},
    {label: 'Last Name', setter: setLastName},
    {label: 'Organization', setter: setOrganization},
  ];
  var roleDropdown = {
    label: 'Role',
    field: role,
    setter: setRole,
    options: [
      {value: 0, display: 'Recipient'},
      {value: 1, display: 'Donor'}
    ]
  };

  //Contact Category
  const [homePhone, setHomePhone] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [preferredContact, setPreferredContact] = useState('');

  const contactRow = [
    {label: 'Home Phone', setter: setHomePhone},
    {label: 'Cell Phone', setter: setMobile},
    {label: 'Email', setter: setEmail}
  ]

  var preferredContactDropdown = {
    label: 'Preferred Contact',
    field: preferredContact,
    setter: setPreferredContact,
    options: [
      { value: 0, display: 'Email' },
      { value: 1, display: 'Home Phone' },
      { value: 2, display: 'Mobile Phone' }
    ]
  }

  //Address Category
  const [city, setCity] = useState('');
  const [state, updateState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const addressRow = [
    {label: 'City', setter: setCity},
    {label: 'State', setter: updateState},
    {label: 'Zipcode', setter: setZipcode},
    {label: 'Address 1', setter: setAddress1},
    {label: 'Address 2', setter: setAddress2},
  ];

  const url = 'http://18.222.198.9';

  const classes = useStyles();

  const handleSignUpClick = () => {
    axios.get(`${url}/api/check?email=${email}`)
      .then(response => {
        console.log('response is', response);
        if (city !== ''
          && email !== ''
          && firstName !== ''
          && lastName !== ''
          && username !== ''
          && state !== ''
          && response.data[0] === "0") {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              console.log(userCredential);
              const uid = userCredential.user.uid;
              setFireBaseID(uid);
              console.log('Reaching this line with firebase_id', fireBaseID);
              if (address1 === '') {
                var convertedAddress1 = null;
              } else {
                var convertedAddress1 = address1;
              }
              if (address2 === '') {
                var convertedAddress2 = null;
              } else {
                var convertedAddress2 = address2;
              }
              if (homePhone === '') {
                var convertedHomePhone = null;
              } else {
                var convertedHomePhone = homePhone;
              }
              if (mobile === '') {
                var convertedMobile = null;
              } else {
                var convertedMobile = mobile;
              }
              if (preferredContact === '') {
                var convertedPreferredContact = 0;
              } else {
                convertedPreferredContact = Number(preferredContact);
              }
              if (role === '') {
                var convertedRole = 0;
              } else {
                var convertedRole = Number(role);
              }
              if (organization === '') {
                var convertedOrganization = null;
              } else {
                var convertedOrganization = organization;
              }
              if (zipcode === '') {
                var convertedZip = null;
              } else {
                var convertedZip = Number(zipcode);
              }
              const newUserData = {
                firebase_id: fireBaseID,
                firstname: firstName,
                lastname: lastName,
                username: username,
                email: email,
                homephone: convertedHomePhone,
                mobile: convertedMobile,
                preferredcontact: convertedPreferredContact,
                city: city,
                state: state,
                zip: convertedZip,
                address1: convertedAddress1,
                address2: convertedAddress2,
                role: convertedRole,
                organization: convertedOrganization
              };
              console.log('Sending newUserData:', newUserData);
              axios.post(`${url}/api/profile/`, newUserData)
                .then((data) => {
                  console.log('No whammies?', data);
                  Router.push('/');
                })
                .catch(err => console.log('Whammies', err));
              // send newUserData to backend
              // get backend user info and set states
              // take to the appropriate listings
            })
            .catch((error) => {
              console.log('WHAMMIES', error);
              const errorCode = error.code;
              const errorMessage = error.message;
              // ...
            });
        } else {
          console.log('Ask them if they validate!');
        };
      })
      .catch(err => console.log('That ain\'t work none', err));
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div style={{ display: 'flex', justifyContent: 'center', fontSize: '25px', fontWeight: '500', marginTop: '55px', marginBottom: '45px' }}>Create Account</div>
      <Container component="main" maxWidth="lg" className={classes.root}>
        <TableContainer component={Paper} >
          <Table className={classes.table}>
            <TableHead>
              <TableRow style={{ backgroundColor: '#496fbf', height: '2.5rem' }}>
                <TableCell style={{ rowspan: '3', color: 'white' }}>
                  Account
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <NewUserListItem fields={accountRow} dropdown={roleDropdown} blankCells={[]}/>
            </TableBody>
            <TableHead>
              <TableRow style={{ backgroundColor: '#496fbf', height: '2.5rem' }}>
                <TableCell style={{ rowspan: '3', color: 'white' }}>
                  Contact
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <NewUserListItem fields={contactRow} dropdown={preferredContactDropdown} blankCells={[1,2]}/>
            </TableBody>
            <TableHead>
              <TableRow style={{ backgroundColor: '#496fbf', height: '2.5rem' }}>
                <TableCell style={{ rowspan: '3', color: 'white' }}>
                  Address
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <NewUserListItem fields={addressRow} blankCells={[1]}/>
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ marginTop: '50px', marginBottom: '30px', display: 'flex', justifyContent: 'center',  }}>
        <Button style={{ backgroundColor: "#496fbf", color: 'white', width: '200px', marginRight: '20px' }} onClick={ () => { handleSignUpClick(); }}>Sign Up</Button>
        <Button style={{ backgroundColor: "#496fbf", color: 'white', width: '200px', marginLeft: '20px' }} onClick={() => {Router.push('/')}}>Cancel</Button>
        </div>
      </Container>
    </Layout>
  )
};

export default Profile;