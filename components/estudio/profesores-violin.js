import Image from 'next/image';

export default function ProfesoresViolin() {
  return (
    <section
      id="fundadores"
      className="py-16 bg-neutral-50 overflow-hidden lg:py-24"
    >
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-base font-semibold tracking-wide uppercase text-neutral-900">
            Profesores del
          </h2>
          <h2 className="text-left text-3xl leading-8 tracking-wide text-neutral-900 sm:text-4xl">
            Estudio de <span className="text-gold-600"> Violín/Viola</span>
          </h2>
          <div className="grid sm:grid-cols-2 pt-10 pb-6 text-neutral-500 max-w-3xl">
            <div className="sm:col-span-1 pb-6 pr-6  leading-7">
              <h3 className="text-neutral-900 font-semibold pb-2 text-lg">
                Profesores Principales
              </h3>
              <ul role="list">
                <li>Jesús Reina</li>
                <li>Anna Margrethe Nilsen</li>
              </ul>
              <h3 className="text-neutral-900 font-semibold pb-2 pt-6 text-lg">
                Profesora Asistente
              </h3>
              <ul role="list">
                <li>Laura Romero</li>
              </ul>
            </div>
            <div className="sm:col-span-1">
              <h3 className="text-neutral-900 font-semibold pb-2 text-lg">
                Profesores Invitados
              </h3>
              <div className="flex gap-10 leading-8">
                <div>
                  <ul role="list">
                    <li>Grigory Kalinovsky</li>
                    <li>Alexander Sitkovetsky</li>
                    <li>Molly Carr</li>
                    <li>Alfredo García</li>
                    <li>Koh Gabriel Kameda</li>
                    <li>Joaquín Riquelme</li>
                    <li>Jordán Tejedor</li>
                    <li>Salvador Esteve</li>
                  </ul>
                </div>
                <div>
                  <ul role="list"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h2 className="text-2xl text-neutral-900 tracking-wide sm:text-3xl">
              Jesús Reina
            </h2>
            <p className="mt-3 text-base leading-7 text-neutral-500">
              Pinchas Zukerman, Valery Gergiev y Eiji Oue entre otros, con
              orquestas como las del Teatro Mariinsky, Sinfónica de Barcelona,
              Mahler Philharmoniker, HSO y Filarmónica de Málaga y en salas como
              Carnegie Hall, Metropolitan Series, Royal Festival Hall, Wigmore
              Hall, Wiener Konzerthaus, Auditorio Nacional y Palau de Barcelona.
            </p>
            <p className="mt-3 text-base leading-7 text-neutral-500">
              Fue galardonado el premio Puerta de Andalucía y la Medalla de
              Honor de Málaga y es cofundador de la Academia Galamian y el
              Festival Málaga Clásica. Realizó sus estudios con Patinka Kopec y
              Pinchas Zukerman, recibiendo el premio R. Bronstein de la
              Manhattan School of Music. Imparte clases en la Universidad
              Alfonso X de Madrid y la Academia Galamian en Málaga.
            </p>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <div className="relative mx-auto shadow-xl w-[410px]">
              <Image
                width={1024}
                height={1200}
                src="/static/jesus.jpg"
                alt="Jesús Reina"
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h2 className="text-2xl text-neutral-900 tracking-wide sm:text-3xl">
                Anna Margrethe Nilsen
              </h2>
              <p className="mt-3 text-base leading-7 text-neutral-500">
                Anna Margrethe Nilsen es artista de Centaur Records y ganadora
                en los concursos Sparre Olsen, Eisenberg-Fried y Nacional
                Noruego. Ha estudiado con Isaac Schuldman, Patinka Kopec y
                Pinchas Zukerman y actuado en salas como Wiener Konzerthaus,
                Auditorio de Oslo, Filarmonía de San Petersburgo, Carnegie Hall,
                y con orquestas como la Filarmónica de Bergen, Kaliningrado de
                Cámara, Sinfónica de Trondheim, Juenesses Musicales, Nóvgorod de
                Cámara, Ópera Noruega, Sinfónica de San Petersburgo y
                Bielorrusia de Cámara.
              </p>
              <p className="mt-3 text-base leading-7 text-neutral-500">
                Ha colaborado con artistas como Pinchas Zukerman, Paul Neubauer,
                Liza Fershtman, Amanda Forsyth y Guy Braustein. Es profesora en
                la Academia Galamian, y cofundadora y directora del Festival
                Málaga Clásica.
              </p>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
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
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <div className="relative mx-auto shadow-xl w-[410px]">
                <Image
                  width={1024}
                  height={1200}
                  src="/static/anna.jpg"
                  alt="Anna Margrethe Nilsen"
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
