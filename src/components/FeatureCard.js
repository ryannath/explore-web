import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0rem 0rem 2rem 0rem',
  },

  cardContent: {
    minHeight: 300
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
    fontSize: '1rem'
  }

}));

const FeatureCard = ({ image, desc, url }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={()=>window.open(url, '_blank')}>
        <CardMedia className={classes.media} image={image}/>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.cardText}>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>  )
}

export default FeatureCard
