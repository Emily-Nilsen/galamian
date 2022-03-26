import Image from 'next/image';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Features from '../components/features';
import Noticias from '../components/noticias';

export default function Home() {
  return (
    <div>
      {/* Hero card */}
      <Hero />
      {/* School features */}
      <Features />
      {/* Noticias */}
      <Noticias />
    </div>
  );
}
