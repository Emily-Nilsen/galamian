import useTranslation from 'next-translate/useTranslation';
import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { motion, AnimatePresence } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 2.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: [0, 1, 0],
    transition: {
      duration: 2.5,
      type: 'fade',
      ease: 'easeOut',
    },
    // transitionEnd: { opacity: 1 },
  },
};

export default function Schools({ isVisible }) {
  const { t } = useTranslation();
  const schools = [
    { name: `${t('academia:school_01')}` },
    { name: `${t('academia:school_02')}` },
    { name: `${t('academia:school_03')}` },
    { name: `${t('academia:school_04')}` },
    { name: `${t('academia:school_05')}` },
    { name: `${t('academia:school_06')}` },
    { name: `${t('academia:school_07')}` },
    { name: `${t('academia:school_08')}` },
    { name: `${t('academia:school_09')}` },
    { name: `${t('academia:school_10')}` },
    { name: `${t('academia:school_11')}` },
    { name: `${t('academia:school_12')}` },
  ];

  return (
    <motion.ol
      variants={container}
      initial="hidden"
      animate="show"
      className="relative"
    >
      {schools.map((school, i) => (
        <motion.li key={i} variants={item} exit={{ opacity: 1 }}>
          <div className="absolute top-0 left-0 z-10">{school.name}</div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
