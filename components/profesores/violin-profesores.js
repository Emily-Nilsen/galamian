import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CameraIcon } from '@heroicons/react/solid';
import { XIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ViolinProfesores() {
  const { t } = useTranslation();

  const people = [
    {
      id: `/#jesus`,
      name: `${t('professors:jesus_name')}`,
      role: `${t('professors:jesus_role')}`,
      imageUrl: `${t('professors:jesus_image')}`,
      instrument: `${t('professors:jesus_instrument')}`,
      sentence_01: `${t('professors:jesus_para_1')}`,
      sentence_02: `${t('professors:jesus_para_2')}`,
      sentence_03: `${t('professors:jesus_para_3')}`,
      website: `${t('professors:jesus_website')}`,
      href: `${t('professors:jesus_href')}`,
    },
    {
      id: `/#anna`,
      name: `${t('professors:anna_name')}`,
      role: `${t('professors:anna_role')}`,
      imageUrl: `${t('professors:anna_image')}`,
      instrument: `${t('professors:anna_instrument')}`,
      sentence_01: `${t('professors:anna_para_1')}`,
      sentence_02: `${t('professors:anna_para_2')}`,
      sentence_03: `${t('professors:anna_para_3')}`,
      website: `${t('professors:anna_website')}`,
      href: `${t('professors:anna_href')}`,
    },
    {
      name: `${t('professors:laura_name')}`,
      role: `${t('professors:laura_role')}`,
      imageUrl: `${t('professors:laura_image')}`,
      instrument: `${t('professors:laura_instrument')}`,
      sentence_01: `${t('professors:laura_para_1')}`,
      sentence_02: `${t('professors:laura_para_2')}`,
      sentence_03: `${t('professors:laura_para_3')}`,
    },
    {
      name: `${t('professors:alfredo_name')}`,
      role: `${t('professors:alfredo_role')}`,
      imageUrl: `${t('professors:alfredo_image')}`,
      instrument: `${t('professors:alfredo_instrument')}`,
      sentence_01: `${t('professors:alfredo_para_1')}`,
      sentence_02: `${t('professors:alfredo_para_2')}`,
      sentence_03: `${t('professors:alfredo_para_3')}`,
      website: `${t('professors:alfredo_website')}`,
      href: `${t('professors:alfredo_href')}`,
    },
    {
      name: `${t('professors:grigory_name')}`,
      role: `${t('professors:grigory_role')}`,
      imageUrl: `${t('professors:grigory_image')}`,
      instrument: `${t('professors:grigory_instrument')}`,
      sentence_01: `${t('professors:grigory_para_1')}`,
      sentence_02: `${t('professors:grigory_para_2')}`,
      sentence_03: `${t('professors:grigory_para_3')}`,
      sentence_04: `${t('professors:grigory_para_4')}`,
      website: `${t('professors:grigory_website')}`,
      href: `${t('professors:grigory_href')}`,
    },
    {
      name: `${t('professors:alexander_name')}`,
      role: `${t('professors:alexander_role')}`,
      imageUrl: `${t('professors:alexander_image')}`,
      instrument: `${t('professors:alexander_instrument')}`,
      sentence_01: `${t('professors:alexander_para_1')}`,
      sentence_02: `${t('professors:alexander_para_2')}`,
      sentence_03: `${t('professors:alexander_para_3')}`,
      sentence_04: `${t('professors:alexander_para_4')}`,
    },
    {
      name: `${t('professors:salvador_name')}`,
      role: `${t('professors:salvador_role')}`,
      imageUrl: `${t('professors:salvador_image')}`,
      instrument: `${t('professors:salvador_instrument')}`,
      instrument: `${t('professors:salvador_instrument')}`,
      sentence_01: `${t('professors:salvador_para_1')}`,
      sentence_02: `${t('professors:salvador_para_2')}`,
      sentence_03: `${t('professors:salvador_para_3')}`,
    },
    {
      name: `${t('professors:koh_name')}`,
      role: `${t('professors:koh_role')}`,
      imageUrl: `${t('professors:koh_image')}`,
      instrument: `${t('professors:koh_instrument')}`,
      sentence_01: `${t('professors:koh_para_1')}`,
      sentence_02: `${t('professors:koh_para_2')}`,
      sentence_03: `${t('professors:koh_para_3')}`,
    },
    {
      name: `${t('professors:molly_name')}`,
      role: `${t('professors:molly_role')}`,
      imageUrl: `${t('professors:molly_image')}`,
      instrument: `${t('professors:molly_instrument')}`,
      sentence_01: `${t('professors:molly_para_1')}`,
      sentence_02: `${t('professors:molly_para_2')}`,
      sentence_03: `${t('professors:molly_para_3')}`,
      website: `${t('professors:molly_website')}`,
      href: `${t('professors:molly_href')}`,
    },
    {
      name: `${t('professors:jordan_name')}`,
      role: `${t('professors:jordan_role')}`,
      imageUrl: `${t('professors:jordan_image')}`,
      instrument: `${t('professors:jordan_instrument')}`,
      sentence_01: `${t('professors:jordan_para_1')}`,
      sentence_02: `${t('professors:jordan_para_2')}`,
      sentence_03: `${t('professors:jordan_para_3')}`,
      sentence_04: `${t('professors:jordan_para_4')}`,
    },
    {
      name: `${t('professors:joaquin_name')}`,
      role: `${t('professors:joaquin_role')}`,
      imageUrl: `${t('professors:joaquin_image')}`,
      instrument: `${t('professors:joaquin_instrument')}`,
      sentence_01: `${t('professors:joaquin_para_1')}`,
      sentence_02: `${t('professors:joaquin_para_2')}`,
      sentence_03: `${t('professors:joaquin_para_3')}`,
    },
  ];

  return (
    <div className="relative pt-4 pb-16 bg-white sm:pb-24">
      <div className="py-6 mx-auto max-w-7xl lg:py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-gold-600 sm:text-4xl">
              {t('profesores:study_violin')}
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
              {people.map((person) => (
                <li key={person.name}>
                  <div
                    id={person.id}
                    className="flex items-center space-x-4 transition duration-200 ease-in-out rounded-l-full cursor-pointer lg:space-x-6 hover:bg-neutral-50"
                  >
                    <div className="relative w-16 h-16 lg:w-20 lg:h-20">
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
                                          <div className="object-cover object-center overflow-hidden shadow-none">
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
                                        <h3 className="pt-4 text-lg font-semibold tracking-tight transition duration-300 ease-in-out text-gold-600 hover:text-neutral-900 group">
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
