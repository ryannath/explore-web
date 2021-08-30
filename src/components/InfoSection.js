import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Plants } from './Plants.svg';


const useStyles = makeStyles(theme => ({
  // Section root, relative for background image positioning
  root: {
    position: 'relative',
    overflow: 'hidden',
    // padding to separate from other sections
    paddingTop: '5rem',
    paddingBottom: '5rem',
  },

  // Leaves decorations in the background
  leaveDecor: {
    position: 'absolute',
    right: 0,
    top: '10vh',
    width: '30%',
    zIndex: -1,

    [theme.breakpoints.down('md')]: {
      width: '100%',
      top: '-4vh',
    },
    [theme.breakpoints.down('xs')]: {
      width: '120%',
      top: '-4vh',
    },
  },
  
  // Not the actual card itself, just the container, positions
  // the card
  cardContainer: {
    paddingLeft: '15%',
    paddingRight: '15%',
    // *** padding is included in width size
    width: '75%',

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0px 5vw'  
    },
  },

  // The actual card itself
  sideCard: {
    padding: '3rem 3rem 8rem 3rem',

    [theme.breakpoints.down('xs')]: {
      padding: '3rem 1rem 4rem 1rem'  
    }
  },

  sideCardTitle: {
    // fontSize: 36,
    marginBottom: '1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: 36,
    }
  },

  sideCardSubTitle: {
    fontSize: 28,
    color: 'gray',
    letterSpacing: 5,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    }
  },

  primaryParagraph: {
    marginBottom: 10,
  },

  cardParagraph: {
    maxWidth: 750,
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    }
  }
}));

const InfoSection = () => {
  const classes = useStyles();

  const card = (
    <Card className={classes.sideCard}>
      <Typography variant= 'h4' component='h2' className={classes.sideCardTitle}>
        Petualang
        <Typography component='span' className={classes.sideCardSubTitle}> •&nbsp;explorer </Typography>
      </Typography>
      <Box>
        <Typography className={classes.primaryParagraph + ' ' + classes.cardParagraph}>
        Design like all things requires practice and brave experimentations. Whether it be illustration or web design, there is a variety of websites to draw inspirations from.
        </Typography>
        <Typography className={classes.cardParagraph}>
          Petualang 
          <Typography color='secondary' component='span' className={classes.cardParagraph}> connects you </Typography>
          to the most popular websites that feature design oriented
          content to accelerate the exploration phase of design.
        </Typography>
      </Box>
    </Card>
  );

  return (
    <Box className={classes.root} id='Info'>
      <Box className={classes.cardContainer}>
        {card}
      </Box>
      <Plants className={classes.leaveDecor}/>
    </Box>
  );
}

export default InfoSection;
