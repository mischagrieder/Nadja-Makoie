import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SmileGallerySection from './components/SmileGallerySection';
import ImplantSection from './components/ImplantSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="bg-white">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Navbar />
      <main>
        <HeroSection />
        <SmileGallerySection />
        <ImplantSection />
        <ReviewsSection />
        <ContactSection />
      </main>
    </div>
  );
}
