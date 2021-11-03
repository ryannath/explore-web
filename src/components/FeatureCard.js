import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grow, makeStyles } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0rem 0rem 2rem 0rem',
  },

  cardContent: {
    minHeight: 270
  },

  media: {
    height: '12rem',
  
    [theme.breakpoints.up('sm')]: {
      height: '18rem',
    },

    [theme.breakpoints.up('md')]: {
      height: '200px',
    }
  },

  cardText: {
    fontSize: '1rem',
    padding: '1rem',
    [theme.breakpoints.down('md')]: {
      padding: '0',
    }
  }

}));

const FeatureCard = ({ image, desc, url }) => {
  const classes = useStyles();
  const { ref, inView } = useInView({triggerOnce: true});
  return (
    <Grow
      in={inView}
      {...(inView ? { timeout: 1200 } : {})}
      ref={ref}
      >

      <Card className={classes.root}>
        <CardActionArea onClick={()=>window.open(url, '_blank')}>
          <CardMedia className={classes.media} image={image}/>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardText}>
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
}

export default FeatureCard
