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
    role: 'Profesor Principal',
    imageUrl: '/static/profesores/jesus.jpg',
    instrument: 'Violín & Viola',
    sentence_01: `Jesús Reina es artista de Sony Classical.`,
    sentence_02: `Ha actuado con Pinchas Zukerman, Valery Gergiev y Eiji Oue entre otros, con orquestas como las del Teatro Mariinsky, Sinfónica de Barcelona, Mahler Philharmoniker, HSO y Filarmónica de Málaga y en salas como Carnegie Hall, Metropolitan Series, Royal Festival Hall, Wigmore Hall, Wiener Konzerthaus, Auditorio Nacional y Palau de Barcelona.`,
    sentence_03: `Fue galardonado el premio Puerta de Andalucía y la Medalla de Honor de Málaga y es cofundador de la Academia Galamian y el Festival Málaga Clásica.`,
    sentence_04: `Realizó sus estudios con Patinka Kopec y Pinchas Zukerman, recibiendo el premio R. Bronstein de la Manhattan School of Music. Imparte clases en la Universidad Alfonso X de Madrid y la Academia Galamian en Málaga.`,
  },
  {
    name: 'Anna Margrethe Nilsen',
    role: 'Profesora Principal',
    imageUrl: '/static/profesores/anna.jpg',
    instrument: 'Violín & Viola',
    sentence_01: `Anna Margrethe Nilsen es artista de Centaur Records y ganadora en los concursos Sparre Olsen, Eisenberg-Fried y Nacional Noruego.`,
    sentence_02: `Ha estudiado con Isaac Schuldman, Patinka Kopec y Pinchas Zukerman y actuado en salas como Wiener Konzerthaus, Auditorio de Oslo, Filarmonía de San Petersburgo, Carnegie Hall, y con orquestas como la Filarmónica de Bergen, Kaliningrado de Cámara, Sinfónica de Trondheim, Juenesses Musicales, Nóvgorod de Cámara, Ópera Noruega, Sinfónica de San Petersburgo y Bielorrusia de Cámara.`,
    sentence_03: `Ha colaborado con artistas como Pinchas Zukerman, Paul Neubauer, Liza Fershtman, Amanda Forsyth y Guy Braustein.`,
    sentence_04: ``,
  },
  {
    name: 'Laura Romero',
    role: 'Profesora Asistente',
    imageUrl: '/static/profesores/laura-romero.jpeg',
    instrument: 'Violín & Viola',
    sentence_01: `Nacida en Málaga, Laura Romero Alba comienza a tocar el violín a la edad de 7 años. Tras concluir su formación en el Conservatorio Superior de Málaga y en la Academia Internacional ‘Ivan Galamian ’, se traslada a Estados Unidos, donde finaliza sus estudios de postgrado con el maestro Grigory Kalinovsky, en la Universidad de Indiana.`,
    sentence_02: `Durante su estancia en los Estados Unidos, ha formado parte de orquestas como Columbus Indiana Philarmonic, Richmond Symphony Orchestra o Terre Haute Symphony Orchestra. Ha recibido masterclasses de la mano de célebres pedagogos como Pinchas Zukerman , Patinka Kopec,Jesús Reina, o Anna Margrethe Nilsen.`,
    sentence_03: `Ha ofrecido conciertos en distintos puntos de lageografía española así como en otras ciudades del extranjero, como Oslo (Noruega) y Houston (Texas, Estados Unidos). Ha actuado recientemente junto a la Hispanian Symphony Orchestra, la Orquesta Filarmónica de Málaga, la Orquesta Provincial de Málaga y la Joven Orquesta Nacional de España.`,
    sentence_04: `En el ámbito de la música de cámara, participa en diversas agrupaciones como ‘River Quintet’ o ‘Camerata Bitácora’ tocando tanto el violín como la viola, realizando conciertos por la ciudad malagueña. Ha participado en festivales como el pasado VII Festival Internacional de Música de Cámara Málaga Clásica.`,
  },
  {
    name: 'Alfredo García',
    role: 'Profesor Invitado',
    imageUrl: '/static/profesores/alfredo-garcia.jpg',
    instrument: 'Violín & Viola',
    sentence_01: `Alfredo García comienza sus estudios musicales en Salamanca, con Consolación Muñoz. Continúa en Madrid con Francisco Martín, el reconocido pedagogo Antonio Arias y, en el RCSMM, con el Catedrático y concertino de la ONE, Víctor Martín.`,
    sentence_02: `Obtiene el Premio de Honor Fin de Carrera en la especialidad de violín. En 1993 gana el Premio Nacional de Violín Pablo Sarasate. En 1998 es el primer clasificado en el Concurso Nacional de violín “Ciudad de Soria”. Becado por el Ministerio de Educación y por la Fundación Fulbright, cursa un Performer Diploma y un Master of Violin en la Jacob’s School of Music (Indiana University, USA) entre los años 1996 y 2000. Allí estudiacon el mundialmente conocido pedagogo Mauricio Fuks, siendo profesor asistente de su clase durante 4 años. Ha recibido clases de los Maestros Pedro León, J.L. García Asensio, Lorand Fenyves, G. Sebok, J. Starker, J. Dunham (Cuarteto Cleveland), Alan de Verich, E.Bitteti y un innumerable número de grandes músicos de talla mundial.`,
    sentence_03: `Sus alumnos han ingresado en las mejores orquestas de España y en las Escuelas y Universidades de Música más prestigiosas. Es profesor en el Conservatorio Profesional de Música “Amaniel” y en la facultad de música de la Universidad Alfonso X de Madrid. Ha asistido también como Assistant Professor en el Curso de verano del Mozarteum en Salzburgo. Desarrolla asimismo una intensa actividad concertística, tanto como solista como miembro integrante de diversos grupos de cámara. Ha sido Concertino de la OS del Infantado de Guadalajara y es Concertino de la Orquesta de Cámara SIC, dirigida por el maestro Sebastián Mariné. Es miembro fundador del cuarteto “Areteia”.`,
    sentence_04: `Ha tocado en España, Austria, Japón, EEUU, Italia y otros países. Ha colaborado con Sebastián Mariné, Graham Jackson, Alberto Rosado, Daniel del Pino, Gerardo López Laguna, Mariana Gurkova, Michal Dmochowski, Pedro Carbajosa, Vadim Glazkov, Elena Aguado, Fabián Panisello, entre otros. Ha interpretado varias veces los 24 Caprichos de Paganini en público, en una sola sesión. Acaba de grabar un CD con la casa discográfica Verso en el que interpreta las 6 Sonatas para violín solo de Eugene Ysaye. Próximamente verán la luz el primer y segundo volúmenes de su Método para Violín. Interpreta sus conciertos con el violín “Dorna”, construido especialmente para él por el gran maestro luthier J.M. Lozano.`,
  },
  {
    name: 'Grigory Kalinovsky',
    role: 'Profesor Invitado',
    imageUrl: '/static/profesores/grigory-kalinovsky.jpg',
    instrument: 'Violín & Viola',
    sentence_01: `Aclamado por la crítica como un “poeta superior” (Vancouver Sun), el violinista Grigory Kalinovsky ha actuado en conciertos en todo el mundo en algunas de las salas más prestigiosas, desde el Carnegie Hall en Nueva York hasta Musikhalle Grosser Saal en Hamburgo.`,
    sentence_02: `Ha actuado con la Nashville Symphony (EEUU), Klassik Philharmonie Hamburg (Alemania), Kwa Zulu-Natal Philharmonic (Sudáfrica), la Sinfónica de KwangJu (Corea del Sur), Symphony Nova Scotia (Canadá), la Sinfónica Nacional de Bolivia y la Sinfónica de Guatemala, bajo la batuta de Sidney Harth, Irwin Hoffman, Bernhard Gueller, Robert Stehli y François-Xavier Roth, entre otros. Como músico de cámara y fundador del TAGI Ensemble, ha actuado en numerosos ciclos y festivales, incluyendo el Asheville Chamber Music Series, la Lyric Chamber Music Socierty of New York, el Festival de Lucas Foss en The Hamptons y el Olympic Chamber Music Festival en Seattle, colaborando con músicos como Pinchas Zukerman, Ralph Kirshbaum, Miriam Fried, James Buswell, Dora Schwarzberg y Paul Coletti, entre otros.`,
    sentence_03: `Su grabación de la Sonata de Shostakovich y los 24 Preludios con la pianista Tatiana Goncharova fue lanzada mundialmente por Centaur Records, descrito por el hijo del compositor, el director Maxim Shostakovich, como una grabación que “cualquier conocedor de Shostakovich debe tener”. El estreno mundial de los 24 Preludios tuvo lugar en el Newport Music Festival en el verano del 2005. Grigory Kalinovsky ha sido profesor en la Manhattan School of Music, el programa de Pinchas Zukerman Young Artists Program en Canadá y el Heifetz International Music Institute.`,
    sentence_04: `Ha impartido clases en el Bowdoin International Music Festival, el Soesterberg International Music Festival en Holanda, el Summit Music Festival, y en el festival de Pavel Vernikov “Il Violino Magico” en Italia. Ha dado clases magistrales en Meadowmount, la Universidad de Maryland, el Conservatorio de San Francisco, las Universidades de Carolina del Sur y del Oeste y otras instituciones y festivales de Europa y Asia. Ha dado clases a muchos estudiantes que posteriormente ganaron premios en la Menuhin Young Artists Competition en Inglaterra y han ingresado en conservatorios como Curtis, Juilliard, Yale y la Manhattan School of Music. Recientemente, se ha unido al claustro de profesores de Jacobs School of Music de la Universidad de Indiana.`,
  },
  {
    name: 'Alexander Sitkovetsky',
    role: 'Profesor Invitado',
    imageUrl: '/static/profesores/alexander-sitkovetsky.jpg',
    instrument: 'Violín & Viola',
    sentence_01: `Alexander Sitkovetsky nace en Moscú en una familia con una establecida tradición musical. Hizo su debut a la edad de ocho años y el mismo año fue a estudiar a la Menuhin School.`,
    sentence_02: `Lord Menuhin fue su inspiración a lo largo de sus estudios y actuaron juntos en varias ocasiones incluyendo el Concierto Doble de Bach, Dúos de Bartok en el Palacio de St. James y el Concierto de Mendelssohn, bajo la batuta de Menuhin. Seguidamente actuó con la Filarmónica de los Países Bajos y la Royal Filarmonic, English Chamber Orchestra, Academy of St. Martin in the Fields, la BBC Concert Orchestra, entre muchas otras.`,
    sentence_03: `Ha compartido el escenario con Julia Fischer, Janine Jansen, Misha Maisky, Polina Leschenko, Julian Rachlin y muchos otros. Alexander ha grabado para Angel/EMI, Decca y Orfeo, incluyendo el Concierto Doble de Bach con Julia Fischer. La pasada temporada fue invitado a tocar en orquestas de Inglaterra, Holanda, España, Rusia y Alemania al igual que recitales y participaciones en festivales en Noruega, Japón, Rumanía, Inglaterra, Francia, Holanda y Estados Unidos.`,
    sentence_04: `Alexander comenzó a formar parte de la prestigiosa Chamber Music Society Two en el Lincoln Center de Nueva York. Junto a la pianista Wu Qian y el cellista Isang Enders, Alexander es miembro del Sitkovetsky Piano Trio, actuando frecuentemente en el Wigmore Hall de Inglaterra al igual que por Europa en salas como el Concertgebouw de Amsterdam y la Frankurt Alte Oper.`,
  },
  {
    name: 'Molly Carr',
    role: 'Profesora Invitada',
    imageUrl: '/static/profesores/molly-carr.jpg',
    instrument: 'Violín & Viola',
    sentence_01: ``,
    sentence_02: ``,
    sentence_03: ``,
    sentence_04: ``,
  },
  {
    name: 'Jordán Tejedor',
    role: 'Profesor Invitado',
    imageUrl: '/static/profesores/jordan-tejedor.jpeg',
    instrument: 'Violín & Viola',
    sentence_01: ``,
    sentence_02: ``,
    sentence_03: ``,
    sentence_04: ``,
  },
  {
    name: 'Salvador Esteve',
    role: 'Profesor Invitado',
    imageUrl: '/static/profesores/salvador-esteve.jpg',
    instrument: 'Violín & Viola',
    sentence_01: `Ha sido galardonado con el Primer Premio en el Concurso Ciudad de Sóller, VII Concurso Nacional Ruperto Chapí de Villena y en el I Concurso Nacional Ciudad de Xàtiva.`,
    sentence_02: `Ha actuado con orquestas como Columbus Indiana Philharmonic Orchestra, Terre Haute Symphony Orchestra, Orquesta de la Comunidad Valenciana, Orquesta Barroca de Roquetas de Mar, Orquesta de Cámara Isla de Menorca, Orquesta Sinfónica de Ibiza, Orquesta Sinfónica Provincial de Málaga, Hispanian Symphony Orchestra, Orquesta Ciudad de Almería.`,
    sentence_03: `Salvador Esteve es profesor titular de violín en el Real Conservatorio Profesional de Música de Almería, y es profesor invitado de la Academia Galamian de Málaga.`,
    sentence_04: ``,
  },
  {
    name: 'Joaquín Riquelme',
    role: 'Profesor Invitado',
    imageUrl: '/static/profesores/joaquin-riquelme.jpg',
    instrument: 'Violín & Viola',
    sentence_01: ``,
    sentence_02: ``,
    sentence_03: ``,
    sentence_04: ``,
  },
  {
    name: 'Koh Gabriel Kameda',
    role: 'Profesor Invitado',
    imageUrl: '/static/profesores/koh-gabriel-kameda.jpg',
    instrument: 'Violín & Viola',
    sentence_01: `Ganador del concurso internacional de Violín Henry Szering (México), el Sr. Kameda ha actuado como solista con orquestas como la Filarmónica de Israel, Filarmónica de Japón, Filarmónica de Baden-Baden, Staatskapelle Dresden, Sinfónica de Berlín, Sinfónica Austriaca de Radio y Televisión, Orquesta Bélgica de Radio y Televisión, Orquesta de Cámara de Zurich, Sinfónica Nacional de Irlanda, Sinfónica de Tokio, Filarmónica de la Ciudad de México y Sinfónica de Venezuela.`,
    sentence_02: `Estudió en la Universidad de Música de Karlsruhe con el profesor Josef Rissin, y en la Manhattan School of Music (Nueva York) con Pinchas Zukerman. En las últimas temporadas ha actuado en Japón, Estados Unidos (Carnegie Hall con la Orquesta de St. Luke’s), Alemania, Suiza (Tonhalle Zürich) y América Latina (Sala Cecilia Meireles, Río de Janeiro, con Orquestra Sinfonica Brasileira, Paraguay con Orquesta Nacional de Paraguay y otros).`,
    sentence_03: `El Sr. Kameda ha sido profesor en la Universidad de las Artes de Zurich, y actualmente es profesor en la Universidad de Música Detmold y la Universidad de Münster en Alemania.`,
    sentence_04: ``,
  },
];

export default function ViolinProfesores() {
  return (
    <div className="relative bg-white pt-4 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl py-6 lg:py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl tracking-wide text-gold-600 sm:text-4xl">
              Violín y Viola
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
                              <div className="font-medium text-lg leading-6 space-y-1 text-neutral-900 text-left focus:outline-none focus:ring-0 ring-0 ring-transparent focus:ring-transparent">
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
