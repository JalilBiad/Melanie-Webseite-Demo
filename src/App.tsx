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

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Strengths />
        <Offers />
        <Clients />
        <Testimonials />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
