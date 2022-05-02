import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CameraIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProfesoresJunior() {
  const { t } = useTranslation();

  const people = [
    {
      name: 'Laura Romero',
      role: `${t('common:laura_role')}`,
      imageUrl: '/static/galamian-junior/laura.jpg',
      bio_01: `${t('common:laura_para_1')}`,
      bio_02: `${t('common:laura_para_2')}`,
      bio_03: `${t('common:laura_para_3')}`,
    },
    {
      name: 'Irene Ortega',
      role: `${t('common:irene_role')}`,
      imageUrl: '/static/galamian-junior/irene.jpg',
      bio_01: `${t('common:irene_para_1')}`,
      bio_02: `${t('common:irene_para_2')}`,
      bio_03: `${t('common:irene_para_3')}`,
    },
    {
      name: 'Jesús Reina',
      role: `${t('common:jesus_role')}`,
      imageUrl: '/static/galamian-junior/jesus.jpg',
      bio_01: `${t('common:jesus_para_1')}`,
      bio_02: `${t('common:jesus_para_1')}`,
      bio_03: `${t('common:jesus_para_1')}`,
      website: `${t('common:jesus_website')}`,
      href: `${t('common:jesus_href')}`,
    },
    {
      name: 'Anna Nilsen',
      role: `${t('common:anna_role')}`,
      imageUrl: '/static/galamian-junior/anna.jpg',
      bio_01: `${t('common:anna_para_1')}`,
      bio_02: `${t('common:anna_para_2')}`,
      bio_03: `${t('common:anna_para_3')}`,
      website: `${t('common:anna_website')}`,
      href: `${t('common:anna_href')}`,
    },
    {
      name: 'Natalia Kuchaeva',
      role: `${t('common:natalia_role')}`,
      imageUrl: '/static/galamian-junior/natalia.jpg',
      bio_01: `${t('common:natalia_para_1')}`,
      bio_02: `${t('common:natalia_para_2')}`,
      bio_03: `${t('common:natalia_para_3')}`,
    },
    {
      name: 'Vicente Chuliá',
      role: `${t('common:vicente_role')}`,
      imageUrl: '/static/galamian-junior/vicente.jpg',
      bio_01: `${t('common:vicente_para_1')}`,
      bio_02: `${t('common:vicente_para_2')}`,
      bio_03: `${t('common:vicente_para_3')}`,
    },
    {
      name: 'Jose Andrés Fernández',
      role: `${t('common:jose_role')}`,
      imageUrl: '/static/galamian-junior/jose-camacho.jpg',
      bio_01: `${t('common:jose_para_1')}`,
      bio_02: `${t('common:jose_para_2')}`,
      bio_03: `${t('common:jose_para_3')}`,
    },
  ];

  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="max-w-3xl mx-auto space-y-5 text-center sm:mx-auto sm:space-y-4">
            <h2 className="leading-6 tracking-wide uppercase text-neutral-900">
              {t('galamianJunior:profesores_subtitle')}
            </h2>
            <h2 className="text-3xl tracking-wide sm:text-4xl text-neutral-900">
              {t('galamianJunior:profesores_title')}{' '}
              <span className="text-gold-600">Junior</span>
            </h2>
            <p className="text-lg text-neutral-500">
              {t('galamianJunior:profesores_text')}
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  <div className="relative w-40 h-40 mx-auto rounded-full xl:w-56 xl:h-56">
                    <Image
                      className="rounded-full"
                      width={500}
                      height={500}
                      src={person.imageUrl}
                      alt={person.name}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>

                  <div className="relative space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6 text-neutral-900">
                      <Menu as="div">
                        <div className="transition duration-200 ease-in-out hover:bg-neutral-50">
                          <Menu.Button>
                            <h3>{person.name}</h3>
                            <p className="text-gold-600">{person.role}</p>
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
                          <Menu.Items className="fixed top-0 left-0 z-20 w-full h-full overflow-x-hidden text-left origin-top-left bg-white focus:outline-none">
                            <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                              <div className="absolute top-0 bottom-0 hidden w-screen lg:block bg-neutral-50 left-3/4" />
                              <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h3 className="text-base tracking-wide text-neutral-900">
                                      {person.instrument}
                                    </h3>
                                    <h2 className="mt-2 text-3xl leading-8 tracking-wide text-gold-600 sm:text-4xl">
                                      {person.name}
                                    </h2>
                                  </div>
                                  <Menu.Item>
                                    <div className="absolute cursor-pointer right-6 top-6">
                                      <XIcon
                                        className="w-6 h-6 transition duration-200 ease-in-out text-neutral-400 hover:text-neutral-900"
                                        aria-hidden="true"
                                      />
                                    </div>
                                  </Menu.Item>
                                </div>
                              </div>
                              <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                                <div className="relative lg:row-start-1 lg:col-start-2">
                                  <svg
                                    className="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
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
                                  <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
                                    <figure>
                                      <div className="aspect-w-12 aspect-h-10 lg:aspect-none">
                                        <div className="object-cover object-center overflow-hidden shadow-none">
                                          <Image
                                            src={person.imageUrl}
                                            alt={person.name}
                                            width={962}
                                            height={802}
                                            layout="responsive"
                                            objectFit="cover"
                                            objectPosition="center"
                                          />
                                        </div>
                                      </div>
                                      {/* <figcaption className="flex mt-3 text-sm text-neutral-500">
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
                                  <div className="mx-auto text-base max-w-prose lg:max-w-none">
                                    <p className="text-lg text-neutral-500">
                                      {person.bio_01}
                                    </p>
                                  </div>
                                  <div className="mx-auto mt-5 prose prose-gold text-neutral-500 lg:max-w-none lg:row-start-1 lg:col-start-1">
                                    <p>{person.bio_02}</p>
                                    <p>{person.bio_03}</p>
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
                                      <p className="pt-4 text-base transition duration-200 ease-in-out cursor-pointer text-gold-600 hover:text-neutral-900">
                                        {t('common:button_cerrar')}{' '}
                                        <span aria-hidden="true">
                                          <XIcon
                                            className="inline-block w-4 h-4"
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
  );
}
