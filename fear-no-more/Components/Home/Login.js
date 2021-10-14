import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    display: 'flex',
    flexDirection: 'row',
    align: 'center',
    marginTop: 75,
    marginBottom: 50
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
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Typography gutterBottom variant="h4" component="h2" className={classes.cent}>
        Mission
      </Typography>
      <Typography variant="body2" component="p" className={classes.snip}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Card className={classes.root} >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Lorem ipsum"
            height="170"
            image="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2017/05/istock-64215815-medium-1024x679-1493792308.jpg"
            title="Lorem ipsum"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lorem ipsum
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}