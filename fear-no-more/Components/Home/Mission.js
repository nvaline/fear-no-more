import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import iconFour from '../../public/icon4.png';
import Image from 'next/image'
import Paper from '@material-ui/core/Paper';
import iconThree from '../../public/icon3.png';


const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    display: 'flex',
    align: 'center',
    marginTop: 0,
    marginBottom: 80,
    flexDirection: 'column',
    pointerEvents: 'none'
  },
  cent: {
    align: 'right',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    letterSpacing: -2,
    justifyContent: 'center',
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
  }

});


export default function Mission(props) {
  const classes = useStyles()

  return (

    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', fontSize: '40px', marginBottom: '50px', }}>

      {/* <Typography variant="body2" component="p" className={classes.snip}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </Typography> */}


          <Paper style={{ border: "none", boxShadow: "none", display: 'flex', justifyContent: 'center', flexDirection: 'row', height: '350px', width: '350px', }}>
            <Image alt='' src={iconFour} />
          </Paper>


        <Card className={classes.root} style={{ border: "none", boxShadow: "none", display: 'flex', justifyContent: 'center', flexDirection: 'row', }} >
          <CardActionArea>
          <CardContent>
            <Typography variant="h4" component="h2" style={{ display: 'flex', justifyContent: 'center', fontSize: '30px', paddingLeft: '20px', width: '350px', alignItems: 'flex-start'}}>
              To Save Our Community, We Must Move Beyond Hope!
            </Typography>

            <Paper style={{ border: "none", boxShadow: "none", display: 'flex', paddingLeft: '20px', height: '10px', flexDirection: 'row', marginBottom: '30px', alignItems: 'flex-start', paddingTop: '25px'}}>
              <Image alt='' src={iconThree} />
            </Paper>

            {/* <Typography gutterBottom variant="h5" component="h2">
              Lorem ipsum
            </Typography> */}
            <Typography variant="body2" color="textSecondary" component="p" style={{ width: '350px', display: 'flex', flexDirection: 'column',  paddingLeft: '20px', marginTop: '30px'}}>
              <p>
                Poverty is a serious nationwide issue. The average U.S. family in poverty, with two adults and two children, lives on less than $26,500 a year. Consider these staggering statistics from the regions where Fear No More currently operates:
              </p>
              {/* <ul>
                <li>
                  More than 1 in 3 children, 12 years old and younger, live in low-income or homeless situations.

                </li>
                <li>
                  According to the U.S. Census Bureau, Texas has one of the highest poverty rate among the nation’s ten largest cities. 3 in 5 children live in poverty.
                </li>
                <li>
                  1 in 2 children in Texas live in low income and homeless situations.
                </li>
              </ul> */}


              {/* <p>
                Without adequate and appropriate clothing, children face unfair barriers and participate in life on an unequal playing field. Across most of the United States, only three (food, housing, energy) of four basic needs are supported by government safety net programs. Fear No More uses the term “Clothing Insecurity” as part of our efforts to formally recognize the issue, and increase awareness on this hidden basic need.

              </p> */}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}