import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CameraIcon } from '@heroicons/react/solid';
import { XIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProfesoresJunior() {
  const { t } = useTranslation();

  const people = [
    {
      name: `${t('professors:laura_name')}`,
      role: `${t('professors:laura_role')}`,
      imageUrl: `${t('professors:laura_image')}`,
      bio_01: `${t('professors:laura_para_1')}`,
      bio_02: `${t('professors:laura_para_2')}`,
      bio_03: `${t('professors:laura_para_3')}`,
    },
    // {
    //   name: 'Irene Ortega',
    //   role: `${t('professors:irene_role')}`,
    //   imageUrl: '/static/galamian-junior/irene.jpg',
    //   bio_01: `${t('professors:irene_para_1')}`,
    //   bio_02: `${t('professors:irene_para_2')}`,
    //   bio_03: `${t('professors:irene_para_3')}`,
    // },
    {
      name: `${t('professors:jesus_name')}`,
      role: `${t('professors:jesus_role')}`,
      imageUrl: `${t('professors:jesus_image')}`,
      bio_01: `${t('professors:jesus_para_1')}`,
      bio_02: `${t('professors:jesus_para_1')}`,
      bio_03: `${t('professors:jesus_para_1')}`,
      website: `${t('professors:jesus_website')}`,
      href: `${t('professors:jesus_href')}`,
    },
    {
      name: `${t('professors:anna_name')}`,
      role: `${t('professors:anna_role')}`,
      imageUrl: `${t('professors:anna_image')}`,
      bio_01: `${t('professors:anna_para_1')}`,
      bio_02: `${t('professors:anna_para_2')}`,
      bio_03: `${t('professors:anna_para_3')}`,
      website: `${t('professors:anna_website')}`,
      href: `${t('professors:anna_href')}`,
    },
    {
      name: `${t('professors:natalia_name')}`,
      role: `${t('professors:natalia_role')}`,
      imageUrl: `${t('professors:natalia_image')}`,
      bio_01: `${t('professors:natalia_para_1')}`,
      bio_02: `${t('professors:natalia_para_2')}`,
      bio_03: `${t('professors:natalia_para_3')}`,
    },
    {
      name: `${t('professors:vicente_name')}`,
      role: `${t('professors:vicente_role')}`,
      imageUrl: `${t('professors:vicente_image')}`,
      bio_01: `${t('professors:vicente_para_1')}`,
      bio_02: `${t('professors:vicente_para_2')}`,
      bio_03: `${t('professors:vicente_para_3')}`,
      website: `${t('professors:vicente_website')}`,
      href: `${t('professors:vicente_href')}`,
    },
    {
      name: `${t('professors:jose_name')}`,
      role: `${t('professors:jose_role')}`,
      imageUrl: `${t('professors:jose_image')}`,
      bio_01: `${t('professors:jose_para_1')}`,
      bio_02: `${t('professors:jose_para_2')}`,
      bio_03: `${t('professors:jose_para_3')}`,
    },
  ];

  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="max-w-3xl mx-auto space-y-5 text-center sm:mx-auto sm:space-y-4">
            <h2 className="font-medium leading-6 tracking-tight uppercase text-neutral-900">
              {t('galamianJunior:profesores_subtitle')}
            </h2>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-neutral-900">
              {t('galamianJunior:profesores_title')}{' '}
              <span className="font-bold text-gold-600">Junior</span>
            </h2>
            <p className="text-lg text-neutral-600">
              {t('galamianJunior:profesores_text')}
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
          >
            {people.map((person, i) => (
              <li key={i}>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.3,
                    ease: 'easeInOut',
                  }}
                  className="space-y-6"
                >
                  <div className="relative w-40 h-40 mx-auto rounded-full xl:w-56 xl:h-56">
                    <Image
                      className="rounded-full"
                      unoptimized={true}
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
                        <div className="transition duration-300 ease-in-out hover:bg-neutral-50">
                          <Menu.Button>
                            <h3 className="tracking-tight">{person.name}</h3>
                            <p className="tracking-tight text-gold-600">
                              {person.role}
                            </p>
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
                                    <h3 className="text-base font-medium tracking-tight text-neutral-900">
                                      {person.instrument}
                                    </h3>
                                    <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gold-600 sm:text-4xl">
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
                                        <motion.div
                                          whileInView={{ opacity: 1 }}
                                          initial={{ opacity: 0 }}
                                          transition={{
                                            duration: 0.8,
                                            type: 'fade',
                                            ease: 'easeIn',
                                          }}
                                          className="object-cover object-center overflow-hidden shadow-none"
                                        >
                                          <Image
                                            src={person.imageUrl}
                                            alt={person.name}
                                            width={962}
                                            height={802}
                                            layout="responsive"
                                            objectFit="cover"
                                            objectPosition="center"
                                            unoptimized={true}
                                          />
                                        </motion.div>
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
                                    <p className="text-lg font-light text-neutral-600">
                                      {person.bio_01}
                                    </p>
                                  </div>
                                  <div className="mx-auto mt-5 font-light prose prose-gold text-neutral-600 lg:max-w-none lg:row-start-1 lg:col-start-1">
                                    <p>{person.bio_02}</p>
                                    <p>{person.bio_03}</p>
                                    <div className="mt-6">
                                      <a
                                        href={person.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xl font-semibold leading-7 tracking-tight no-underline transition duration-200 ease-in-out text-neutral-500 hover:text-gold-600"
                                      >
                                        {person.website}
                                      </a>
                                    </div>

                                    <Menu.Item>
                                      <h3 className="pt-4 text-lg font-semibold tracking-tight transition duration-300 ease-in-out cursor-pointer text-gold-600 hover:text-neutral-900 group">
                                        {t('common:button_back')}{' '}
                                        <span aria-hidden="true">
                                          <ArrowNarrowRightIcon
                                            className="inline-block w-5 h-5 transition duration-300 ease-in-out text-gold-600 group-hover:text-neutral-900"
                                            aria-hidden="true"
                                          />
                                        </span>{' '}
                                      </h3>
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
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
