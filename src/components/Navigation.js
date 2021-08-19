import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  btn: {
    flexGrow: 1,
  }
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar variant='dense'>
        <Box className={classes.btn}>
          <IconButton edge='star' className={classes.menuButton} color='inherit'>
            <ErrorIcon />
          </IconButton>
        </Box>

        <Button color='inherit' href='#'>Home</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
