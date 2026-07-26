import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingUI from './components/FloatingUI';
import CookieBanner from './components/CookieBanner';
import Backdrop from './components/Backdrop';
import { useSmoothScroll } from './lib/smoothScroll';

export default function App() {
  useSmoothScroll();
  return (
    <div className="relative overflow-x-clip">
      <Backdrop />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Reviews />
        <About />
        <Faq />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <FloatingUI />
      <CookieBanner />
    </div>
  );
}
