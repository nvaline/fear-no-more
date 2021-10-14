import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';
import iconThree from '../../public/icon3.png';
import Image from 'next/image'
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'row',
    align: 'center',
    marginTop: 15,
    spacing: -100,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 20,
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
const theme = {
  spacing: 8,
}

export default function Testimonial(props) {
  const classes = useStyles()

  return (
    <div>
      <Typography gutterBottom variant="h4" component="h2" style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', fontSize: '40px'}}>
        Testimonials
      </Typography>

      <Paper style={{ border: "none", boxShadow: "none", display: 'flex', justifyContent: 'center', flexDirection: 'row', marginBottom: '30px', alignItems: 'flex-start', paddingTop: '25px'}}>
        <Image alt='' src={iconThree} />
      </Paper>

      <Typography gutterBottom style={{ display: 'flex', justifyContent: 'center', marginTop: '15px', fontSize: '17px'}}>
        We are happy to see your smiles once again
      </Typography>

    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '60px' }}>


      {/* <Typography variant="body2" component="p" className={classes.snip}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography> */}
      <Card className={classes.root} style={{ border: "none", boxShadow: "none", paddingTop: '20px', alignSelf: 'start', marginRight: '10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Lorem ipsum"
            height="200"
            image="https://cf.ltkcdn.net/charity/images/orig/254503-1600x1030-how-organize-food-drive.jpg"
            title="Lorem ipsum"
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="h2" style={{ marginTop: '25px', marginBottom: '25px'}}>
              James Z.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <p>
                I am from the province, my parents are poor rice farmers. We experienced obstacles. As our income was low, our parents could not afford to send us to secondary school and these things prevented us to go where we wanted to go. For me what defines poverty is having the ability but lacking the opportunity.

              </p>
              <p>
                When I finished primary school I moved to Bangkok, to look for a job, knowledge and experience. I had a goal in life and wanted to have what the others have : I want to have an education, I want to have opportunities. I did everything to get money in order to go to school. If I was hired to wash the dishes, to cook food, I would take the job, so that I could access education like other people and improve my life. I would attend class and then I would go to work in the evening.

                 I learned from the jobs, from the experiences and it allowed me to progress.

                I looked for ways and I started to train myself in sales. For this you need to set a goal, have a service mind, want the consumers to get quality products, be sincere with them, give them quality service. You must know your customers, know what they want, in what season you can provide which products, and in so doing you will reach your goal to know your customers.

              </p>
              <p>
                Today, I don’t have much income and there is hardship for me still, but I want a better life for my children, I want them to be able to have education like others, good jobs, and live well.

              </p>

              <p>
                My message to people in poverty is don’t think that you are underprivileged but try to find a way to break through from that state and show others what you can do.

              </p>

            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root} style={{ border: "none", boxShadow: "none", paddingTop: '20px', alignSelf: 'start', marginLeft: '10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Lorem ipsum"
            height="200"
            image="https://www.northwestharvest.org/wp-content/uploads/food-drives-mastheads.jpg"
            title="Lorem ipsum"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{ marginTop: '25px', marginBottom: '25px'}}>
              Ashley P.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">

              <p>
                My name is Ashley, I am a single mother from South West Virginia. I remember there were hard times at home, times when we had nothing, times when we needed help and we didn’t get it. We only had each other as a family. Dad was working a long way away and he‘d been gone weeks at a time.

              </p>
              <p>
                He got very sick one year he had a mini stroke. He also had diabetes through the orange agent he was exposed to in Vietnam. His legs got very bad. He had to quit his job and Mom had to start working at the prison.

              </p>
              <p>
                To me he was invincible, he was my superman. I had to take over the finance of the family, my dad taught me. He also taught me to drive. He taught me a lot. He always encouraged me to read, He’d say if you read your mind will be open and you will learn I had started going to college but then I had my son Xander and I had to give it up. I knew I had to care for my son first.

              </p>
              <p>

                Between work and studying and looking after my son, it’s a long week. I get very tired. I get up at 5.30 to get Xander to the baby sitter who takes him to school. I have to do miles to go to work and to college. In the evening I get my son from school. At home I have to give him all my attention as he is autistic and needs even more attention. It’s a hard journey but anything you do that’s hard is worth it in the end.
              </p>

              I would like to tell young people never to think “I am not smart enough to do this or that.” It doesn’t matter what people might tell you. It’s not what they think, it is what you want. You can do it if you want it bad enough. And if you have people around you, who believe in you.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
    </div>
  )
}