import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { ReactComponent as HomeLogo } from './HomeIcon.svg'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
  navBar: {
    backgroundColor: '#fff',
    color: '#000',
  },

  homeButton: {
    marginLeft: 'auto',
  },

  homeLogo: {
    height: '1.3rem',
  },
  navContainer: {
    margin: '0 auto',
    maxWidth: '90rem',
    width: '100%',
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({disableHysteresis: true, threshold:0});

  return (
    <AppBar
      className={classes.navBar}
      // style={{backgroundColor: (trigger ? '#fff': 'transparent')}}
      elevation={trigger ? 4 : 0}
    >
      <Toolbar variant='dense' className={classes.navContainer}>
        <Button className={classes.homeButton} href='#'>
          <HomeLogo className={classes.homeLogo}/>
          Home
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
