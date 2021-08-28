import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  heroContainer: {
    height: '100vh',
  },

  container: {
    display: 'flex',
    position: 'relative',
    top: '18%'
  },

  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 5,
    padding: '2rem 4rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    backdropFilter: 'blur(16px) saturate(1.2)',
    textAlign: 'center',

    '& h1': {
      fontFamily: "Qwigley, cursive",
      fontSize: 100,
      paddingBottom: '1rem'
    },

    '& p': {
      fontSize: '1.2rem'
    }
  }
});



const Hero = ({ image }) => {
  const classes = useStyles();
  const content = (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <Typography variant='h1'>
          Petualang
        </Typography>
        <Typography>
        Explore websites to inspire your design
        </Typography>
      </Box>
    </Box>
  )

  return (
    <Box className={classes.heroContainer} style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
      {content}
    </Box>

  )
}

export default Hero
