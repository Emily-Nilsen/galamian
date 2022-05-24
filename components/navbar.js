import Image from 'next/image';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  BellIcon,
  AcademicCapIcon,
  ClipboardListIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  LibraryIcon,
  PhoneIcon,
  PencilAltIcon,
  UserGroupIcon,
  XIcon,
  MailIcon,
  UserCircleIcon,
  CalendarIcon,
  ExternalLinkIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import Language from './language';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { t } = useTranslation();

  // Academy
  const academia = [
    {
      name: `${t('common:navbar_link_1_title_1_1')}`,
      href: '/academia',
      icon: InformationCircleIcon,
    },
    {
      name: `${t('common:navbar_link_1_title_1_2')}`,
      href: '/academia/#fundadores',
      icon: GlobeAltIcon,
    },
    {
      name: `${t('common:navbar_link_1_title_1_3')}`,
      href: '/academia/#salaUnicaja',
      icon: LibraryIcon,
    },
    {
      name: `${t('common:navbar_link_1_title_1_4')}`,
      href: '/contacto',
      icon: MailIcon,
    },
  ];
  const recursos = [
    {
      name: `${t('common:navbar_link_1_title_2_1')}`,
      href: '/#noticias',
      icon: BellIcon,
    },
    {
      name: `${t('common:navbar_link_1_title_2_3')}`,
      href: '/bulletin/',
      icon: NewspaperIcon,
    },
    {
      name: `${t('common:joag')}`,
      href: '/joag',
      icon: ExternalLinkIcon,
    },
  ];
  const blogPosts = [
    {
      id: 1,
      name: `${t('common:blogpost_name_1')}`,
      href: '/bulletin',
      preview: `${t('common:blogpost_preview_1')}`,
      imageUrl: '/static/eventos.jpg',
    },
    // {
    //   id: 2,
    //   name: 'Joaquín Riquelme, recital de viola',
    //   href: '/bulletin',
    //   preview:
    //     'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    //   imageUrl: '/static/joaquin.jpg',
    // },
  ];

  // Study
  const estudiar = [
    {
      name: `${t('common:estudiar_name_1')}`,
      description: `${t(
        'common:estudiar_description_1_part_1'
      )} ${new Date().getFullYear()}/${new Date().getFullYear() + 1}${t(
        'common:estudiar_description_1_part_2'
      )}`,
      href: '/estudia',
      icon: AcademicCapIcon,
    },
    {
      name: `${t('common:estudiar_name_2')}`,
      description: `${t('common:estudiar_description_2_part_1')}`,
      href: '/estudios',
      icon: ClipboardListIcon,
    },
    {
      name: `${t('common:estudiar_name_3')}`,
      description: `${t(
        'common:estudiar_description_3_part_1'
      )}${new Date().getFullYear()}${t(
        'common:estudiar_description_3_part_2'
      )}`,
      href: '/estudia/formulario-de-inscripcion',
      icon: PencilAltIcon,
    },
  ];
  const studies = [
    {
      name: `${t('footer:estudios_1')}`,
      href: `/estudios/violin`,
    },
    {
      name: `${t('footer:estudios_3')}`,
      href: `/estudios/piano`,
    },
    {
      name: `${t('footer:estudios_2')}`,
      href: `/estudios/violonchelo`,
    },
    {
      name: `${t('footer:estudios_4')}`,
      href: `/estudios/voz`,
    },
    {
      name: `${t('footer:academia_3')}`,
      href: `/galamian-junior`,
    },
  ];
  const callsToAction = [
    {
      name: `${t('common:callsToAction')}`,
      href: '/contacto',
      icon: PhoneIcon,
    },
  ];

  // Mobile Navbar
  const mobileTabs = [
    {
      name: `${t('common:navbar_violin')}`,
      href: `/estudios/violin`,
    },
    {
      name: `${t('common:navbar_piano')}`,
      href: `/estudios/piano`,
    },
    {
      name: `${t('common:navbar_cello')}`,
      href: `/estudios/violonchelo`,
    },
    {
      name: `${t('common:navbar_voice')}`,
      href: `/estudios/voz`,
    },
    {
      name: `${t('footer:academia_3')}`,
      href: `/galamian-junior`,
    },
    {
      name: `${t('footer:recursos_3')}`,
      href: `/bulletin`,
    },
    {
      name: `${t('footer:academia_4')}`,
      href: `/contacto`,
    },
    {
      name: `${t('common:joag')}`,
      href: `/joag`,
    },
  ];

  return (
    <Popover className="relative bg-neutral-50">
      <div
        className="absolute inset-0 z-30 pointer-events-none "
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="flex items-center justify-between px-4 py-5 mx-auto max-w-7xl sm:px-6 sm:py-4 md:justify-start md:space-x-6 lg:space-x-10">
          <Link href="/" passHref>
            <a className="flex">
              <span className="sr-only">Academia Internacional Galamian</span>
              <div className="transition duration-300 ease-in hover:scale-105">
                <Image
                  src="/static/galamian-gold-dark.svg"
                  alt="Galamian logo"
                  width={40}
                  height={40}
                  layout="fixed"
                ></Image>
              </div>
            </a>
          </Link>
          <div className="md:hidden">
            <Language />
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 transition duration-200 ease-in-out text-gold-500 hover:text-neutral-600 focus:outline-none focus:ring-0 focus:ring-inset">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              {/* La Academia tab */}
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-neutral-900' : 'text-neutral-500',
                        'group bg-t inline-flex sm:text-left lg:text-center text-sm tracking-tight uppercase hover:text-neutral-900 focus:outline-none focus:ring-0 focus:text-gold-600 transition duration-300 ease-in-out items-center'
                      )}
                    >
                      <span className="font-base">
                        {t('common:navbar_link_1')}
                      </span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-neutral-600' : 'text-neutral-400',
                          'ml-1 h-4 w-4 group-hover:text-neutral-500 transition duration-300 ease-in-out'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 z-10 hidden transform shadow-lg md:block top-full">
                        <div className="absolute inset-0 flex">
                          <div className="w-1/2 bg-white" />
                          <div className="w-1/2 bg-neutral-50" />
                        </div>
                        <div className="relative grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
                          <nav className="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                            <div className="self-start">
                              <h3 className="text-base font-bold tracking-tight uppercase text-neutral-600">
                                {t('common:navbar_link_1_title_1')}
                              </h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {academia.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <Popover.Button>
                                      <Link href={item.href} passHref>
                                        <a className="flex items-center p-3 -m-3 text-base font-medium transition duration-300 ease-in-out text-neutral-500 hover:bg-neutral-50 group hover:text-neutral-900">
                                          <item.icon
                                            className="flex-shrink-0 w-6 h-6 transition duration-300 ease-in-out text-gold-500 group-hover:text-neutral-500"
                                            aria-hidden="true"
                                          />
                                          <span className="ml-4 tracking-tight">
                                            {item.name}
                                          </span>
                                        </a>
                                      </Link>
                                    </Popover.Button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-base font-bold tracking-tight uppercase text-neutral-600">
                                {t('common:navbar_link_1_title_2')}
                              </h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {recursos.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <Popover.Button>
                                      <Link href={item.href} passHref>
                                        <a className="flex items-center p-3 -m-3 text-base font-medium transition duration-300 ease-in-out text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 group">
                                          <item.icon
                                            className="flex-shrink-0 w-6 h-6 transition duration-300 ease-in-out text-gold-500 group-hover:text-neutral-500"
                                            aria-hidden="true"
                                          />
                                          <span className="ml-4 tracking-tight">
                                            {item.name}
                                          </span>
                                        </a>
                                      </Link>
                                    </Popover.Button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </nav>
                          <Popover.Button>
                            <div className="px-4 py-8 text-left bg-neutral-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                              <div>
                                <h3 className="text-base font-bold tracking-normal uppercase text-neutral-600">
                                  {t('common:navbar_link_1_title_3')}
                                </h3>
                                <ul role="list" className="mt-6 space-y-6">
                                  {blogPosts.map((post) => (
                                    <li key={post.id} className="flow-root">
                                      <Link href={post.href} passHref>
                                        <a className="flex w-full p-3 -m-3 transition duration-500 ease-in-out hover:bg-neutral-100">
                                          <div className="flex-shrink-0 hidden sm:block">
                                            <div className="relative object-cover w-32 h-20">
                                              <Image
                                                width={128}
                                                height={80}
                                                src={post.imageUrl}
                                                alt={post.name}
                                                layout="fill"
                                                objectFit="cover"
                                                objectPosition="center"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex-1 w-0 sm:ml-8">
                                            <h4 className="text-base font-semibold tracking-tight truncate text-neutral-900">
                                              {post.name}
                                            </h4>
                                            <p className="mt-1 text-sm tracking-tight text-neutral-600">
                                              {post.preview}
                                            </p>
                                          </div>
                                        </a>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-6">
                                <Link href="/bulletin/">
                                  <a className="text-sm font-semibold tracking-tight transition duration-300 ease-in-out text-gold-600 hover:text-neutral-900">
                                    {' '}
                                    {t('common:button_publicaciones')}{' '}
                                    <span aria-hidden="true">&rarr;</span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </Popover.Button>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              {/* Estudia tab */}
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open
                          ? 'text-neutral-900'
                          : 'text-neutral-500 uppercase',
                        'group bg-t inline-flex sm:text-left lg:text-center text-sm tracking-tight uppercase hover:text-neutral-900 focus:outline-none focus:ring-0 focus:text-gold-600 transition duration-300 ease-in-out items-center'
                      )}
                    >
                      <span className="uppercase font-base">
                        {t('common:navbar_link_2')}
                      </span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-neutral-600' : 'text-neutral-400',
                          'ml-1 h-4 w-4 group-hover:text-neutral-500 transition duration-300 ease-in-out'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 z-10 hidden transform shadow-lg md:block top-full">
                        <div className="absolute inset-0 flex">
                          <div className="w-1/2 bg-white" />
                          <div className="w-1/2 bg-neutral-50" />
                        </div>
                        <div className="relative grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
                          <nav className="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                            <div className="self-start">
                              <h3 className="text-base font-bold tracking-tight uppercase text-neutral-600">
                                {t('footer:estudia')}
                              </h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {estudiar.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <Popover.Button>
                                      <Link href={item.href} passHref>
                                        <a className="flex items-center p-3 -m-3 text-base font-medium transition duration-300 ease-in-out text-neutral-500 hover:bg-neutral-50 group hover:text-neutral-900">
                                          <item.icon
                                            className="flex-shrink-0 w-6 h-6 transition duration-300 ease-in-out text-gold-500 group-hover:text-neutral-500"
                                            aria-hidden="true"
                                          />
                                          <span className="ml-4 tracking-tight">
                                            {item.name}
                                          </span>
                                        </a>
                                      </Link>
                                    </Popover.Button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-base font-bold tracking-tight uppercase text-neutral-600">
                                {t('footer:estudios')}
                              </h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {studies.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <Popover.Button>
                                      <Link href={item.href} passHref>
                                        <a className="flex items-center p-3 -m-3 text-base font-medium transition duration-300 ease-in-out text-neutral-500 hover:bg-neutral-50 group hover:text-neutral-900">
                                          <span className="ml-0 tracking-tight">
                                            {item.name}
                                          </span>
                                        </a>
                                      </Link>
                                    </Popover.Button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </nav>
                          <Popover.Button className="self-start">
                            <div className="items-stretch px-4 py-8 text-left bg-neutral-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                              <div>
                                <h3 className="text-base font-bold tracking-tight uppercase text-neutral-600">
                                  {t('common:navbar_link_1_title_4')}
                                </h3>
                                <ul role="list" className="mt-5 space-y-6">
                                  {callsToAction.map((item) => (
                                    <div
                                      key={item.name}
                                      className="flow-root group"
                                    >
                                      <Popover.Button>
                                        <Link href={item.href} passHref>
                                          <a className="flex items-center p-3 -m-3 text-base font-medium transition duration-300 ease-out text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900">
                                            <item.icon
                                              className="flex-shrink-0 w-6 h-6 transition duration-300 ease-in-out text-gold-500 group-hover:text-neutral-500"
                                              aria-hidden="true"
                                            />
                                            <span className="ml-3 tracking-tight">
                                              {item.name}
                                            </span>
                                          </a>
                                        </Link>
                                      </Popover.Button>
                                    </div>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-6 text-sm tracking-tight">
                                <Link href="/estudios/violin/#faqs">
                                  <a className="font-semibold transition duration-300 ease-in-out text-gold-600 hover:text-neutral-900">
                                    {' '}
                                    {t('common:button_faq')}{' '}
                                    <span aria-hidden="true">&rarr;</span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </Popover.Button>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              {/* Profesores */}
              <Link href="/profesores" passHref>
                <a className="self-end text-sm tracking-tight uppercase transition duration-300 ease-in-out text-neutral-500 hover:text-neutral-900">
                  {t('common:navbar_link_3')}
                </a>
              </Link>
              {/* Profesores */}
              <Link href="/contacto" passHref>
                <a className="self-end text-sm tracking-tight uppercase transition duration-200 ease-in-out text-neutral-500 hover:text-neutral-900">
                  {t('footer:academia_4')}
                </a>
              </Link>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <Language />
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Mobile */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 transition origin-top-right transform md:hidden"
        >
          <Popover.Button className="w-screen">
            <div className="h-screen bg-white divide-y-2 ring-1 ring-black ring-opacity-5 divide-neutral-50">
              <div className="px-5 pt-5 pb-6 sm:pb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/" passHref>
                      <div className="cursor-pointer">
                        <Image
                          src="/static/galamian-gold-dark.svg"
                          alt="Galamian logo"
                          width={40}
                          height={40}
                        ></Image>
                      </div>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 transition duration-200 ease-in-out text-gold-500 hover:text-neutral-600 focus:outline-none focus:ring-0 focus:ring-inset">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <nav>
                    <div className="grid gap-5 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                      <Link href="/academia" passHref>
                        <a className="flex items-center p-3 -m-3 text-base transition duration-500 ease-in-out text-neutral-600 hover:bg-neutral-50 group hover:text-neutral-900">
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition duration-300 ease-in-out bg-white text-gold-500 group-hover:text-neutral-500 sm:h-12 sm:w-12 group-hover:bg-neutral-50">
                            <LibraryIcon
                              className="w-6 h-6"
                              aria-hidden="true"
                            />
                          </div>
                          <span className="ml-4 tracking-tight">
                            {t('footer:academia')}
                          </span>
                        </a>
                      </Link>
                      <Link href="/profesores" passHref>
                        <a className="flex items-center p-3 -m-3 text-base transition duration-300 ease-in-out text-neutral-600 hover:bg-neutral-50 group hover:text-neutral-900">
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition duration-300 ease-in-out bg-white text-gold-500 group-hover:text-neutral-500 sm:h-12 sm:w-12 group-hover:bg-neutral-50">
                            <UserCircleIcon
                              className="w-6 h-6"
                              aria-hidden="true"
                            />
                          </div>
                          <span className="ml-4 tracking-tight">
                            {t('footer:academia_2')}
                          </span>
                        </a>
                      </Link>
                      {estudiar.map((item) => (
                        <Link key={item.name} href={item.href} passHref>
                          <a className="flex items-center p-3 -m-3 text-base tracking-tight transition duration-500 ease-in-out text-neutral-600 hover:bg-neutral-50 group hover:text-neutral-900">
                            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition duration-500 ease-in-out bg-white text-gold-500 group-hover:text-neutral-500 sm:h-12 sm:w-12 group-hover:bg-neutral-50">
                              <item.icon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4 text-base text-left">
                              {item.name}
                            </div>
                          </a>
                        </Link>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>

              <div className="h-screen px-8 py-8 bg-neutral-50">
                <div className="grid grid-cols-2 gap-6 justify-items-start">
                  {mobileTabs.map((tab) => (
                    <Link key={tab.href} href={tab.href} passHref>
                      <a className="text-base tracking-tight transition duration-300 ease-in-out text-neutral-900 hover:text-gold-500">
                        {tab.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Button>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
