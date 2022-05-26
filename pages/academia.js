import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import ElProyecto from '../components/el-proyecto';
import SusFundadores from '../components/sus-fundadores';
import SalaUnicaja from '../components/sala-unicaja';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Academia = () => {
  const { t } = useTranslation();

  return (
    <Layout
      title={t('layout:academia_title')}
      description={t('layout:academia_description')}
      keywords={t('layout:academia_keywords')}
    >
      <ElProyecto />
      <SusFundadores />
      <SalaUnicaja />
    </Layout>
  );
};

export default Academia;
