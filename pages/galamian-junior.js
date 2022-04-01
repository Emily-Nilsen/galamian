import EstudiarJunior from '../components/galamian-junior/estudiar';
import EstudioJunior from '../components/galamian-junior/estudio';
import ProfesoresJunior from '../components/galamian-junior/profesores';
import Requisitos from '../components/galamian-junior/requisitos';
import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { ExclamationIcon } from '@heroicons/react/solid';
import Image from 'next/image';

const tabs = [
  {
    name: 'Estudiar en la AIG',
    features: [
      {
        component: <EstudiarJunior />,
      },
    ],
  },
  {
    name: 'Estudio',
    features: [
      {
        component: <EstudioJunior />,
      },
    ],
  },
  {
    name: 'Profesores',
    features: [
      {
        component: <ProfesoresJunior />,
      },
    ],
  },
  {
    name: 'Requisitos',
    features: [
      {
        component: <Requisitos />,
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const GalamianJunior = () => {
  return (
    <div>
      <div className="relative bg-white pb-6 lg:pb-24">
        <div aria-hidden="true" className="relative">
          <Image
            src="/static/galamian-junior/teachers.jpg"
            alt="Jesús Reina"
            className="relative object-cover object-center w-full h-96"
            width={1920}
            height={724}
            layout="responsive"
            objectFit="cover"
            objectPosition="top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>

        <div className="py-6 relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-center text-3xl leading-8 tracking-wide text-neutral-900 sm:text-4xl">
            Galamian <span className="text-gold-600">Junior</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-neutral-500">
            Encuentra información sobre el curso {new Date().getFullYear()}/
            {new Date().getFullYear() + 1} para el Estudio Junior de violín y
            viola.
          </p>
        </div>
        {/* Attention! */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-yellow-50 p-4 mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Atención
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      Los alumnos que superen las audiciones convocadas para
                      junio de {new Date().getFullYear()} comenzarán a estudiar
                      en la AIG Junior a partir de septiembre de{' '}
                      {new Date().getFullYear()}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          aria-labelledby="features-heading"
          className="max-w-7xl mx-auto py-4 sm:py-8 sm:px-2 lg:px-8"
        >
          <div className="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
            <Tab.Group as="div" className="mt-4">
              <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                <div className="flex-auto px-4 border-b border-neutral-200 sm:px-0">
                  <Tab.List className="-mb-px flex justify-between lg:justify-evenly w-full">
                    {tabs.map((tab) => (
                      <Tab
                        key={tab.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'border-gold-500 text-gold-600 focus:outline-none focus:ring-0 focus:ring-transparent'
                              : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300 focus:outline-none focus:ring-0',
                            'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
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

export default GalamianJunior;
