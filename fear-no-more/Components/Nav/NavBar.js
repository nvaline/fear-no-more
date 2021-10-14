import React, {useState, useEffect} from 'react';
import Router, { useRouter } from 'next/router';
import AuthContext from '../Context/AuthContext.js';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const [userId, setUserId] = useState('Guest');
  const [username, setUsername] = useState('Guest');
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const auth = getAuth();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       const userId = user.uid;
  //       console.log('User ID on Load is', userId);
  //       setUserId(userId);
  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //     }
  //   });
  //   // const auth = getAuth();
  //   // console.log('auth', auth);
  //   // { auth.currentUser ? console.log('userId', auth.currentUser.uid) : console.log('No user to log') }
  //   // { auth.currentUser ? setUserId(auth.currentUser.uid) : console.log('No user to set') }
  // }, []);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleSignOutClick = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // Manipulate our local db
      // set user role to 3
      setUserId('Guest');
      setUsername('Guest');
      Router.push('/');
    }).catch((error) => {
      throw error;
    });
  };

  const menuId = 'primary-search-account-menu';
  const renderLogin = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <AuthContext.Consumer>
      {(value) => {
        return (
          <div className={classes.root}  >
            <AppBar position="static"  >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Toolbar style={{ width: '800px', display: 'flex', justifyContent: 'center'  }} >
                  <Typography variant="h6" className={classes.title}>
                    <Button color="inherit" onClick={() => {
                      Router.push('/');
                    }}>
                      Fear No More
                    </Button>
                  </Typography>
                {
                  value.userProfile.username === 'Guest'
                    ?
                  <Button color="inherit" onClick={() => {
                    Router.push('/login');
                  }}>
                    Login
                  </Button>
                    :
                  <Button color="inherit" onClick={() => {
                    Router.push('/user/profile');
                  }}>
                    {`Welcome, ${value.userProfile.username}`}
                  </Button>
                }
                {
                  value.userProfile.username === 'Guest'
                    ?
                  <Button color="inherit" onClick={() => {
                    Router.push('/user/signup');
                  }}>
                    Sign Up
                  </Button>
                    :
                  <Button color="inherit" onClick={() => {
                     handleSignOutClick();
                  }}>
                    Sign Out
                  </Button>
                }
              </Toolbar>
              </div>
            </AppBar>
            {renderLogin}
          </div>
        )
      }}
    </AuthContext.Consumer>
  );
}