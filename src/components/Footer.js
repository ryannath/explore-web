import { Divider, makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'rgb(237,237,237)'
  },

  contentContainer: {
    margin: '0 auto',
    padding: '2rem 0rem',
    // margin: '3rem auto 3rem auto',
    maxWidth: '80%',
    textAlign: 'center',
  },

  attribution: {
    marginBottom: '1rem',
  },

  copyright: {
    marginTop: '1rem'
  },

  footerText: {
    fontSize: '0.8rem'
  }


}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.contentContainer}>
        <Box className={classes.attribution}>
          <Typography className={classes.footerText}>
            Stars video by Luz Calor Som from Pexels
          </Typography>
          <Typography className={classes.footerText}>
            Science by rivercon from the Noun Project
          </Typography>
          <Typography className={classes.footerText}>
            Design by popcornarts from the Noun Project
          </Typography>
          <Typography className={classes.footerText}>
            Nature by Made from the Noun Project
          </Typography>
          <Typography className={classes.footerText}>
            Architecture by N.Style from the Noun Project
          </Typography>
        </Box>
        <Divider/>
        <Box className={classes.copyright}>
          <Typography className={classes.footerText}>Petualang &copy; 2021. All rights reserved.</Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Footer
