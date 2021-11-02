import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Content from '../components/Content'
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
      <Navigation />
      <Hero callToActionRef='#Info' />
      <InfoSection />
      <Content />
      <Footer />
    </>
  )
}

export default Home
