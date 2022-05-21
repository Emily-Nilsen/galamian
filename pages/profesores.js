import ViolinProfesores from '../components/profesores/violin-profesores';
import VioloncheloProfesores from '../components/profesores/violonchelo-profesores';
import VozProfesores from '../components/profesores/voz-profesores';
import PianoProfesores from '../components/profesores/piano-profesores';
import GrupalesProfesores from '../components/profesores/grupales-profesores';
import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import useTranslation from 'next-translate/useTranslation';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Profesores = () => {
  const { t } = useTranslation();

  const tabs = [
    {
      name: `${t('profesores:tab_violin')}`,
      features: [
        {
          component: <ViolinProfesores />,
        },
      ],
    },
    {
      name: `${t('profesores:tab_piano')}`,
      features: [
        {
          component: <PianoProfesores />,
        },
      ],
    },
    {
      name: `${t('profesores:tab_cello')}`,
      features: [
        {
          component: <VioloncheloProfesores />,
        },
      ],
    },
    {
      name: `${t('profesores:tab_voice')}`,
      features: [
        {
          component: <VozProfesores />,
        },
      ],
    },
    {
      name: `${t('profesores:tab_groups')}`,
      features: [
        {
          component: <GrupalesProfesores />,
        },
      ],
    },
  ];
  return (
    <div>
      <div className="relative pt-16 bg-white sm:pt-24">
        <div className="relative max-w-xl px-4 pb-0 mx-auto lg:pb-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-3xl font-semibold leading-8 tracking-tight text-center text-neutral-900 sm:text-4xl">
            {t('profesores:title_1')}
            <span className="font-bold text-gold-600">
              {t('profesores:title_2')}
            </span>
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-center text-neutral-600">
            {t('profesores:subtitle')}
          </p>
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
                              ? 'border-gold-500 text-gold-600 focus:outline-none focus:ring-0'
                              : 'border-transparent text-neutral-500 hover:text-neutral-900 hover:border-neutral-400 focus:outline-none focus:ring-0',
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
    </div>
  );
};

export default Profesores;
