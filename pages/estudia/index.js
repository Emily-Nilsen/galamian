import Estudiar from '../../components/estudio/estudiar';
import Audiciones from '../../components/estudio/audiciones';
import Inscripcion from '../../components/estudio/inscripcion';
import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { ExclamationIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';

const tabs = [
  {
    name: 'Estudiar en la AIG',
    features: [
      {
        component: <Estudiar />,
      },
    ],
  },
  {
    name: `Audiciones`,
    features: [
      {
        component: <Audiciones />,
      },
    ],
  },
  {
    name: 'Inscripción',
    features: [
      {
        component: <Inscripcion />,
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Estudia = () => {
  return (
    <div>
      <div className="relative bg-white pb-6 lg:pb-24">
        <div aria-hidden="true" className="relative">
          <Image
            src="/static/estudia/estudia.jpg"
            alt="Jesús Reina"
            className="relative object-cover object-center w-full h-96"
            width={1920}
            height={724}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>

        <div className="py-6 relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl text-center">
          <h2 className="font-medium text-neutral-900 tracking-wide">
            Estudia con los
          </h2>
          <h2 className="mt-2 text-3xl tracking-wide sm:text-4xl">
            Mejores <span className="text-gold-600">músicos</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-neutral-500">
            Cuando decides estudiar en la Academia Internacional Galamian, estás
            apostando por una educación musical de calidad, y emprendes el
            primer paso hacia la profesionalización de tu carrrera artística.
          </p>
          <div className="mt-10">
            <Link href="/estudia/#planesDeEstudios" passHref>
              <a className="text-base font-medium text-gold-600">
                {' '}
                Ver planes de estudios {new Date().getFullYear()}/
                {new Date().getFullYear() + 1}{' '}
                <span aria-hidden="true">&rarr;</span>{' '}
              </a>
            </Link>
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

export default Estudia;
