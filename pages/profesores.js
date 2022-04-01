import ViolinProfesores from '../components/profesores/violin-profesores';
import VioloncheloProfesores from '../components/profesores/violonchelo-profesores';
import VozProfesores from '../components/profesores/voz-profesores';
import PianoProfesores from '../components/profesores/piano-profesores';
import GrupalesProfesores from '../components/profesores/grupales-profesores';
import { Fragment } from 'react';
import { Tab } from '@headlessui/react';

const tabs = [
  {
    name: 'Violín & Viola',
    features: [
      {
        component: <ViolinProfesores />,
      },
    ],
  },
  {
    name: 'Violonchelo',
    features: [
      {
        component: <VioloncheloProfesores />,
      },
    ],
  },
  {
    name: 'Voz',
    features: [
      {
        component: <VozProfesores />,
      },
    ],
  },
  {
    name: 'Piano',
    features: [
      {
        component: <PianoProfesores />,
      },
    ],
  },
  {
    name: 'Asignaturas Grupales',
    features: [
      {
        component: <GrupalesProfesores />,
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Profesores = () => {
  return (
    <div>
      <div className="relative bg-white pt-16 sm:pt-24">
        <div className="pb-0 lg:pb-4 relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-center text-3xl leading-8 tracking-wide text-neutral-900 sm:text-4xl">
            Un equipo <span className="text-gold-600">excepcional</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-neutral-500">
            La Academia Internacional Galamian cuenta con un equipo de pedagogos
            del mayor prestigio internacional, cuya convergencia tan sólo es
            posible en este centro educativo.
          </p>
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
                              ? 'border-gold-500 text-gold-600 focus:outline-none focus:ring-0'
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

export default Profesores;
