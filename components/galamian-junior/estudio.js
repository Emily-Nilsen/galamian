import Image from 'next/image';
import Link from 'next/link';
import Lecciones from './lecciones';

import { CameraIcon } from '@heroicons/react/solid';

export default function EstudioJunior() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-neutral-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="leading-6 text-neutral-900 tracking-wide uppercase">
              Estudio de
            </h2>
            <h2 className="mt-2 text-3xl leading-8 tracking-wide text-neutral-900 sm:text-4xl">
              Violín & Viola <span className="text-gold-600">Junior</span>
            </h2>
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
                    width={4}
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
                      src="/static/galamian-junior/estudio.jpg"
                      alt="Sala Unicaja de Conciertos María Cristina"
                      width={1720}
                      height={1147}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 flex text-sm text-neutral-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-neutral-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    Sala Unicaja de Conciertos María Cristina
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-neutral-500">
                Los alumnos que ingresen en el Estudio de Violín/Viola Junior de
                la AIG en el Semestre de Otoño recibirán estas lecciones desde
                septiembre de {new Date().getFullYear()} hasta junio de{' '}
                {new Date().getFullYear() + 1}, periodo en el que participarán
                en:
              </p>
            </div>
            <div className="mt-5 prose prose-gold text-neutral-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1 pb-6 lg:pb-0">
              <ul role="list">
                <li>Clases individuales</li>
                <li>Clases magistrales</li>
                <li>Clases grupales</li>
                <li>Repertorista</li>
                <li>Joven Orquesta de la Academia Galamian</li>
                <li>
                  Método Brainin{' '}
                  <span className="italic">
                    Desarrollo del intelecto musical
                  </span>
                </li>
                <li>Principios fundamentales de la interpretación musical</li>
                <li>Conciertos</li>
              </ul>
              <p>
                Las violinistas Laura Romero e Irene Ortega son las profesoras
                residentes del Estudio de Violín/Viola Junior de la Academia
                Internacional Galamian.
              </p>
              <p>
                Los alumnos miembros de este programa reciben una instrucción
                dedicada por parte de los profesores principales a través de
                clases magistrales individuales, además de talleres, cursos y
                eventos a partir de los cuales el Estudio alimenta el
                crecimiento de sus alumnos.
              </p>
              <h3>Lecciones</h3>
              <p>
                Aquí puedes leer más detalles sobre cada clase que ofrecemos:
              </p>
            </div>
          </div>
          <Lecciones />
          <div className="mt-10">
            <Link href="/audiciones" passHref>
              <a className="text-base font-medium text-gold-600">
                {' '}
                Solicita una plaza para el curso {new Date().getFullYear()}/
                {new Date().getFullYear() + 1}{' '}
                <span aria-hidden="true">&rarr;</span>{' '}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
