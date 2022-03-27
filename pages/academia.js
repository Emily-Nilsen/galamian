import Layout from '../components/layout';
import ElProyecto from '../components/el-proyecto';
import SusFundadores from '../components/sus-fundadores';
import SalaUnicaja from '../components/sala-unicaja';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

const Academia = () => {
  return (
    <main>
      <ElProyecto />
      <SusFundadores />
      <SalaUnicaja />
    </main>
  );
};

export default Academia;
