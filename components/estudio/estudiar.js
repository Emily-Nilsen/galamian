import Image from 'next/image';
import Link from 'next/link';
import PlanesDeEstudios from './planes-de-estudios';

import { CameraIcon } from '@heroicons/react/solid';

export default function Estudiar() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-neutral-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="leading-6 text-neutral-900 tracking-wide uppercase">
              Estudiar en la
            </h2>
            <h2 className="mt-2 text-3xl leading-8 tracking-wide text-neutral-900 sm:text-4xl">
              Academia Internacional{' '}
              <span className="text-gold-600">Galamian</span>
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
                      src="/static/sala-unicaja.jpg"
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
              <h2>
                <span className="mt-2 block text-xl leading-8 font-normal text-gray-800 sm:text-2xl">
                  Programa didáctico
                </span>
              </h2>
              <p className="text-lg text-neutral-500 mt-4">
                Los programas de estudios de la Academia Internacional Galamian
                están desarrollados en pos de educar a músicos profesionales
                hábiles en todos los aspectos relacionados con el mundo laboral
                de la música.
              </p>
            </div>
            <div className="mt-5 prose prose-gold text-neutral-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                Estas son las actividades que, durante el curso{' '}
                {new Date().getFullYear()}/{new Date().getFullYear() + 1}, los
                alumnos de todos los Estudios de la Academia participarán:
              </p>
              <ul role="list">
                <li>
                  Programas instrumentales individuales especialmente diseñados
                  con un elenco de profesores de primer nivel internacional:
                  Violín, violoncelo, piano y voz.
                </li>
                <li>
                  Clases magistrales y a distancia de profesores visitantes.
                </li>
                <li>
                  Aprendizaje a distancia con equipamiento tecnológico de última
                  generación.
                </li>
                <li>
                  Cursos por symposium y Conferencias que abarcan desde el
                  estudio de una partitura y técnicas de memorización hasta la
                  ﬁlosofía de la música.
                </li>
                <li>
                  Música de cámara como parte integral de la formación musical:
                  agrupaciones de iniciación y avanzadas colaborando con
                  profesorado de la academia.
                </li>
                <li>
                  Encuentros orquestales con director de la academia y
                  directores invitados, con posibilidad de desarrollar actividad
                  orquestal como asignatura principal.
                </li>
                <li>
                  Clases grupales de repertorio, técnicas de estudios y práctica
                  performativa.
                </li>
                <li>
                  Prácticas de desarrollo de proyectos y acompañamiento a
                  músicos guiados por el profesorado de la academia.
                </li>
                <li>
                  Conciertos en la Sala Unicaja de Conciertos María Cristina y
                  otros espacios.
                </li>
              </ul>

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
      </div>
      <PlanesDeEstudios />
    </div>
  );
}
