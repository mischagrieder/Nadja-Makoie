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
import CursorTooth from './components/CursorTooth';
import { useSmoothScroll } from './lib/smoothScroll';

export default function App() {
  useSmoothScroll();
  return (
    <div className="bg-ivory overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Reviews />
        <About />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <FloatingUI />
      <CookieBanner />
      <CursorTooth />
    </div>
  );
}
