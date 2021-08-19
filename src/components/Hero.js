import Box from '@material-ui/core/Box'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles({
  heroContainer: {
    backgroundImage: 'url("landscape-eberhard-grossgasteiger.jpg")',
    backgroundSize: 'cover',
    height: '100vh',
  }
})

const Hero = () => {
  const classes = useStyles();
  return (
    <Box className={classes.heroContainer}>
      {/* Put hero content here */}
    </Box>

  )
}

export default Hero
