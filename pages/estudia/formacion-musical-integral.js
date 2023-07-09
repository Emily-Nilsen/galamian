import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import useTranslation from 'next-translate/useTranslation';
import { ExclamationIcon } from '@heroicons/react/solid';
import { CheckIcon } from '@heroicons/react/outline';
import ProfesoresViolin from '../../components/estudio/profesores-violin';
import ViolinRequisitos from '../../components/estudio/violin-requisitos';
import ViolinGalleryOne from '../../components/estudio/violin-gallery-1';
import { motion } from 'framer-motion';

export default function FormacioMusicalIntegral() {
  const { t } = useTranslation();

  const modes = [
    {
      name: `${t('common:estudio_list_ano_magistrales')}`,
      modeA: `64`,
      modeB: `48`,
      modeC: `32`,
    },
    {
      name: `${t('common:estudio_list_profesores_invitados')}`,
      modeA: `2`,
      modeB: `2`,
      modeC: `1`,
    },
    {
      name: `${t('common:estudio_list_rendimiento')}`,
      modeA: `10`,
      modeB: `10`,
      modeC: `10`,
    },
    {
      name: `${t('common:estudio_list_camara')}`,
      modeA: `14`,
      modeB: `14`,
      modeC: `14`,
    },
    {
      name: `${t('common:estudio_list_eConferencias')}`,
      modeA: <CheckIcon className="absolute w-6 h-6 text-lime-500" />,
      modeB: <CheckIcon className="absolute w-6 h-6 text-lime-500" />,
      modeC: <CheckIcon className="absolute w-6 h-6 text-lime-500" />,
    },
    {
      name: `${t('common:estudio_list_distancia')}`,
      modeA: <CheckIcon className="absolute w-6 h-6 text-lime-500" />,
      modeB: <CheckIcon className="absolute w-6 h-6 text-lime-500" />,
      modeC: <CheckIcon className="absolute w-6 h-6 text-lime-500" />,
    },
    {
      name: `${t('common:estudio_list_conciertos_camara')}`,
      modeA: `2`,
      modeB: `2`,
      modeC: `2`,
    },
    {
      name: `${t('common:estudio_list_conciertos_alumnos')}`,
      modeA: `3`,
      modeB: `3`,
      modeC: `3`,
    },
    {
      name: `${t('common:estudio_list_recital_propia')}`,
      modeA: <CheckIcon className="absolute w-6 h-6 text-lime-500" />,
      modeB: <CheckIcon className="absolute w-6 h-6 text-lime-500" />,
      modeC: <CheckIcon className="absolute w-6 h-6 text-lime-500" />,
    },
    {
      name: `${t('common:estudio_list_repertoristas')}`,
      modeA: <CheckIcon className="absolute w-6 h-6 text-lime-500" />,
      modeB: <CheckIcon className="absolute w-6 h-6 text-lime-500" />,
      modeC: <CheckIcon className="absolute w-6 h-6 text-lime-500" />,
    },
    {
      name: `${t('common:estudio_list_matricula')}`,
      modeA: `${t('common:estudio_list_fee_1')}`,
      modeB: `${t('common:estudio_list_fee_2')}`,
      modeC: `${t('common:estudio_list_fee_3')}`,
    },
  ];

  return (
    <Layout
      title="Formación musical integral en la AIG"
      description="Descubre la Academia Galamian, una institución educativa de renombre que ofrece formación musical integral y oportunidades artísticas en un ambiente de estudio colaborativo."
      keywords="Academia Galamian, formación musical, desarrollo artístico, educación musical, estudios musicales, competencias musicales, técnica instrumental, ambiente de estudio, compañeros de estudio, profesores de música, instalaciones musicales, conciertos, actividades musicales, música de cámara, orquesta, Sociedad Filarmónica de Málaga"
    >
      <div className="bg-white">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-normal tracking-tight uppercase text-neutral-900">
              Formación musical integral en la
            </h2>
            <h1 className="mt-2 text-4xl font-semibold text-neutral-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Academia Internacional{' '}
              <span className="font-bold text-gold-600"> Galamian</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="relative bg-neutral-50">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            type: 'fade',
            ease: 'easeIn',
          }}
          className="relative object-cover w-full h-56"
        >
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653712685/Galamian/violin/group-photo-06_amz0oq.webp"
            alt="Estudio de violín/viola"
            unoptimized={true}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </motion.div>
        <div className="relative px-4 pt-12 pb-16 sm:pt-16 sm:px-6">
          <div className="mx-auto text-base max-w-prose">
            <h2 className="font-normal leading-6 tracking-tight uppercase text-neutral-900">
              Desarrollo artístico en la
            </h2>
            <h2 className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-neutral-900 sm:text-4xl">
              Academia Internacional{' '}
              <span className="block font-bold text-gold-600">Galamian</span>
            </h2>
            <p className="mt-8 text-lg text-neutral-600">
              {t('common:estudiar_para_01')}
            </p>
            <div className="mt-5 prose text-neutral-600 prose-gold">
              <p>{t('common:estudiar_para_02')}</p>
              <p>{t('common:estudiar_para_03')}</p>
              <h3 className="tracking-tight text-neutral-900">
                {t('common:permite_title')}
              </h3>
              <ul role="list">
                <li>{t('common:permite_list_item_01')}</li>
                <li>{t('common:permite_list_item_02')}</li>
                <li>{t('common:permite_list_item_03')}</li>
                <li>{t('common:permite_list_item_04')}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Violin Gallery One */}
        <div className="lg:pt-0">
          <ViolinGalleryOne />
        </div>
      </div>

      <ViolinRequisitos />
    </Layout>
  );
}
