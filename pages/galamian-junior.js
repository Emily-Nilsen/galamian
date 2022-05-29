import EstudiarJunior from '../components/galamian-junior/estudiar';
import EstudioJunior from '../components/galamian-junior/estudio';
import ProfesoresJunior from '../components/galamian-junior/profesores';
import Requisitos from '../components/galamian-junior/requisitos';
import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { ExclamationIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const GalamianJunior = () => {
  const { t } = useTranslation();
  const tabs = [
    {
      name: `${t('galamianJunior:tab_estudiar')}`,
      features: [
        {
          component: <EstudiarJunior />,
        },
      ],
    },
    {
      name: `${t('galamianJunior:tab_estudio')}`,
      features: [
        {
          component: <EstudioJunior />,
        },
      ],
    },
    {
      name: `${t('galamianJunior:tab_profesores')}`,
      features: [
        {
          component: <ProfesoresJunior />,
        },
      ],
    },
    {
      name: `${t('galamianJunior:tab_requisitos')}`,
      features: [
        {
          component: <Requisitos />,
        },
      ],
    },
  ];
  return (
    <Layout
      title={t('layout:junior_title')}
      description={t('layout:junior_description')}
      keywords={t('layout:junior_keywords')}
    >
      <div className="relative pb-6 bg-white lg:pb-24">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            type: 'fade',
            ease: 'easeIn',
          }}
          aria-hidden="true"
          className="relative"
        >
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653713701/Galamian/Galamian%20Junior/teachers_ipnvcp.jpg"
            alt="Jesús Reina"
            className="relative object-cover object-center w-full h-96"
            width={1920}
            height={724}
            layout="responsive"
            objectFit="cover"
            objectPosition="top"
            unoptimized={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </motion.div>

        <div className="relative max-w-xl px-4 py-6 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-4xl font-semibold leading-8 tracking-tight text-center text-neutral-900 sm:text-5xl lg:text-6xl">
            Galamian <span className="font-bold text-gold-600">Junior</span>
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-center text-neutral-600">
            {t('galamianJunior:subtitle_part_1')} {new Date().getFullYear()}/
            {new Date().getFullYear() + 1} {t('galamianJunior:subtitle_part_2')}
          </p>
        </div>
        {/* Attention! */}
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="p-4 mt-10 bg-yellow-50">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationIcon
                    className="w-5 h-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-semibold tracking-tight text-yellow-800">
                    {t('galamianJunior:atencion_title')}
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      {t('galamianJunior:atencion_text_part_1')}{' '}
                      <span className="font-bold">
                        {t('galamianJunior:atencion_text_part_2')}{' '}
                        {new Date().getFullYear()}{' '}
                      </span>
                      {t('galamianJunior:atencion_text_part_3')}{' '}
                      <span className="font-bold">
                        {t('galamianJunior:atencion_text_part_4')}{' '}
                        {new Date().getFullYear()}
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          aria-labelledby="features-heading"
          className="py-4 mx-auto max-w-7xl sm:py-8 sm:px-2 lg:px-8"
        >
          <div className="max-w-2xl px-4 mx-auto lg:px-0 lg:max-w-none">
            <Tab.Group as="div" className="mt-4">
              <div className="flex -mx-4 overflow-x-auto sm:mx-0">
                <div className="flex-auto px-4 border-b border-neutral-200 sm:px-0">
                  <Tab.List className="flex justify-between w-full -mb-px lg:justify-evenly">
                    {tabs.map((tab) => (
                      <Tab
                        key={tab.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'border-gold-500 text-gold-600 focus:outline-none focus:ring-0 focus:ring-transparent'
                              : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300 focus:outline-none focus:ring-0',
                            'whitespace-nowrap py-6 border-b-2 font-semibold text-base tracking-tight'
                          )
                        }
                      >
                        {tab.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
              </div>

              <Tab.Panels as={Fragment}>
                {tabs.map((tab) => (
                  <Tab.Panel key={tab.name}>
                    {tab.features.map((feature) => (
                      <div key={feature.name}>
                        <div>{feature.component}</div>
                      </div>
                    ))}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GalamianJunior;
