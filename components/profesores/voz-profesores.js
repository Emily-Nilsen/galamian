import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CameraIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const people = [
  {
    name: 'Nils Georg Nilsen',
    role: 'Profesor Principal',
    imageUrl: '/static/profesores/nils-nilsen.jpg',
    instrument: 'Voz',
    sentence_01: `Debutó en 2012 en el Avery Fisher Hall de Nueva York y ha actuado en la Ópera Tampa, la Ópera Noruega y con la Orquesta de Cámara de Minsk.`,
    sentence_02: `Con tan sólo 13 años cantó dúos con Dame Kiri te Kanawa en el Oslo Spectrum Hall. Ha interpretado el papel de Tom Rakewell (El Progreso del Libertino), Torquemada (L’heure Espagnole), Aumônier (Diálogos de los Carmelitas) en la Opera Noruega y el papel principal de Albert Herring en Intermezzo con el director de la Metropolitan Opera, David J. Jackson.`,
    sentence_03: `Además de ser solista en el Mesías de Händel, Requiem de Mozart, Christus de Mendelssohn y el Oratorio de Navidad de Bach, ha actuado con Opera Tampa en La Viuda Alegre y Dances Patrelle en Nueva York en El Ballet de Gilbert y Sullivan.`,
    sentence_04: `Nils Georg se graduó con el Grado de Música de la Academia de la Música Noruega y recibió el Master de Música bajo la tutela de Patricia McCaffrey en la Manhattan School of Music de Nueva York.`,
  },
  {
    name: 'Sergio Montero',
    role: 'Maestro Repertorista',
    imageUrl: '/static/profesores/sergio-montero.jpg',
    instrument: 'Voz',
    sentence_01: `Es profesor superior de piano, música de cámara, solfeo y teoría de la música por el Conservatorio Superior de Música de Málaga, donde ha recibido el Premio de Honor en Piano y Música de Cámara.`,
    sentence_02: `Además es profesor numerario del Conservatorio Profesional de Música Manuel Carra (Málaga).`,
    sentence_03: `Ha sido director de los Conservatorios Profesionales Gonzalo Martín Tenllado (Málaga) y Padre Manuel Gámez (Fuengirola), profesor asistente de los maestros Suso Mariátegui y Edemiro Arnaltes, primer pianista del Coro de Ópera de Málaga y pianista de la actriz y cantante Imperio Argentina y de Montserrat Caballé.`,
    sentence_04: `Recibió la insignia de Plata al Mérito Artístico por la Fundación de Cultura del Ayuntamiento de La Línea de la Concepción y ha sido jurado del IX Concurso Internacional de Piano de Campillos. Colabora habitualmente con la Orquesta Filarmónica de Málaga y es maestro repertorista y profesor asistente del tenor noruego Nils Nilsen en la Academia Internacional Galamian.`,
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

export default function VozProfesores() {
  return (
    <div className="relative bg-white pt-4 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl py-6 lg:py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl tracking-wide text-gold-600 sm:text-4xl">
              Voz
            </h2>
            <p className="text-base text-neutral-500">
              Haga clic en el nombre para leer más sobre cada pedagogo.
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
                                          <div className="shadow-lg object-cover object-center overflow-hidden">
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

                                      <Menu.Item>
                                        <p className="text-gold-600 text-base pt-4 hover:text-neutral-900 transition duration-200 ease-in-out">
                                          Cerrar{' '}
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
