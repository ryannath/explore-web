import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  cardContent: {
    minHeight: 300
  },

  media: {
    height: 200,
  },

});

const FeatureCard = ({ image, desc, url }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea onClick={()=>window.open(url, '_blank')}>
        <CardMedia className={classes.media} image={image}/>
        <CardContent className={classes.cardContent}>
          <Typography>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>  )
}

export default FeatureCard
