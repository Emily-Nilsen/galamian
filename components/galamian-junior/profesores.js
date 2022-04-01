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
    name: 'Laura Romero',
    role: 'Profesora Residente Violín/Viola',
    imageUrl: '/static/galamian-junior/laura.jpg',
    bio_01:
      'Ha ofrecido conciertos en distintos puntos de la geografía española así como en otras ciudades del extranjero, como Oslo (Noruega) y Houston (Texas, Estados Unidos) y ha participado en festivales como en los pasados VII y VIII Festival Internacional de Música Málaga Clásica.',
    bio_02: `Nacida en Málaga, Laura Romero Alba comienza a tocar el violín a la edad de 7 años. Tras concluir su formación en el Conservatorio Superior de Málaga y en la Academia Internacional Galamian, se traslada a Estados Unidos, donde finaliza sus estudios de postgrado con el maestro Grigory Kalinovsky, en la Universidad de Indiana. `,
    bio_03: `Actualmente trabaja como profesora asistente en la Academia Galamian en el estudio de violín/viola.`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Irene Ortega',
    role: 'Profesora Residente Violín/Viola',
    imageUrl: '/static/galamian-junior/irene.jpg',
    bio_01:
      'Violinista nacida en Jerez de la Frontera, recibe sus primeras clases de violín a la edad de cuatro años.',
    bio_02: `Tras recibir consejo de violinistas de la talla de Pinchas Zukerman, Patinka Kopec, Grigory Kalinovsky, Alexander Sitkovetsky o Bretislav Novotný, en el año 2019 obtuvo su licenciatura en la Academia Internacional Galamian a través de The Royal Schools of Music, bajo la tutela de los violinistas Jesús Reina y Anna Nilsen.`,
    bio_03: `En el ámbito de la música de cámara se ha formado con músicos de renombre internacional como los integrantes del Cuarteto Casals Abel Tomás y Arnau Tomás, los pianistas Josu de Solaun, Anna Petrova y Misha Dacic, y los violonchelistas Øyvind Gimsey Kyril Zlotnikov.`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jesús Reina',
    role: 'Violín/Viola',
    imageUrl: '/static/galamian-junior/jesus.jpg',
    bio_01: `Jesús Reina ha sido descrito como un violinista con un “bello sonido caracterizado por una verdadera musicalidad, temperamento y carisma” (El País). Jesús Reina ha actuado con orquestas como la Filarmónica de Málaga, Sinfónica de Barcelona, Sinfónica de Asturias, Orquesta del Centro Nacional de Artes y Filarmónica del Teatro Mariinsky, con directores como Eiji Oue, Valery Gergiev, Pinchas Zukerman, Guy Braunstein y Ari Rasilainen y en salas como el Auditorio Nacional de Madrid, Palau de Barcelona, Teatro Cervantes de Málaga, Wigmore Hall, Weill Hall de Carnegie Hall o Glinka Filarmónica de San Petersburgo, entre muchas otras.`,
    bio_02: `También ha participado en festivales como el Miami International Piano Festival, donde regresará este próximo verano para actuar y dirigir el programa didáctico de violín. Jesús Reina ha recibido el premio al “violinista más sobresaliente” de manos de S.M. la Reina Doña Sofía, Puerta de Andalucía, Gran Premio en el National Solo Competition de EE.UU. y el Waldo Mayo Memorial Competition (Nueva York).`,
    bio_03: `Jesús Reina se inició con su abuelo José Reina tocando verdiales (folclore malagueño) y obtuvo un máster por la Manhattan School of Music, Patinka Kopec y Pinchas Zukerman. Próximamente, actuará en diversas ciudades, interpretando los conciertos de Tchaikovsky y Paganini, lanzará a la venta su disco para Centaur Records y realizará una gira por EEUU y China. Es profesor en la Universidad Alfonso X y la Academia Galamian, la cual fundó en 2014, y director de Málaga Clásica. Jesús Reina ha sido galardonado con la Medalla de Honor de Málaga y el Premio a la Labor Musical del Año 2017.`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Anna Margrethe Nilsen',
    role: 'Violín/Viola',
    imageUrl: '/static/galamian-junior/anna.jpg',
    bio_01: `Ha sido elogiada por su “virtuosismo, expresividad y una acertadísima convergencia de líneas interpretativas sensibles junto a un exquisito trato melódico” (Revista “Ritmo”).  A la edad de nueve años debutó como solista con la Orquesta de la Radiotelevisión Noruega, y posteriormente fue invitada por la Filarmónica de Bergen, Orquestas de Cámara de Novgorod y Kaliningrad, Orquesta de Cámara de Galicia, Sinfónica de Trondheim, Sinfónica de Kristiansand, Sinfónica de Baerum y Asker, Jeunesses Musicales, Sinfónica del Estado de San Petersburgo, Filarmónica de la Manhattan School of Music, Orquesta de la Ópera Noruega y Orquesta de Cámara del Estado de Bielorrusia.`,
    bio_02: `Ha actuado en salas como la Wiener Konzerthaus, Oslo Concert Hall, Filarmónica de San Petersburgo y Carnegie Hall y con artistas como Lars Anders Tomter, Guy Braunstein, Liza Fershtman, Henri Demarquette, el American String Quartet, Paul Neubauer, Amanda Forsyth y Pinchas Zukerman. Comenzó su estudios con el maestro Isaac Schuldman. Obtuvo el Máster de Música de la Manhattan School of Music (Nueva York), estudiando con Pinchas Zukerman y Patinka Kopec. Es ganadora de los concursos Sparre-Olsen (Noruega), Nacional de Violín para Jóvenes Noruegos, Lillian-Fuchs (Nueva York), Eisenberg-Fried (Nueva York) y ha recibido la Medalla de Honor de Málaga.`,
    bio_03: `Ha grabado obras de Szymanowski, Bartók y Grieg con el sello Centaur Records. Compromisos recientes y futuros incluyen actuaciones como solista con La Orquesta Nacional de la Universidad de Santiago (Chile), Joven Orquesta Leonesa, Orquesta Academia Galamian y Barratt Due Orquesta de Camara, recitales y conciertos de música de cámara con Pinchas Zukerman en Nueva York, en el Miami International Piano Festival (Florida) y el festival MurciArt en Murcia, y grabaciones de obras de Busoni, Granados y Brustad. Es cofundadora y profesora de violín en la Academia Internacional Galamian y cofundadora y directora del festival Málaga Clásica.`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Natalia Kuchaeva',
    role: 'Método Brainin',
    imageUrl: '/static/galamian-junior/natalia.jpg',
    bio_01: `Procedente de una familia de científicos y de gran tradición musical, la pianista moscovita Natalia Kucháeva reside en España desde el año 2009. Su repertorio abarca el más amplio abanico de estilos desde el barroco hasta el siglo XXI.`,
    bio_02: `Recibe una sólida formación musical en la Escuela de Música afiliada al Conservatorio Estatal P.I. Tchaikovsky de Moscú y en la Academia Gnessin donde se gradúa y realiza los estudios de Posgrado bajo la dirección del maestro Vladimir Tropp.`,
    bio_03: `Se perfecciona en la Escuela Superior de Música de Lucerna (Suiza), con el pianista de reconocido prestigio internacional Konstantin Lifschitz.`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Vicente Chuliá',
    role: 'Principios Fundamentales de la Interpretación Musical',
    imageUrl: '/static/galamian-junior/vicente.jpg',
    bio_01: `Director de orquesta y compositor español que incorpora ambas facetas inseparables del arte musical a una idea amplia de la interpretación sinfónica, ha estudiado dirección de orquesta en el Conservatorio Superior de Música “Musikene” de San Sebastián con el Maestro Enrique García Asensio y es graduado de dirección en el Real Conservatorio Superior de Madrid con Antonio Moya.`,
    bio_02: `También tiene formación de armonía, contrapunto, fuga, orquestación y composición con Salvador Chuliá Hernández y musicología con José Climent.`,
    bio_03: `En la actualidad posee un amplio catálogo de publicaciones de más de setenta obras sinfónicas, de cámara y para solista que son interpretadas a nivel nacional e internacional.`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jose Andrés Fernández',
    role: 'Orquesta',
    imageUrl: '/static/galamian-junior/jose-camacho.jpg',
    bio_01: `José Andrés Fernández Camacho es diplomado en dirección de orquesta por la Hochschule für Musik de Basilea (Suiza), bajo la tutela del maestro Rodolfo Fischer.`,
    bio_02: `En la misma institución, cursó estudios de Máster en interpretación musical en clarinete, así como un Máster en interpretación solista con el profesor François Benda.`,
    bio_03: `Su recorrido como director de orquesta le ha llevado a ser premiado en el I Curso Internacional de Dirección Orquestal en la Serena (Chile) y a dirigir orquestas en España y Suiza, como la Orquesta Juventus Musica Basel, Ensemble de la Hochschule für Musik Basel, Orquesta Málaga Camerata y la Orquesta Universidad de la Serena, entre otras.`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
];

export default function ProfesoresJunior() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:space-y-4 max-w-3xl mx-auto text-center">
            <h2 className="leading-6 text-neutral-900 tracking-wide uppercase">
              Profesores del
            </h2>
            <h2 className="text-3xl tracking-wide sm:text-4xl text-neutral-900">
              Estudio Violín & Viola{' '}
              <span className="text-gold-600">Junior</span>
            </h2>
            <p className="text-lg text-neutral-500">
              La Academia Internacional Galamian cuenta con un equipo de
              pedagogos del mayor prestigio internacional, cuya convergencia tan
              sólo es posible en este centro educativo. Haga clic en el nombre
              para leer más sobre cada pedagogo.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  <div className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 relative">
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

                  <div className="space-y-2 relative">
                    <div className="text-lg leading-6 font-medium space-y-1 text-neutral-900">
                      <Menu as="div">
                        <div className="hover:bg-neutral-50 transition duration-200 ease-in-out">
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
                          <Menu.Items className="origin-top-left fixed z-20 left-0 top-0 h-full w-full overflow-x-hidden bg-white focus:outline-none text-left">
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
                                    <div className="absolute right-6 top-6 cursor-pointer">
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
                                      {person.bio_01}
                                    </p>
                                  </div>
                                  <div className="mt-5 prose prose-gold text-neutral-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                                    <p>{person.bio_02}</p>
                                    <p>{person.bio_03}</p>

                                    <Menu.Item>
                                      <p className="text-gold-600 text-base hover:text-neutral-900 transition duration-200 ease-in-out pt-4 cursor-pointer">
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
  );
}
