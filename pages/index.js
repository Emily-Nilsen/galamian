import Image from 'next/image';
import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import Hero from '../components/hero';
import Features from '../components/features';
import Testimonial from '../components/testimonial';
import Noticias from '../components/noticias';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout
      title={t('layout:inicio_title')}
      description={t('layout:inicio_description')}
      keywords={t('layout:inicio_keywords')}
    >
      <Hero />
      <Features />
      <Testimonial />
      <Noticias />
    </Layout>
  );
}
