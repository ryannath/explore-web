import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Content from '../components/Content'


const Home = () => {
  return (
    <>
      <Navigation />
      <Hero callToActionRef='#Info' />
      <InfoSection />
      <Content />
    </>
  )
}

export default Home
