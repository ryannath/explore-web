import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <InfoSection />
      <Content />
    </div>
  );
}

export default App;
