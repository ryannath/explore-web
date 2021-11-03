import { Grow, makeStyles, Typography } from "@material-ui/core"
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({triggerOnce: true});
  const children = props.children;
  const text = props.text;
  const classes = useStyles();



  return (
    <Grow
      in={inView}
      {...(inView ? { timeout: 1250 } : {})}
      ref={ref}
      >
      <div
        ref={ref}
        className={classes.root}>

        <div className={classes.icon}>{children}</div>
        {
          text ?
          <Typography className={classes.iconText}>
            {text}
          </Typography>
          :""
        }
      </div>
    </Grow>
  );
}

export default Icon
