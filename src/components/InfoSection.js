import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
  root: {
    padding: '5rem 0 5rem 0',
  }
});

const InfoSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant='body1'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
      </Typography>
      <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
      </Typography>
    </Container>
  )
}

export default InfoSection
