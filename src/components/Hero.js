import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import usePosition from './hooks/usePosition';

const useStyles = makeStyles(theme => ({
  // Section container, for background image
  sectionContainer: {
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
  },

  sectionBackground: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
  },

  // Content container, for heading and call to action, etc
  contentContainer: {
    position: 'relative',
    top: '18%',
    // flexbox to center content
    display: 'flex',
    justifyContent: 'center',
  },

  // The actual content
  content: {
    // Creates a glass effect
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 5,
    padding: '2rem 4rem',
    backdropFilter: 'blur(16px) saturate(1.2)',
    textAlign: 'center',

    '& h1': {
      fontFamily: "Qwigley, cursive",
      fontSize: '7rem',
    },

    '& p': {
      fontSize: '1.2rem',
      paddingBottom: '1rem',
    },

    // Needed a smaller font size for mobile
    [theme.breakpoints.down('xs')]: {
      padding: '2rem 1rem',
      '& h1': {
        fontSize: '5rem',
      },

      '& p': {
        fontSize: '1rem',
      }
    }
  },

}));


const Hero = ({ image, callToActionRef }) => {
  const { ref, end, scrollY } = usePosition();
  const y1 = useTransform(scrollY, [0, end], [1, 1.2]);
  const classes = useStyles();

  // This content will be placed on a glass-like card
  // on top of a 100vh background image
  const content = (
    <Box className={classes.contentContainer}>
      <Box className={classes.content}>
        <Typography variant='h1'>
          Petualang
        </Typography>
        <Typography>
        Explore websites to inspire your design
        </Typography>
        <Button variant='contained' color="secondary" href={callToActionRef}>
          Learn More
        </Button>
      </Box>
    </Box>
  )

  return (
    <Box className={classes.sectionContainer} ref={ref}>
      <motion.img src={image} alt='' className={classes.sectionBackground} style={{scale:y1}}/>
      {content}
    </Box>

  )
}

export default Hero
