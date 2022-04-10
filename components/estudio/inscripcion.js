import Image from 'next/image';
import Link from 'next/link';
import CTA from '../../components/estudio/cta';
import { CheckIcon } from '@heroicons/react/outline';
import { CameraIcon } from '@heroicons/react/solid';

const documentos = [
  {
    name: 'Formulario de inscripción',
    description:
      'Encuentre un enlace al formulario de inscripción a continuación.',
  },
  {
    name: 'Vídeo de motivación',
    description: `Un ídeo de corta duración en el que expliques los motivos por los cuales quieres formar parte de la academia. Este vídeo también deberá de alojarse en una plataforma tipo YouTube o Vímeo.`,
  },
  {
    name: 'Renta familiar',
    description:
      'Un documento acreditativo sobre la última renta familiar en la que el alumno esté incluido (sólo para aquellas inscripciones que soliciten beca).',
  },
  {
    name: 'Links al vídeo',
    description:
      'Uno o varios links al o los vídeos con los que quieras auditar a la Academia Internacional Galamian. Estos vídeos también deberá de alojarse en una plataforma tipo YouTube o Vímeo.',
  },
];

export default function Inscripcion() {
  return (
    <section id="inscripcion" className="bg-white overflow-hidden">
      <div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-neutral-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="leading-6 text-neutral-900 tracking-wide uppercase">
                Inscripción en las Audiciones de la
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
                        src="/static/estudia/inscripcion.jpeg"
                        alt="Sala Unicaja de Conciertos María Cristina"
                        width={1720}
                        height={1147}
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="bottom"
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
                  <span className="mt-2 block text-xl leading-8 font-normal text-neutral-800 sm:text-2xl">
                    Inscripción a las audiciones
                  </span>
                </h2>
                <p className="text-lg text-neutral-500 mt-4">
                  La Academia Internacional Galamian abre la inscripción a sus
                  audiciones de acceso para el curso escolar{' '}
                  {new Date().getFullYear()}/{new Date().getFullYear() + 1}, a
                  comenzar en el próximo septiembre.
                </p>
              </div>
              <div className="mt-5 prose prose-gold text-neutral-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  Dada la circunstancia excepcional que atraviesa España, estas
                  audiciones se llevarán a cabo a{' '}
                  <span className="font-bold">través de vídeo</span>.
                </p>
                <p>
                  El periodo de inscripción en las audiciones ya está abierto, y
                  los aspirantes pueden inscribirse en él hasta el 15 de julio
                  de {new Date().getFullYear()}.
                </p>
                <p>
                  En esta página podrás conocer cómo participar en las
                  audiciones de acceso al próximo curso.
                </p>
                <h3 className="text-neutral-900">
                  Documentos necesarios para la inscripción
                </h3>
                <div className="lg:mt-0">
                  <dl className="space-y-10 ">
                    {documentos.map((documento) => (
                      <div key={documento.name} className="relative">
                        <dt>
                          <CheckIcon
                            className="absolute h-6 w-6 text-lime-500"
                            aria-hidden="true"
                          />
                          <p className="ml-9 text-lg leading-6 font-medium text-neutral-900">
                            {documento.name}
                          </p>
                        </dt>
                        <dd className="-mt-4 ml-9 text-base text-neutral-500">
                          {documento.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </section>
  );
}
