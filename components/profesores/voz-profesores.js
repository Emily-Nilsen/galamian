import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CameraIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function VozProfesores() {
  const { t } = useTranslation();

  const people = [
    {
      name: 'Nils Georg Nilsen',
      role: `${t('common:nils_role')}`,
      imageUrl: '/static/profesores/nils-nilsen.webp',
      instrument: `${t('common:nils_instrument')}`,
      sentence_01: `${t('common:nils_para_1')}`,
      sentence_02: `${t('common:nils_para_2')}`,
      sentence_03: `${t('common:nils_para_3')}`,
      website: `${t('common:nils_website')}`,
      href: `${t('common:nils_href')}`,
    },
    {
      name: 'Sergio Montero',
      role: `${t('common:sergio_role')}`,
      imageUrl: '/static/profesores/sergio-montero.webp',
      instrument: `${t('common:sergio_instrument')}`,
      sentence_01: `${t('common:sergio_para_1')}`,
      sentence_02: `${t('common:sergio_para_2')}`,
      sentence_03: `${t('common:sergio_para_3')}`,
      website: `${t('common:sergio_website')}`,
      href: `${t('common:sergio_href')}`,
    },
    {
      name: 'Mariola Cantarero',
      role: `${t('common:mariola_role')}`,
      imageUrl: '/static/profesores/mariola-cantarero.webp',
      instrument: `${t('common:mariola_instrument')}`,
      sentence_01: `${t('common:mariola_para_1')}`,
      sentence_02: `${t('common:mariola_para_2')}`,
      sentence_03: `${t('common:mariola_para_3')}`,
      website: `${t('common:mariola_website')}`,
      href: `${t('common:mariola_href')}`,
    },
    {
      name: 'Joel Prieto',
      role: 'Profesor Invitado',
      imageUrl: '/static/profesores/joel-prieto.jpg',
      instrument: 'Voz',
      sentence_01: ``,
      sentence_02: ``,
      sentence_03: ``,
      sentence_04: ``,
    },
    {
      name: 'Francisco Araiza',
      role: 'Profesor Invitado',
      imageUrl: '/static/profesores/francisco-araiza.jpg',
      instrument: 'Voz',
      sentence_01: ``,
      sentence_02: ``,
      sentence_03: ``,
      sentence_04: ``,
    },
  ];

  return (
    <div className="relative bg-white pt-4 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl py-6 lg:py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl tracking-wide text-gold-600 sm:text-4xl">
              {t('profesores:tab_voice')}
            </h2>
            <p className="text-base text-neutral-500">
              {t('profesores:study_text')}
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6 hover:bg-neutral-50 transition duration-200 ease-in-out cursor-pointer rounded-l-full">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 relative">
                      <Image
                        className="rounded-full"
                        width={1000}
                        height={1000}
                        src={person.imageUrl}
                        alt={person.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className="font-medium text-lg leading-6 space-y-1 text-neutral-900 relative">
                      <div>
                        <Menu as="div">
                          <div>
                            <Menu.Button>
                              <div className="font-medium text-lg leading-6 space-y-1 text-neutral-900 text-left">
                                <h3>{person.name}</h3>
                                <p className="text-gold-600">{person.role}</p>
                              </div>
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-left fixed z-20 left-0 top-0 h-full w-full overflow-x-hidden bg-white focus:outline-none">
                              <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                                <div className="hidden lg:block bg-neutral-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                                <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <h3 className="text-base text-neutral-900 tracking-wide">
                                        {person.instrument}
                                      </h3>
                                      <h2 className="mt-2 text-3xl leading-8 tracking-wide text-gold-600 sm:text-4xl">
                                        {person.name}
                                      </h2>
                                    </div>
                                    <Menu.Item>
                                      <div className="absolute right-6 top-6">
                                        <XIcon
                                          className="h-6 w-6 text-neutral-400 hover:text-neutral-900 transition duration-200 ease-in-out"
                                          aria-hidden="true"
                                        />
                                      </div>
                                    </Menu.Item>
                                  </div>
                                </div>
                                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                                  <div className="relative lg:row-start-1 lg:col-start-2">
                                    <svg
                                      className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                                      width={404}
                                      height={384}
                                      fill="none"
                                      viewBox="0 0 404 384"
                                      aria-hidden="true"
                                    >
                                      <defs>
                                        <pattern
                                          id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                          x={0}
                                          y={0}
                                          width={20}
                                          height={20}
                                          patternUnits="userSpaceOnUse"
                                        >
                                          <rect
                                            x={0}
                                            y={0}
                                            width={2}
                                            height={4}
                                            className="text-neutral-200"
                                            fill="currentColor"
                                          />
                                        </pattern>
                                      </defs>
                                      <rect
                                        width={404}
                                        height={384}
                                        fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                                      />
                                    </svg>
                                    <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                                      <figure>
                                        <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                          <div className="shadow-none object-cover object-center overflow-hidden">
                                            <Image
                                              src={person.imageUrl}
                                              alt={person.name}
                                              width={1184}
                                              height={802}
                                              layout="responsive"
                                              objectFit="cover"
                                              objectPosition="center"
                                            />
                                          </div>
                                        </div>
                                        {/* <figcaption className="mt-3 flex text-sm text-neutral-500">
                                          <CameraIcon
                                            className="flex-none w-5 h-5 text-neutral-400"
                                            aria-hidden="true"
                                          />
                                          <span className="ml-2">
                                            {person.name}
                                          </span>
                                        </figcaption> */}
                                      </figure>
                                    </div>
                                  </div>
                                  <div className="mt-8 lg:mt-0">
                                    <div className="text-base max-w-prose mx-auto lg:max-w-none">
                                      <p className="text-lg text-neutral-500">
                                        {person.sentence_01}
                                      </p>
                                    </div>
                                    <div className="mt-5 prose prose-gold text-neutral-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                                      <p>{person.sentence_02}</p>
                                      <p>{person.sentence_03}</p>
                                      <p>{person.sentence_04}</p>
                                      <div>
                                        <a
                                          href={person.href}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="text-base leading-7 text-neutral-600 font-semibold hover:text-gold-600 transition duration-200 ease-in-out no-underline"
                                        >
                                          {person.website}
                                        </a>
                                      </div>

                                      <Menu.Item>
                                        <p className="text-gold-600 text-base pt-4 hover:text-neutral-900 transition duration-200 ease-in-out">
                                          {t('common:button_cerrar')}{' '}
                                          <span aria-hidden="true">
                                            <XIcon
                                              className="h-4 w-4 inline-block"
                                              aria-hidden="true"
                                            />
                                          </span>{' '}
                                        </p>
                                      </Menu.Item>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
