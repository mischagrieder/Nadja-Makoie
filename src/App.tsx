import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingUI from './components/FloatingUI';
import CookieBanner from './components/CookieBanner';

export default function App() {
  return (
    <div className="bg-ivory overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <About />
        <WhyUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingUI />
      <CookieBanner />
    </div>
  );
}
