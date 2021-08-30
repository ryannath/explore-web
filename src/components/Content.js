import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core'
// import { ReactComponent as FeaturedBackground } from './FeaturedBackground.svg';
import FeaturedBackground from './FeaturedBackground';
import Wave from './Wave';
import FeatureCard from './FeatureCard'
// import ReactLogo from './Wave.svg';

const useStyles = makeStyles({
  root: {
    paddingBottom: '5rem',
    position: 'relative',
    overflow: 'hidden',
  },

  background: {
    zIndex: -1,
    position:'absolute',
    height: 'inherit',
    top: '5vh',
  },

  section: {
    paddingTop: '30vh',
    paddingLeft: '15%',
    paddingRight: '15%',
  },

  media: {
    height: 140,
  },

  wave: {
    position: 'absolute',
    zIndex: -2,
    top: 0,

  }
});


const featured = [
  {
    img: 'dribbble-logo.png',
    desc: `Dribbble showcases a wide variety of design work from
    illustrations, mobile app design, website design, and logo.
    Users may also follow certain creators they are interested in, or
    create their own portfolio to showcase the work they've done`
  },
  {
    img: 'behance-logo.jpeg',
    desc: `Behance is a website by Adobe that focuses on portfolio display.
    In many ways, it is simlar to dribbble, it has a multitude of design work
    in different forms and profiles to follow. The vertical layouting of each
    work makes it more similar to websites`
  },
  {
    img: 'uiiiuiii-logo.jpg',
    desc: `Uiiiuiii provides a large number of tutorials in the creative field,
    including those on Photoshop and Illustrator. It also provides a number of website design
    to be taken as inspiration. The website and its content are in Chinese, however, this can
    be overcomed using Chrome's translate page`
  },
]


const Content = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
      <FeaturedBackground className={classes.background}/>
      <Wave className={classes.wave}/>
      <Box className={classes.section}>
        <Typography variant='h4' component='h2'>
          Featured
        </Typography>
        <Grid container spacing={2}>
          {featured.map((item) => (
            <Grid item xs={12} md={4}>
              <FeatureCard
                image={item.img}
                desc={item.desc}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Content
