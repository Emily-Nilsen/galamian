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
    name: 'Øyvind Gimse',
    role: 'Profesor Principal',
    imageUrl: '/static/profesores/oyvind-gimse.jpg',
    instrument: 'Violonchelo',
    sentence_01: ``,
    sentence_02: ``,
    sentence_03: ``,
    sentence_04: ``,
  },
  {
    name: 'Tilman Mahrenholz',
    role: 'Profesor Principal',
    imageUrl: '/static/profesores/tilman-mahrenholz.jpeg',
    instrument: 'Violonchelo',
    sentence_01: `Tilman Mahrenholz recibe su formación musical en las Escuelas Superiores de Música alemanas de Saarbrücken y Essen donde estudia con Ulrich Voss y Christoph Richter.`,
    sentence_02: `Continúa sus estudios con Carter Brey, solista de violonchelos de la Orquesta Filarmónica de Nueva York en la prestgiosa Juilliard School of Music de dicha ciudad.`,
    sentence_03: `Ganador de tres premios en el Concurso Juvenil de Alemania, participa en Festivales Internacionales de Música como el Bain de Musique Flaine y el Aspen Music Festival donde recibe consejos de profesores como Wolfgang Boettcher, Zara Nelsova, Lynn Harrell, el cuarteto Alban Berg y el cuarteto La Salle, entre muchos otros.`,
    sentence_04: `Actualmente es solista de violonchelos de la Orquesta Filarmónica de Málaga.`,
  },
  {
    name: 'Asier Polo',
    role: 'Profesor Invitado',
    imageUrl: '/static/profesores/asier-polo.jpg',
    instrument: 'Violonchelo',
    sentence_01: `Considerado por la crítica especializada como uno de los violoncellistas más destacados de su generación.`,
    sentence_02: `Ha colaborado como solista con algunas de las orquestas más importantes del panorama internacional: Philharmonia Orchestra, London Symphony Orchestra, Danish National Symphony Orchestra, Orchestra Sinfonica Nazionalle della RAI, Dresdner Philharmonie, Orchestre de Paris, BBC Philharmonic, Bergen Filharmoniske Orkester, Israel Philharmonic Orchestra, Berliner Symphoniker, Orquesta Nacional de México, Orquesta Sinfónica de Sao Paulo, Louisiana Philharmonic, Orquesta Nacional de España o la Basel Symphony Orchestra, acompañado bajo la dirección de importantes batutas, como: Pinchas Steinberg, Christian Badea, Rafael Frühbeck de Burgos, Claus Peter Flor, Carlos Miguel Prieto, Günther Herbig, Juanjo Mena, Antoni Wit o Anne Manson.`,
    sentence_03: `Ha sido invitado por importantes festivales de música, como los festivales de Schleswig-Holstein, Nantes, Ohrid, Biennale di Venezia, Roma, Lisboa, Gstaad Menuhin Festival, Morelia, Granada o San Sebastián.`,
    sentence_04: `Ha compartido escenario con artistas de la talla de Silvia Marcovici, Nicolás Chumachenco, Sol Ga­betta, Isabelle van Keulen, Josep Colom, Eldar Nebolsin, Gerard Caussé, Cuarteto Janácek, Cuarte­to Casals o el gran tenor Alfredo Kraus, quien le invitó en los últimos años de su carrera a colaborar como solista en sus recitales, actuando en el Maggio Fiorentino, Covent Garden, Royal Opera House, Tonhalle de Zürich, Musikverein de Viena, además de una exitosa gira por las más destacadas salas de conciertos en Japón.`,
  },
  {
    name: 'Alberto Martos',
    role: 'Profesor Invitado',
    imageUrl: '/static/profesores/alberto-martos.jpg',
    instrument: 'Violonchelo',
    sentence_01: `Tras el éxito de sus grabaciones para el sello Sony Classical, Alberto Martos emerge con fuerza en el panorama musical actual.`,
    sentence_02: `Formado en España y Alemania, su rica actividad concertística le ha llevado a actuar en salas como el Auditorio Nacional, Palau de la Música Catalana, Carnegie Hall, Sala Pleyel, Teatro Colón o Philarmonie de Berlín. Elegido personalmente por Daniel Barenboim para ocupar el primer atril de la West Eastern Divan Orchestra, fue definido por el maestro como “una de las mayores promesas del violonchelo”.`,
    sentence_03: `Miembro fundador del prestigioso Garnati Ensemble, su trabajo Playing Goldberg registrado en Sony Classical junto a Pablo Martos y Yuval Gotlibovich obtiene las mejores críticas de prensa. En 2013 recibe junto a su hermano el premio Andalucía Joven por su labor solidaria a través de la música. Parte de esta labor fue registrada en el documental The Healing Notes, producido por Mercedes Milá y dirigido por Amparo Mendo.`,
    sentence_04: `En 2016 fueron invitados a Puerto Rico, donde inauguraron el museo Pilar Defillò (madre de Pau Casals), siendo nombrados “Huéspedes Distinguidos” de la Ciudad de Mayagüez. En 2017 lanza su nuevo álbum para Sony Classical, que incluye el Concierto en Re Mayor de Franz Joseph Haydn y el Adagio del Concierto en Do Mayor, junto a la Orquesta Ciudad de Granada y bajo la dirección del maestro Antoni Ros Marbà. Este mismo año recibe el premio Andaluces del Futuro (Bankia/Grupo Joly) otorgado en la modalidad de cultura por su brillante trayectoria como solista.`,
  },
];

export default function VioloncheloProfesores() {
  return (
    <div className="relative bg-white pt-4 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl py-6 lg:py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl tracking-wide text-gold-600 sm:text-4xl">
              Violonchelo
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
                                      <div className="-mr-2">
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
                                          <div className="shadow-lg object-cover object-center">
                                            <Image
                                              src={person.imageUrl}
                                              alt={person.name}
                                              width={1184}
                                              height={1376}
                                              layout="fill"
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
                                        <p className="text-gold-600 text-base hover:text-neutral-900 transition duration-200 ease-in-out">
                                          Cerrar
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
