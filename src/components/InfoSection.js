import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LogoScience from './SVG/LogoScience';
import LogoDesign from './SVG/LogoDesign';
import LogoNature from './SVG/LogoNature'
import LogoArchitecture from './SVG/LogoArchitecture';
import Icon from './Icon'

const useStyles = makeStyles(theme => ({
  // Section root, relative for background image positioning
  root: {
    overflow: 'hidden',
    margin: '5rem 0rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // padding to separate from other sections

  },

  // Not the actual card itself, just the container, positions
  // the card
  contentContainer: {

    maxWidth: '40rem',
    textAlign: 'center',

    // [theme.breakpoints.down('md')]: {
    //   width: '100%',
    // },
    // [theme.breakpoints.down('xs')]: {
    //   padding: '0px 5vw'  
    // },
  },

  firstParagraph: {
    paddingBottom: '1rem',
  },

  secondParagraph: {
    paddingBottom: '3rem'
  },

  iconContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '60%'
  }
}));

const InfoSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} id='Info'>
      <Box className={classes.contentContainer}>
        <Typography variant='h4' component='h2'>PETUALANG - EXPLORER</Typography>
        <Typography className={classes.firstParagraph}>
          Petualang
          <Typography style={{color: '#0D40DD'}}component='span'> connects you </Typography>
          to the grandeur of life</Typography>
        <Typography className={classes.secondParagraph}>
          Find ways to learn more of the topics you know and love,
          discover fascinating subjects to be passionate about,
          or simply explore the vast collective knowledge and experience of humanity
        </Typography>
      </Box>
      <Box className={classes.iconContainer}>
        <Icon text="Science"><LogoScience/></Icon>
        <Icon text="Design"><LogoDesign/></Icon>
        <Icon text="Nature"><LogoNature/></Icon>
        <Icon text="Architecture"><LogoArchitecture/></Icon>
      </Box>
    </Box>
  );
}

export default InfoSection;
