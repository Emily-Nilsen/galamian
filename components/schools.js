import useTranslation from 'next-translate/useTranslation';
import React, { Component } from 'react';
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

export default function Schools() {
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
    <div className="pb-10">
      <motion.ol
        variants={container}
        initial="hidden"
        whileInView="show"
        className="relative"
      >
        {schools.map((school, i) => (
          <motion.li key={i} variants={item} exit={{ opacity: 1 }}>
            <div className="absolute top-0 left-0">{school.name}</div>
          </motion.li>
        ))}
        <motion.li variants={itemLast} exit={{ opacity: 1 }}>
          <div className="absolute top-0 left-0">{t('academia:school_01')}</div>
        </motion.li>
      </motion.ol>
    </div>
  );
}
