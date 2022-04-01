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
    name: 'Jesús Reina',
    role: 'Música de Cámara',
    imageUrl: '/static/profesores/jesus.jpg',
    instrument: 'Violín',
    sentence_01: `Jesús Reina es artista de Sony Classical.`,
    sentence_02: `Ha actuado con Pinchas Zukerman, Valery Gergiev y Eiji Oue entre otros, con orquestas como las del Teatro Mariinsky, Sinfónica de Barcelona, Mahler Philharmoniker, HSO y Filarmónica de Málaga y en salas como Carnegie Hall, Metropolitan Series, Royal Festival Hall, Wigmore Hall, Wiener Konzerthaus, Auditorio Nacional y Palau de Barcelona.`,
    sentence_03: `Fue galardonado el premio Puerta de Andalucía y la Medalla de Honor de Málaga y es cofundador de la Academia Galamian y el Festival Málaga Clásica.`,
    sentence_04: `Realizó sus estudios con Patinka Kopec y Pinchas Zukerman, recibiendo el premio R. Bronstein de la Manhattan School of Music. Imparte clases en la Universidad Alfonso X de Madrid y la Academia Galamian en Málaga.`,
  },
  {
    name: 'Anna Margrethe Nilsen',
    role: 'Música de Cámara',
    imageUrl: '/static/profesores/anna.jpg',
    instrument: 'Violín',
    sentence_01: `Anna Margrethe Nilsen es artista de Centaur Records y ganadora en los concursos Sparre Olsen, Eisenberg-Fried y Nacional Noruego.`,
    sentence_02: `Ha estudiado con Isaac Schuldman, Patinka Kopec y Pinchas Zukerman y actuado en salas como Wiener Konzerthaus, Auditorio de Oslo, Filarmonía de San Petersburgo, Carnegie Hall, y con orquestas como la Filarmónica de Bergen, Kaliningrado de Cámara, Sinfónica de Trondheim, Juenesses Musicales, Nóvgorod de Cámara, Ópera Noruega, Sinfónica de San Petersburgo y Bielorrusia de Cámara.`,
    sentence_03: `Ha colaborado con artistas como Pinchas Zukerman, Paul Neubauer, Liza Fershtman, Amanda Forsyth y Guy Braustein.`,
    sentence_04: ``,
  },
  {
    name: 'Pablo Martos',
    role: 'Música de Cámara',
    imageUrl: '/static/profesores/pablo-martos.jpg',
    instrument: 'Violín',
    sentence_01: ``,
    sentence_02: ``,
    sentence_03: ``,
    sentence_04: ``,
  },
  {
    name: 'Alberto Martos',
    role: 'Música de Cámara',
    imageUrl: '/static/profesores/alberto-martos.jpg',
    instrument: 'Violín',
    sentence_01: `Tras el éxito de sus grabaciones para el sello Sony Classical, Alberto Martos emerge con fuerza en el panorama musical actual.`,
    sentence_02: `Formado en España y Alemania, su rica actividad concertística le ha llevado a actuar en salas como el Auditorio Nacional, Palau de la Música Catalana, Carnegie Hall, Sala Pleyel, Teatro Colón o Philarmonie de Berlín. Elegido personalmente por Daniel Barenboim para ocupar el primer atril de la West Eastern Divan Orchestra, fue definido por el maestro como “una de las mayores promesas del violonchelo”.`,
    sentence_03: `Miembro fundador del prestigioso Garnati Ensemble, su trabajo Playing Goldberg registrado en Sony Classical junto a Pablo Martos y Yuval Gotlibovich obtiene las mejores críticas de prensa. En 2013 recibe junto a su hermano el premio Andalucía Joven por su labor solidaria a través de la música. Parte de esta labor fue registrada en el documental The Healing Notes, producido por Mercedes Milá y dirigido por Amparo Mendo.`,
    sentence_04: `En 2016 fueron invitados a Puerto Rico, donde inauguraron el museo Pilar Defillò (madre de Pau Casals), siendo nombrados “Huéspedes Distinguidos” de la Ciudad de Mayagüez. En 2017 lanza su nuevo álbum para Sony Classical, que incluye el Concierto en Re Mayor de Franz Joseph Haydn y el Adagio del Concierto en Do Mayor, junto a la Orquesta Ciudad de Granada y bajo la dirección del maestro Antoni Ros Marbà. Este mismo año recibe el premio Andaluces del Futuro (Bankia/Grupo Joly) otorgado en la modalidad de cultura por su brillante trayectoria como solista.`,
  },
  {
    name: 'José Vélez',
    role: 'Música de Cámara',
    imageUrl: '/static/profesores/jose-velez.jpg',
    instrument: 'Cantante',
    sentence_01: ``,
    sentence_02: ``,
    sentence_03: ``,
    sentence_04: ``,
  },
  {
    name: 'Misha Dacić',
    role: 'Música de Cámara',
    imageUrl: '/static/profesores/misha-dacic.jpg',
    instrument: 'Piano',
    sentence_01: ``,
    sentence_02: ``,
    sentence_03: ``,
    sentence_04: ``,
  },
  {
    name: 'Alexander Sitkovetsky',
    role: 'Música de Cámara',
    imageUrl: '/static/profesores/alexander-sitkovetsky.jpg',
    instrument: 'Violín',
    sentence_01: `Alexander Sitkovetsky nace en Moscú en una familia con una establecida tradición musical. Hizo su debut a la edad de ocho años y el mismo año fue a estudiar a la Menuhin School.`,
    sentence_02: `Lord Menuhin fue su inspiración a lo largo de sus estudios y actuaron juntos en varias ocasiones incluyendo el Concierto Doble de Bach, Dúos de Bartok en el Palacio de St. James y el Concierto de Mendelssohn, bajo la batuta de Menuhin. Seguidamente actuó con la Filarmónica de los Países Bajos y la Royal Filarmonic, English Chamber Orchestra, Academy of St. Martin in the Fields, la BBC Concert Orchestra, entre muchas otras.`,
    sentence_03: `Ha compartido el escenario con Julia Fischer, Janine Jansen, Misha Maisky, Polina Leschenko, Julian Rachlin y muchos otros. Alexander ha grabado para Angel/EMI, Decca y Orfeo, incluyendo el Concierto Doble de Bach con Julia Fischer. La pasada temporada fue invitado a tocar en orquestas de Inglaterra, Holanda, España, Rusia y Alemania al igual que recitales y participaciones en festivales en Noruega, Japón, Rumanía, Inglaterra, Francia, Holanda y Estados Unidos.`,
    sentence_04: `Alexander comenzó a formar parte de la prestigiosa Chamber Music Society Two en el Lincoln Center de Nueva York. Junto a la pianista Wu Qian y el cellista Isang Enders, Alexander es miembro del Sitkovetsky Piano Trio, actuando frecuentemente en el Wigmore Hall de Inglaterra al igual que por Europa en salas como el Concertgebouw de Amsterdam y la Frankurt Alte Oper.`,
  },
  {
    name: 'Anna Petrova',
    role: 'Música de Cámara',
    imageUrl: '/static/profesores/anna-petrova.jpg',
    instrument: 'Piano',
    sentence_01: ``,
    sentence_02: ``,
    sentence_03: ``,
    sentence_04: ``,
  },
  {
    name: 'Josu De Solaun',
    role: 'Música de Cámara',
    imageUrl: '/static/profesores/josu-de-solaun.jpg',
    instrument: 'Piano',
    sentence_01: ``,
    sentence_02: ``,
    sentence_03: ``,
    sentence_04: ``,
  },
  {
    name: 'Molly Carr',
    role: 'Música de Cámara',
    imageUrl: '/static/profesores/molly-carr.jpg',
    instrument: 'Violín',
    sentence_01: ``,
    sentence_02: ``,
    sentence_03: ``,
    sentence_04: ``,
  },
  {
    name: 'Øyvind Gimse',
    role: 'Música de Cámara',
    imageUrl: '/static/profesores/oyvind-gimse.jpg',
    instrument: 'Violonchelo',
    sentence_01: ``,
    sentence_02: ``,
    sentence_03: ``,
    sentence_04: ``,
  },

  {
    name: 'José Andrés Fernández',
    role: 'Orquesta Infantil y Juvenil',
    imageUrl: '/static/profesores/jose-camacho.jpg',
    instrument: 'Orquesta Infantil y Juvenil',
    sentence_01: `José Andrés Fernández Camacho`,
    sentence_02: ``,
    sentence_03: ``,
    sentence_04: ``,
  },
  {
    name: 'Tomás Grau',
    role: 'Orquesta Academia Galamian',
    imageUrl: '/static/profesores/tomas-grau.jpg',
    instrument: 'Orquesta Academia Galamian',
    sentence_01: ``,
    sentence_02: ``,
    sentence_03: ``,
    sentence_04: ``,
  },
];

export default function GrupalesProfesores() {
  return (
    <div className="relative bg-white pt-4 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl py-6 lg:py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl tracking-wide text-gold-600 sm:text-4xl">
              Asignaturas Grupales
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
                                        <p className="text-gold-600 text-base hover:text-neutral-900 transition duration-200 ease-in-out pt-4">
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
