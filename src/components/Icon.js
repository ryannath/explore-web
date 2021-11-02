import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 2rem',

    [theme.breakpoints.down('sm')]: {
      marginBottom: '2.8rem'
    },
  },

  icon: {
    '& svg':{
      fill: '#0D408D',
      height: '8rem',
      width: '8rem',
    }
  },

  iconText: {

  }
}));

const Icon = (props) => {
  const children = props.children;
  const text = props.text;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.icon}>{children}</div>
      {
        text ?
        <Typography className={classes.iconText}>
          {text}
        </Typography>
        :""
      }
    </div>
  )
}

export default Icon
