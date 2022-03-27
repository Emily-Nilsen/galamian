/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  BellIcon,
  AcademicCapIcon,
  IdentificationIcon,
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
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

const estudiar = [
  {
    name: 'Estudiar en la AIG',
    description:
      'Los programas de estudios de la Academia Internacional Galamian están desarrollados en pos de educar a músicos profesionales hábiles en todos los aspectos relacionados con el mundo laboral de la música.',
    href: '/estudiar',
    icon: AcademicCapIcon,
  },
  {
    name: 'Audiciones de acceso curso 2022/2023',
    description:
      'La Academia Internacional Galamian convoca audiciones de acceso para el curso 2022/2023.',
    href: '/audiciones',
    icon: IdentificationIcon,
  },
  {
    name: 'Inscripción en las audiciones',
    description:
      'La Academia Internacional Galamian abre la inscripción a sus audiciones de acceso para el curso escolar 2022/2023, a comenzar en el próximo septiembre.',
    href: '/inscripcion',
    icon: PencilAltIcon,
  },
];
const callsToAction = [
  { name: 'Contacto', href: '/contacto', icon: PhoneIcon },
];
const academia = [
  { name: 'El Proyecto', href: '/academia', icon: InformationCircleIcon },
  { name: 'Sus Fundadores', href: '/academia', icon: GlobeAltIcon },
  { name: 'Sala Unicaja', href: '/academia', icon: LibraryIcon },
];
const recursos = [
  { name: 'Noticias', href: '/#noticias', icon: BellIcon },
  { name: 'Eventos', href: '/eventos', icon: CalendarIcon },
  { name: 'Bulletin', href: '/bulletin', icon: NewspaperIcon },
  { name: 'Contacto', href: '/contacto', icon: MailIcon },
];
const blogPosts = [
  {
    id: 1,
    name: 'Misha Dačić – Entrevista en Codalario',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl: '/static/misha.jpg',
  },
  {
    id: 2,
    name: 'Joaquín Riquelme, recital de viola',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl: '/static/joaquin.jpg',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Popover className="relative bg-neutral-50">
      <div
        className="absolute inset-0 z-30 pointer-events-none "
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="flex items-center justify-between px-4 py-5 mx-auto max-w-7xl sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <Link href="/" passHref>
            <a className="flex">
              <span className="sr-only">Academia Internacional Galamian</span>
              <div>
                <Image
                  src="/static/galamian-gold-dark.svg"
                  alt="Galamian logo"
                  width={40}
                  height={40}
                ></Image>
              </div>
            </a>
          </Link>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-neutral-400 hover:text-neutral-500 focus:outline-none focus:ring-0 focus:ring-inset transition duration-200 ease-in-out">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-neutral-900' : 'text-neutral-500',
                        'group bg-t inline-flex items-center text-sm tracking-wide uppercase hover:text-neutral-900 focus:outline-none focus:ring-0 focus:text-gold-600 transition duration-200 ease-in-out'
                      )}
                    >
                      <span className="font-base">La Academia</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-neutral-600' : 'text-neutral-400',
                          'ml-2 h-5 w-5 group-hover:text-neutral-500'
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
                            <div>
                              <h3 className="text-sm font-medium tracking-wide text-neutral-500 uppercase">
                                La Academia
                              </h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {academia.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <Popover.Button>
                                      <Link href={item.href} passHref>
                                        <a className="flex items-center p-3 -m-3 text-base font-medium text-neutral-900 hover:bg-neutral-50 group transition duration-200 ease-in-out">
                                          <item.icon
                                            className="flex-shrink-0 w-6 h-6 text-neutral-400 group-hover:text-gold-500"
                                            aria-hidden="true"
                                          />
                                          <span className="ml-4">
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
                              <h3 className="text-sm font-medium tracking-wide text-neutral-500 uppercase">
                                Recursos
                              </h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {recursos.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <Popover.Button>
                                      <Link href={item.href} passHref>
                                        <a className="flex items-center p-3 -m-3 text-base font-medium text-neutral-900 hover:bg-neutral-50 group transition duration-200 ease-in-out">
                                          <item.icon
                                            className="flex-shrink-0 w-6 h-6 text-neutral-400 group-hover:text-gold-500"
                                            aria-hidden="true"
                                          />
                                          <span className="ml-4">
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
                          <div className="px-4 py-8 bg-neutral-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                            <div>
                              <h3 className="text-sm font-medium tracking-wide text-neutral-500 uppercase">
                                Del bulletin
                              </h3>
                              <ul role="list" className="mt-6 space-y-6">
                                {blogPosts.map((post) => (
                                  <li key={post.id} className="flow-root">
                                    <Link href={post.href} passHref>
                                      <a className="flex p-3 -m-3 hover:bg-neutral-100">
                                        <div className="flex-shrink-0 hidden sm:block">
                                          <div className="object-cover w-32 h-20 relative">
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
                                          <h4 className="text-base font-medium text-neutral-900 truncate">
                                            {post.name}
                                          </h4>
                                          <p className="mt-1 text-sm text-neutral-500">
                                            {post.preview}
                                          </p>
                                        </div>
                                      </a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-6 text-sm font-medium">
                              <Link href="/bulletin" passHref>
                                <a className="text-gold-600 hover:text-gold-500">
                                  {' '}
                                  Ver todas las publicaciones{' '}
                                  <span aria-hidden="true">&rarr;</span>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open
                          ? 'text-neutral-900'
                          : 'text-neutral-500 uppercase',
                        'group bg-transparent inline-flex items-center text-sm tracking-wide hover:text-neutral-900 focus:outline-none focus:ring-0 focus:text-gold-600 transition duration-200 ease-in-out'
                      )}
                    >
                      <span className="uppercase font-base">Estudia</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-neutral-600' : 'text-neutral-400',
                          'ml-2 h-5 w-5 group-hover:text-neutral-500'
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
                      <Popover.Panel className="absolute inset-x-0 z-10 hidden transform bg-white shadow-lg md:block top-full">
                        <div className="grid px-4 py-6 mx-auto max-w-7xl gap-y-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-3 lg:px-8 lg:py-12 xl:py-16">
                          {estudiar.map((item) => (
                            <Popover.Button key={item.name}>
                              <Link href={item.href} passHref>
                                <a className="flex flex-col justify-between p-3 -m-3 hover:bg-neutral-50">
                                  <div className="flex md:h-full lg:flex-col">
                                    <div className="flex-shrink-0">
                                      <span className="inline-flex items-center justify-center w-10 h-10 text-gold-500 bg-neutral-50 sm:h-12 sm:w-12">
                                        <item.icon
                                          className="w-6 h-6"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    </div>
                                    <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                      <div>
                                        <p className="text-base font-medium tracking-wide text-neutral-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-neutral-500">
                                          {item.description}
                                        </p>
                                      </div>
                                      <p className="mt-2 text-sm font-medium text-gold-600 lg:mt-4">
                                        Aprende más{' '}
                                        <span aria-hidden="true">&rarr;</span>
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </Link>
                            </Popover.Button>
                          ))}
                        </div>
                        <div className="bg-neutral-50">
                          <div className="px-4 py-5 mx-auto space-y-6 max-w-7xl sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root group">
                                <Link href={item.href} passHref>
                                  <a className="flex items-center p-3 -m-3 text-base transition duration-200 ease-out font-medium text-neutral-900 hover:bg-neutral-100">
                                    <item.icon
                                      className="flex-shrink-0 w-6 h-6 text-neutral-400 group-hover:text-gold-500 transition duration-200 ease-in-out"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{item.name}</span>
                                  </a>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link href="/profesores" passHref>
                <a className="text-sm tracking-wide text-neutral-500 hover:text-neutral-900 uppercase self-center transition duration-200 ease-in-out">
                  Profesores
                </a>
              </Link>
              <Link href="/galamian-junior" passHref>
                <a className="text-sm tracking-wide text-neutral-500 hover:text-neutral-900 uppercase self-center transition duration-200 ease-in-out">
                  Galamian Junior
                </a>
              </Link>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <a
                href="#"
                className="text-sm text-neutral-500 hover:text-neutral-900 tracking-wide"
              >
                English
              </a>
              <Link href="/alumnos" passHref>
                <a className="inline-flex items-center justify-center px-4 py-2 ml-8 text-sm tracking-wide text-white bg-neutral-400 hover:bg-neutral-500 hover:text-white uppercase transition duration-200 ease-in-out">
                  Alumnos
                </a>
              </Link>
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
            <div className="bg-white divide-y-2 ring-1 ring-black ring-opacity-5 divide-neutral-50">
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
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-neutral-400 hover:text-gold-500 focus:outline-none focus:ring-0 focus:ring-inset transition duration-200 ease-in-out">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <nav>
                    <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                      <Link href="/academia" passHref>
                        <a className="flex items-center p-3 -m-3 text-base font-medium text-neutral-900 hover:bg-neutral-50 group transition duration-200 ease-in-out">
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-gold-500 bg-neutral-50 sm:h-12 sm:w-12">
                            <LibraryIcon
                              className="w-6 h-6"
                              aria-hidden="true"
                            />
                          </div>
                          <span className="ml-4">La Academia</span>
                        </a>
                      </Link>
                      <Link href="/profesores" passHref>
                        <a className="flex items-center p-3 -m-3 text-base font-medium text-neutral-900 hover:bg-neutral-50 group transition duration-200 ease-in-out">
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-gold-500 bg-neutral-50 sm:h-12 sm:w-12">
                            <UserCircleIcon
                              className="w-6 h-6"
                              aria-hidden="true"
                            />
                          </div>
                          <span className="ml-4">Professores</span>
                        </a>
                      </Link>
                      {estudiar.map((item) => (
                        <Link key={item.name} href={item.href} passHref>
                          <a className="flex items-center p-3 -m-3 rounded-lg hover:bg-neutral-50">
                            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-gold-500 bg-neutral-50 sm:h-12 sm:w-12">
                              <item.icon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4 text-base font-medium text-neutral-900">
                              {item.name}
                            </div>
                          </a>
                        </Link>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>

              <div className="px-5 py-6">
                <div className="grid grid-cols-2 gap-4 justify-items-start">
                  <Link href="/galamian-junior" passHref>
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Galamian Junior
                    </a>
                  </Link>
                  <Link href="eventos" passHref>
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Eventos
                    </a>
                  </Link>
                  <Link href="/bulletin" passHref>
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Bulletin
                    </a>
                  </Link>
                  <Link href="/contacto" passHref>
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Contacto
                    </a>
                  </Link>
                </div>
                <div className="mt-6">
                  <Link href="/alumnos" passHref>
                    <a className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-neutral-400 border border-transparent hover:bg-neutral-500 transition duration-200 ease-in-out">
                      Alumnos
                    </a>
                  </Link>
                  <p className="mt-6 text-base font-medium text-center text-neutral-500 transition duration-200 ease-in-out hover:text-neutral-900 cursor-pointer">
                    English
                  </p>
                </div>
              </div>
            </div>
          </Popover.Button>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
