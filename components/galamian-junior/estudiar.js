import Image from 'next/image';
import Link from 'next/link';

import { CameraIcon } from '@heroicons/react/solid';

export default function EstudiarJunior() {
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
                      src="/static/galamian-junior/sala-unicaja.jpg"
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
                Formar parte de la Academia Galamian es una decisión crucial
                para tu desarrollo artístico. Los profesionales que conforman
                esta institución se dedican íntegramente a garantizar tu
                aprendizaje con las metodologías más actuales y avanzadas del
                panorama musical.
              </p>
            </div>
            <div className="mt-5 prose prose-gold text-neutral-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                Desde su traslado al antiguo Real Conservatorio María Cristina,
                la Academia Internacional Galamian se ha conformado como una
                institución educativa musical de las más altas miras y
                reconocimiento, a la cual acuden alumnos y profesores de todos
                los rincones del mundo.
              </p>
              <p>
                Pertenecer al alumnado de la Academia significa mucho más que
                recibir clases de tu profesor principal, pues creemos
                fervientemente en el necesario desarrollo de todas las
                competencias que conforman tu crecimiento musical. Entre ellas
                por supuesto está tu técnica del instrumento, pero no en
                solitario.
              </p>
              <h3>La Academia Internacional Galamian te permite</h3>
              <ul role="list">
                <li>
                  Desarrollar tus capacidades artísticas en un ambiente de
                  estudio afable entre compañeros y profesores. Compartir
                  opiniones, críticas y experiencias musicales con nuestro
                  equipo y alumnado te ayudará a alcanzar unos valores
                  artísticos honorables y competentes en el panorama musical del
                  siglo XXI.
                </li>
                <li>
                  Disponer de todas las instalaciones de la Academia: cabinas de
                  estudio, aulas con pianos tratados con mimo y respeto, sala de
                  conferencias, salas de música de cámara y la Sala Unicaja de
                  Conciertos María Cristina.
                </li>
                <li>
                  Participar en actividades dedicadas a mejorar tus habilidades
                  como músico: conciertos de alumnos, clases grupales de
                  técnica, lectura conjunta, solfeo y canto, método Brainin,
                  orquesta, asistencia como oyente a todas las clases
                  magistrales que se dan en la Academia.
                </li>
                <li>
                  Atender a todos los conciertos organizados por la Academia
                  Galamian, como el Ciclo de Conciertos de Profesores, los
                  conciertos de la Orquesta de la Academia Galamian, o la
                  programación anual de la Sociedad Filarmónica de Málaga.
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
    </div>
  );
}
