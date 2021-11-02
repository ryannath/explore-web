import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core'
// import { ReactComponent as FeaturedBackground } from './FeaturedBackground.svg';
import Wave from './SVG/Wave';
import FeatureCard from './FeatureCard'
// import ReactLogo from './Wave.svg';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    margin: '0rem auto',
    maxWidth: '90rem',
  },


  section: {
    backgroundColor: '#0F161C',
    color: 'white',
    paddingBottom: '5rem'

  },

  contentContainer: {
    maxWidth: '40rem',
    margin: 'auto',
    textAlign: 'center',
    marginBottom: '3rem'
  },

  cardContainer: {
    marginLeft: 'min(10rem, 10%)',
    marginRight: 'min(10rem, 10%)',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '2rem',
      marginRight: '2rem',
    }
  },

  media: {
    height: 140,
  },

  wave: {
    position: 'relative',
    top: '1rem',
    zIndex: -1,
    height: '7rem',
    width: '100%'
  },
}));


const featured = [
  {
    img: 'dribbble-logo.png',
    desc: `Dribbble showcases a wide variety of design work from
    illustrations, mobile app design, website design, and logo.
    Users may also follow certain creators they are interested in, or
    create their own portfolio to showcase the work they've done`,
    url: 'https://dribbble.com/',
  },
  {
    img: 'behance-logo.jpeg',
    desc: `Behance is a website by Adobe that focuses on portfolio display.
    In many ways, it is simlar to dribbble, it has a multitude of design work
    in different forms and profiles to follow. The vertical layouting of each
    work makes it more similar to websites`,
    url: 'https://www.behance.net/',
  },
  {
    img: 'uiiiuiii-logo.jpg',
    desc: `Uiiiuiii provides a large number of tutorials in the creative field,
    including those on Photoshop and Illustrator. It also provides a number of website design
    to be taken as inspiration. The website and its content are in Chinese, however, this can
    be overcomed using Chrome's translate page`,
    url: 'https://uiiiuiii.com/',
  },
]


const Content = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>

      <Wave className={classes.wave}/>
      <Box className={classes.section}>
        <Box className={classes.contentContainer}>
          <Typography variant='h4' component='h2' className={classes.sectionTitle}>
            DESIGN
          </Typography>
          <Typography>
            Design can be a difficult process for both beginners and professionals alike.
            Below are some websites to take inspirations from
          </Typography>
        </Box>
        <Box className={classes.cardContainer}>
          <Grid container spacing={2} style={{justifyContent: 'center'}}>
            {featured.map((item) => (
              <Grid item xs={12} sm={8} md={4} key={item.toString()}>
                <FeatureCard
                  image={item.img}
                  desc={item.desc}
                  url={item.url}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>

  )
}

export default Content
