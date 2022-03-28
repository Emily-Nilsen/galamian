import Image from 'next/image';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Features from '../components/features';
import Testimonial from '../components/testimonial';
import Noticias from '../components/noticias';
import ProfesorQuickview from '../components/profesor-quickview';

export default function Home() {
  return (
    <div>
      {/* Hero card */}
      <Hero />
      {/* School features */}
      <Features />
      {/* Testimonial */}
      <Testimonial />
      {/* Noticias */}
      <Noticias />
      {/* ProfesorQuickview modal */}
      <div className="bg-pink-100">
        <ProfesorQuickview />
      </div>
    </div>
  );
}
