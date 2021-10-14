import React from 'react';
import Router, { useRouter } from 'next/router';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';
import AuthContext from '../Context/AuthContext.js';
import iconOne from '../../public/icon1.png';
import iconTwo from '../../public/icon2.png';
import Image from 'next/image'
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'row',
    align: 'center',
    marginTop: 55,
    spacing: -100,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 10,
  },
  cent: {
    align: 'right',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    letterSpacing: -2,
    justifyContent: 'center',
    color: 'white'
    // fontWeight: 'Bold'
  },
  snip: {
    align: 'right',
    textAlign: 'center',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 30,
    maxWidth: 600,
    marginTop: 40,
    fontSize: 13,
    lineHeight: 1.2,
    fontStyle: 'italic'
  },
  btnL: {
    marginTop: 10,
    // color: 'red',
    float: 'right',
    borderColor: 'black'
    // bgcolor: ''
    // position: 'absolute',
  }

});
const theme = {
  spacing: 8,
}

export default function Testimonial(props) {
  const classes = useStyles()

  return (
    <AuthContext.Consumer>
      {(value) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#829cd3', paddingTop: '50px'}}>
            <Typography gutterBottom variant="h4" component="h2" className={classes.cent}>
              Who Are You?
            </Typography>
            {/* <Typography variant="body2" component="p" className={classes.snip}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography> */}
            <Card className={classes.root} style={{ border: "none", boxShadow: "none" }} >
              {/* <CardActionArea> */}

              <CardContent style={{ backgroundColor: '#829cd3' }}>
              <Paper variant="outlined" style={{ border: "none", boxShadow: "none", display: 'flex', justifyContent: 'center', marginRight: '40px', backgroundColor: '#829cd3', marginBottom: '30px', cursor: 'pointer' }}>
                <Image src={iconOne} onClick={() => {
                    if (value.userProfile.username === "Guest") {
                      Router.push('/user/signup');
                    } else {
                      Router.push('/listings/list')
                    }

                  }}/>
              </Paper>
                <Typography gutterBottom variant="h5" component="h2" style={{ display: 'flex', justifyContent: 'center', marginRight: '40px', color: 'white' }}>
                  Need Help
                </Typography>
                {/* <Typography variant="body2" color="textSecondary" component="p">
                  <p>
                    Our whole purpose is to help families like yours to get the everyday essentials you need. Our crowdsourcing platform makes it easy to request help and it will be fulfilled by potential donors.
                  </p>


                </Typography> */}
                {/* <Button variant="contained" size="large" color="default" className={classes.btnL}
                  onClick={() => {
                    if (value.userProfile.username === "Guest") {
                      Router.push('/user/signup');
                    } else {
                      Router.push('/listings/list')
                    }

                  }}
                >
                  Sign Up
                </Button> */}
              </CardContent>
              {/* </CardActionArea> */}
            </Card>
            <Card className={classes.root} style={{ border: "none", boxShadow: "none" }} >

              <CardContent style={{ backgroundColor: '#829cd3' }}>
              <Paper variant="outlined" style={{ border: "none", boxShadow: "none", display: 'flex', justifyContent: 'center', marginLeft: '40px', backgroundColor: '#829cd3', marginBottom: '40px', cursor: 'pointer' }}>
                <Image src={iconTwo} onClick={() => {
                    if (value.userProfile.username === "Guest") {
                      Router.push('/user/signup');
                    } else {
                      Router.push('/listings/list')
                    }
                  }} />
              </Paper>
                <Typography gutterBottom variant="h5" component="h2" style={{ display: 'flex', justifyContent: 'center', marginLeft: '30px', color: 'white' }}>
                Can Help
                </Typography>
                {/* <Typography variant="body2" color="textSecondary" component="p">
                  <p>
                    The support we receive from individuals, families, and businesses sustains our mission and work year-round. Our crowdsourcing program makes it easy to donate to individuals.
                  </p>

                </Typography>
                <Button variant="contained" size="large" color="default" className={classes.btnL}
                  onClick={() => {
                    if (value.userProfile.username === "Guest") {
                      Router.push('/user/signup');
                    } else {
                      Router.push('/listings/list')
                    }
                  }}
                >
                  Sign Up
                </Button> */}
              </CardContent>

            </Card>
          </div>
        )
      }}
    </AuthContext.Consumer>
  );
}