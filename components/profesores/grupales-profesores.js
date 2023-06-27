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

export default function GrupalesProfesores() {
  const { t } = useTranslation();

  const people = [
    {
      name: `${t('professors:jesus_name')}`,
      role: `${t('professors:jesus_chamber_role')}`,
      imageUrl: `${t('professors:jesus_image')}`,
      instrument: `${t('professors:jesus_instrument')}`,
      sentence_01: `${t('professors:jesus_para_1')}`,
      sentence_02: `${t('professors:jesus_para_2')}`,
      sentence_03: `${t('professors:jesus_para_3')}`,
      website: `${t('professors:jesus_website')}`,
      href: `${t('professors:jesus_href')}`,
    },
    {
      name: `${t('professors:anna_name')}`,
      role: `${t('professors:anna_chamber_role')}`,
      imageUrl: `${t('professors:anna_image')}`,
      instrument: `${t('professors:anna_instrument')}`,
      sentence_01: `${t('professors:anna_para_1')}`,
      sentence_02: `${t('professors:anna_para_2')}`,
      sentence_03: `${t('professors:anna_para_3')}`,
      website: `${t('professors:anna_website')}`,
      href: `${t('professors:anna_href')}`,
    },
    {
      name: `${t('professors:pablo_name')}`,
      role: `${t('professors:pablo_chamber_role')}`,
      imageUrl: `${t('professors:pablo_image')}`,
      instrument: `${t('professors:pablo_instrument')}`,
      sentence_01: `${t('professors:pablo_para_1')}`,
      sentence_02: `${t('professors:pablo_para_2')}`,
      sentence_03: `${t('professors:pablo_para_3')}`,
      website: `${t('professors:pablo_website')}`,
      href: `${t('professors:pablo_href')}`,
    },
    // {
    //   name: `${t('professors:alberto_name')}`,
    //   role: `${t('professors:alberto_chamber_role')}`,
    //   imageUrl: `${t('professors:alberto_image')}`,
    //   instrument: `${t('professors:alberto_instrument')}`,
    //   sentence_01: `${t('professors:alberto_para_1')}`,
    //   sentence_02: `${t('professors:alberto_para_2')}`,
    //   sentence_03: `${t('professors:alberto_para_3')}`,
    //   website: `${t('professors:alberto_website')}`,
    //   href: `${t('professors:alberto_href')}`,
    // },
    {
      name: `${t('professors:velez_name')}`,
      role: `${t('professors:velez_chamber_role')}`,
      imageUrl: `${t('professors:velez_image')}`,
      instrument: `${t('professors:velez_instrument')}`,
      sentence_01: `${t('professors:velez_para_1')}`,
      sentence_02: `${t('professors:velez_para_2')}`,
      sentence_03: `${t('professors:velez_para_3')}`,
      website: `${t('professors:velez_website')}`,
      href: `${t('professors:velez_href')}`,
    },
    {
      name: `${t('professors:misha_name')}`,
      role: `${t('professors:misha_chamber_role')}`,
      imageUrl: `${t('professors:misha_image')}`,
      instrument: `${t('professors:misha_instrument')}`,
      sentence_01: `${t('professors:misha_para_1')}`,
      sentence_02: `${t('professors:misha_para_2')}`,
      sentence_03: `${t('professors:misha_para_3')}`,
      website: `${t('professors:misha_website')}`,
      href: `${t('professors:misha_href')}`,
    },
    {
      name: `${t('professors:alexander_name')}`,
      role: `${t('professors:alexander_chamber_role')}`,
      imageUrl: `${t('professors:alexander_image')}`,
      instrument: `${t('professors:alexander_instrument')}`,
      sentence_01: `${t('professors:alexander_para_1')}`,
      sentence_02: `${t('professors:alexander_para_2')}`,
      sentence_03: `${t('professors:alexander_para_3')}`,
      sentence_04: `${t('professors:alexander_para_4')}`,
    },
    {
      name: `${t('professors:petrova_name')}`,
      role: `${t('professors:petrova_chamber_role')}`,
      imageUrl: `${t('professors:petrova_image')}`,
      instrument: `${t('professors:petrova_instrument')}`,
      sentence_01: `${t('professors:petrova_para_1')}`,
      sentence_02: `${t('professors:petrova_para_2')}`,
      sentence_03: `${t('professors:petrova_para_3')}`,
      website: `${t('professors:petrova_website')}`,
      href: `${t('professors:petrova_href')}`,
    },
    {
      name: `${t('professors:josu_name')}`,
      role: `${t('professors:josu_chamber_role')}`,
      imageUrl: `${t('professors:josu_image')}`,
      instrument: `${t('professors:josu_instrument')}`,
      sentence_01: `${t('professors:josu_para_1')}`,
      sentence_02: `${t('professors:josu_para_2')}`,
      sentence_03: `${t('professors:josu_para_3')}`,
      website: `${t('professors:josu_website')}`,
      href: `${t('professors:josu_href')}`,
    },
    {
      name: `${t('professors:molly_name')}`,
      role: `${t('professors:molly_chamber_role')}`,
      imageUrl: `${t('professors:molly_image')}`,
      instrument: `${t('professors:molly_instrument')}`,
      sentence_01: `${t('professors:molly_para_1')}`,
      sentence_02: `${t('professors:molly_para_2')}`,
      sentence_03: `${t('professors:molly_para_3')}`,
      website: `${t('professors:molly_website')}`,
      href: `${t('professors:molly_href')}`,
    },
    {
      name: `${t('professors:oyvind_name')}`,
      role: `${t('professors:oyvind_chamber_role')}`,
      imageUrl: `${t('professors:oyvind_image')}`,
      instrument: `${t('professors:oyvind_instrument')}`,
      sentence_01: `${t('professors:oyvind_para_1')}`,
      sentence_02: `${t('professors:oyvind_para_2')}`,
      sentence_03: `${t('professors:oyvind_para_3')}`,
    },
  ];

  const conductors = [
    {
      name: `${t('professors:jose_name')}`,
      role: `${t('professors:jose_group_role')}`,
      imageUrl: `${t('professors:jose_image')}`,
      instrument: `${t('professors:jose_instrument')}`,
      sentence_01: `${t('professors:jose_para_1')}`,
      sentence_02: `${t('professors:jose_para_2')}`,
      sentence_03: `${t('professors:jose_para_3')}`,
    },
    {
      name: `${t('professors:grau_name')}`,
      role: `${t('professors:grau_group_role')}`,
      imageUrl: `${t('professors:grau_image')}`,
      instrument: `${t('professors:grau_instrument')}`,
      sentence_01: `${t('professors:grau_para_1')}`,
      sentence_02: `${t('professors:grau_para_2')}`,
      sentence_03: `${t('professors:grau_para_3')}`,
      sentence_04: `${t('professors:grau_para_4')}`,
      sentence_05: `${t('professors:grau_para_5')}`,
      website: `${t('professors:grau_website')}`,
      href: `${t('professors:grau_href')}`,
    },
    {
      name: `${t('professors:vicente_name')}`,
      role: `${t('professors:vicente_group_role')}`,
      imageUrl: `${t('professors:vicente_image')}`,
      instrument: `${t('professors:vicente_instrument')}`,
      sentence_01: `${t('professors:vicente_para_1')}`,
      sentence_02: `${t('professors:vicente_para_2')}`,
      sentence_03: `${t('professors:vicente_para_3')}`,
      website: `${t('professors:vicente_website')}`,
      href: `${t('professors:vicente_href')}`,
    },
  ];

  return (
    <section>
      {/* Chamber Musicians */}
      <div className="relative pt-4 pb-16 bg-white lg:pt-10 sm:pb-24">
        <div className="pt-6 pb-16 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gold-600 sm:text-4xl">
                {t('profesores:study_groups')}
              </h2>
              <p className="text-base text-neutral-600">
                {t('profesores:study_text')}
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
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
                        duration: 0.5,
                        delay: i * 0.2,
                        ease: 'easeInOut',
                      }}
                      className="flex items-center space-x-4 rounded-l-full lg:space-x-6 hover:bg-neutral-50"
                    >
                      <div className="relative w-16 h-16 lg:w-20 lg:h-20">
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
                      <div className="relative space-y-1 text-lg font-medium leading-6 text-neutral-900">
                        <div>
                          <Menu as="div">
                            <div>
                              <Menu.Button>
                                <div className="space-y-1 text-lg font-medium leading-6 tracking-tight text-left text-neutral-900 focus:outline-none focus:ring-0 ring-0 ring-transparent focus:ring-transparent">
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
                              <Menu.Items className="fixed top-0 left-0 z-20 w-full h-full overflow-x-hidden origin-top-left bg-white focus:outline-none">
                                <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                  <div className="absolute top-0 bottom-0 hidden w-screen lg:block bg-neutral-50 left-3/4" />
                                  <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                                    <div className="flex items-start justify-between">
                                      <div>
                                        <h3 className="text-base font-normal tracking-tight text-neutral-900">
                                          {person.instrument}
                                        </h3>
                                        <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gold-600 sm:text-4xl">
                                          {person.name}
                                        </h2>
                                      </div>
                                      <Menu.Item>
                                        <div className="absolute right-6 top-6">
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
                                          <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                            <motion.div
                                              whileInView={{ opacity: 1 }}
                                              initial={{ opacity: 0 }}
                                              transition={{
                                                duration: 0.6,
                                                type: 'fade',
                                                ease: 'easeIn',
                                              }}
                                              className="object-cover object-center overflow-hidden shadow-none"
                                            >
                                              <Image
                                                src={person.imageUrl}
                                                alt={person.name}
                                                width={1184}
                                                height={802}
                                                layout="responsive"
                                                objectFit="cover"
                                                objectPosition="center"
                                                unoptimized={true}
                                              />
                                            </motion.div>
                                          </div>
                                        </figure>
                                      </div>
                                    </div>
                                    <div className="mt-8 lg:mt-0">
                                      <div className="mx-auto text-base max-w-prose lg:max-w-none">
                                        <p className="text-lg font-light text-neutral-600">
                                          {person.sentence_01}
                                        </p>
                                      </div>
                                      <div className="mx-auto mt-5 font-light prose prose-gold text-neutral-600 lg:max-w-none lg:row-start-1 lg:col-start-1">
                                        <p>{person.sentence_02}</p>
                                        <p>{person.sentence_03}</p>
                                        <p>{person.sentence_04}</p>
                                        <p>{person.sentence_05}</p>
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

        {/* Conductors */}

        <div
          id="conductors"
          className="pt-16 pb-2 mx-auto border-t max-w-7xl border-neutral-200"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gold-600 sm:text-4xl">
                {t('profesores:conductors')}
              </h2>
              <p className="text-base text-neutral-600">
                {t('profesores:conductors_text')}
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
              >
                {conductors.map((person, i) => (
                  <li key={i}>
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 50,
                      }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.2,
                        ease: 'easeInOut',
                      }}
                      className="flex items-center space-x-4 rounded-l-full lg:space-x-6 hover:bg-neutral-50"
                    >
                      <div className="relative w-16 h-16 lg:w-20 lg:h-20">
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
                      <div className="relative space-y-1 text-lg font-medium leading-6 text-neutral-900">
                        <div>
                          <Menu as="div">
                            <div>
                              <Menu.Button>
                                <div className="space-y-1 text-lg font-medium leading-6 tracking-tight text-left text-neutral-900 focus:outline-none focus:ring-0 ring-0 ring-transparent focus:ring-transparent">
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
                              <Menu.Items className="fixed top-0 left-0 z-20 w-full h-full overflow-x-hidden origin-top-left bg-white focus:outline-none">
                                <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                  <div className="absolute top-0 bottom-0 hidden w-screen lg:block bg-neutral-50 left-3/4" />
                                  <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                                    <div className="flex items-start justify-between">
                                      <div>
                                        <h3 className="text-base font-normal tracking-tight text-neutral-900">
                                          {person.instrument}
                                        </h3>
                                        <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gold-600 sm:text-4xl">
                                          {person.name}
                                        </h2>
                                      </div>
                                      <Menu.Item>
                                        <div className="absolute right-6 top-6">
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
                                          <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                            <motion.div
                                              whileInView={{ opacity: 1 }}
                                              initial={{ opacity: 0 }}
                                              transition={{
                                                duration: 0.6,
                                                type: 'fade',
                                                ease: 'easeIn',
                                              }}
                                              className="object-cover object-center overflow-hidden shadow-none"
                                            >
                                              <Image
                                                src={person.imageUrl}
                                                alt={person.name}
                                                width={1184}
                                                height={802}
                                                layout="responsive"
                                                objectFit="cover"
                                                objectPosition="center"
                                                unoptimized={true}
                                              />
                                            </motion.div>
                                          </div>
                                        </figure>
                                      </div>
                                    </div>
                                    <div className="mt-8 lg:mt-0">
                                      <div className="mx-auto text-base max-w-prose lg:max-w-none">
                                        <p className="text-lg font-light text-neutral-600">
                                          {person.sentence_01}
                                        </p>
                                      </div>
                                      <div className="mx-auto mt-5 font-light prose prose-gold text-neutral-600 lg:max-w-none lg:row-start-1 lg:col-start-1">
                                        <p>{person.sentence_02}</p>
                                        <p>{person.sentence_03}</p>
                                        <p>{person.sentence_04}</p>
                                        <p>{person.sentence_05}</p>
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
      </div>
    </section>
  );
}
