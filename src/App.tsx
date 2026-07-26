import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Strengths } from '@/components/Strengths';
import { Offers } from '@/components/Offers';
import { Clients } from '@/components/Clients';
import { Testimonials } from '@/components/Testimonials';
import { Philosophy } from '@/components/Philosophy';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ResonanceLine } from '@/components/ResonanceLine';

function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main>
        <Hero />
        <ResonanceLine />
        <About />
        <ResonanceLine />
        <Strengths />
        <ResonanceLine />
        <Offers />
        <ResonanceLine />
        <Clients />
        <ResonanceLine />
        <Testimonials />
        <ResonanceLine />
        <Philosophy />
        <ResonanceLine />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
