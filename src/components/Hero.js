import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import usePosition from './hooks/usePosition';
import { withThemeCreator } from '@material-ui/styles';
import { Minimize } from '@material-ui/icons';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  // Section container, for background image
  sectionContainer: {
    height: 'clamp(40rem, 100vh, 50rem)',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionBackground: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    zIndex: 1,
  },

  sectionBackgroundOverlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    position: 'absolute',
    zIndex: 2,
  },

  // Content container, for heading and call to action, etc
  contentContainer: {
    position: 'relative',
    display: 'flex',
    justifyItems: 'center',
    border: '5px solid white',
    zIndex: 100,
    [theme.breakpoints.down('xs')]: {
      top: '-2rem',
    }
  },

  // The actual content
  content: {
    // Creates a glass effect
    margin: '5rem 0rem',
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    padding: '2rem 4rem',
    // backdropFilter: 'blur(16px) saturate(1.2)',
    textAlign: 'center',
    color: 'white',
    '& h1': {
      fontFamily: '"Roboto", sans-serif',
      fontSize: '4.5rem',
      fontWeight: 700,
    },

    '& a': {
      color: 'white',
      textDecoration: 'none',
      fontStyle: 'italic',
      fontSize: '1.5rem',
      paddingBottom: '1rem',
    },

    // Needed a smaller font size for mobile
    [theme.breakpoints.down('xs')]: {
      padding: '2rem 1rem',
      '& h1': {
        fontSize: '3rem',
      },

      '& a': {
        fontSize: '1rem',
      }
    }
  },

}));


const Hero = ({ image, callToActionRef }) => {
  const { ref, end, scrollY } = usePosition();
  const y1 = useTransform(scrollY, [0, end], [0.2, 1]);
  const classes = useStyles();

  // This content will be placed on a glass-like card
  // on top of a 100vh background image
  const content = (
    <Box className={classes.contentContainer}>
      <Box className={classes.content}>
        <Typography variant='h1'>
          PETUALANG
        </Typography>
        <Link href={callToActionRef}>
          Explore the world
        </Link>
      </Box>
    </Box>
  )

  return (
    <Box className={classes.sectionContainer} ref={ref}>
      <motion.video src="stars.mp4" muted loop autoPlay className={classes.sectionBackground}/>
      <motion.div className={classes.sectionBackgroundOverlay} style={{opacity:y1}}></motion.div>
      {content}
    </Box>

  )
}

export default Hero
