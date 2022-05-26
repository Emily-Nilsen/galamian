import Image from 'next/image';
import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import Hero from '../components/hero';
import Features from '../components/features';
import Testimonial from '../components/testimonial';
import Noticias from '../components/noticias';
import { motion, AnimatePresence } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: [0, 1, 0],
    transition: {
      duration: 3,
      type: 'fade',
      ease: 'easeOut',
    },
  },
};
const itemLast = {
  hidden: { opacity: 0 },
  show: {
    opacity: [0, 1],
    transition: {
      duration: 3,
      type: 'fade',
      ease: 'easeOut',
    },
  },
};

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
