import Image from 'next/image';
import Link from 'next/link';

/* This example requires Tailwind CSS v2.0+ */
const stats = [
  { label: 'Fundado', value: '2010' },
  { label: 'Empleados', value: '15' },
  { label: 'Estudiantes', value: '521' },
  { label: '(Algo más?)', value: '(?)' },
];

export default function ElProyecto() {
  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className="pb-12 lg:pb-4 relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-center text-3xl leading-8 tracking-wide text-neutral-900 sm:text-4xl">
          Academia Internacional <span className="text-gold-600">Galamian</span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-neutral-500">
          Una iniciativa liderada por Jesús Reina y Anna Margrethe Nilsen, con
          la estimable colaboración de Fundación Unicaja.
        </p>
      </div>
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-neutral-50 lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 shadow-xl overflow-hidden">
              <div className="absolute inset-0 h-full w-full object-cover">
                <Image
                  src="/static/stock-image-02.jpg"
                  alt="El Proyecto"
                  width={1920}
                  height={2879}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="absolute inset-0 bg-gold-500 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-gold-600 via-gold-600 opacity-90" />
              <div className="relative px-8">
                <div className="">
                  <Image
                    src="/static/galamian-gold-dark.svg"
                    alt="Galamian logo"
                    width={60}
                    height={60}
                  ></Image>
                </div>
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <p className="relative italic">
                      Tincidunt integer commodo, cursus etiam aliquam neque, et.
                      Consectetur pretium in volutpat, diam. Montes, magna
                      cursus nulla feugiat dignissim id lobortis amet.
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-cream-500">
                      Un Nombre, Algun sitio
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gold-600 tracking-wide sm:text-4xl">
              El Proyecto
            </h2>
            <div className="mt-6 text-neutral-500 space-y-6">
              <p className="text-base leading-7">
                Esta Academia es creada en Málaga por el concertista
                internacional Jesús Reina, proyecto que realiza conjuntamente
                con la violinista noruega Anna Nilsen, con la intención de
                ofrecer una enseñanza musical de alto nivel a interpretes de
                intrumentos de cuerda, piano y a cantantes, compartiendo
                conocimientos y valores musicales adquiridos tras más de 15 años
                de estudios en ciudades como Madrid, Oslo, Londres o Nueva York.
              </p>
              <p className="text-base leading-7">
                El nombre de la academia hace honor al gran pedagogo Ivan
                Galamian, que fue maestro del legendarios violinistas como
                Pinchas Zukerman, quien a su vez fue el maestro principal de los
                directores de la academia. Desde sus comienzos, la Academia
                cuenta con el apoyo de Patinka Kopec, Codirectora del Programa
                de Pinchas Zukerman en la Manhattan School of Music, y John
                Rockwell, Jefe de Crítica del New York Times, quienes ocupan el
                cargo de Directores de Honor. Entre los profesores visitantes
                que han visitado la academia se encuentran los propios Patinka
                Kopec y Pinchas Zukerman, los cellistas Amanda Forsyth y Asier
                Polo, y el violista Paul Neubauer.
              </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t-2 border-neutral-100 pt-6"
                >
                  <dt className="text-base font-medium text-neutral-500">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-neutral-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <Link href="/audiciones" passHref>
                <a className="text-base font-medium text-gold-600">
                  {' '}
                  Solicita una plaza para el curso 2022/2023{' '}
                  <span aria-hidden="true">&rarr;</span>{' '}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
