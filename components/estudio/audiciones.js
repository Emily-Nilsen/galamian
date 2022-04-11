import Image from 'next/image';
import Link from 'next/link';
import { ExclamationIcon } from '@heroicons/react/solid';

const Audiciones = () => {
  return (
    <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="lg:relative">
        <div className="w-full py-16 pt-16 pb-20 max-w-7xl lg:text-left">
          <div className="lg:w-1/2 sm:px-0 xl:pr-16">
            <div className="relative max-w-xl px-0 text-left sm:px-0 lg:px-8 lg:max-w-7xl">
              <h2 className="font-medium tracking-wide text-neutral-900">
                Audiciones de acceso
              </h2>
              <h2 className="mt-2 text-3xl tracking-wide sm:text-4xl">
                Curso{' '}
                <span className="text-gold-600">
                  {' '}
                  {new Date().getFullYear()}/{new Date().getFullYear() + 1}
                </span>
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-lg text-left text-neutral-500">
                La Academia Internacional Galamian convoca audiciones de acceso
                para el curso {new Date().getFullYear()}/
                {new Date().getFullYear() + 1}.
              </p>
              <div className="mt-10">
                <Link href="/estudia/formulario-de-inscripcion" passHref>
                  <a className="text-base font-medium text-gold-600">
                    {' '}
                    Inscríbete en las audiciones {new Date().getFullYear()}/
                    {new Date().getFullYear() + 1}{' '}
                    <span aria-hidden="true">&rarr;</span>{' '}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <div className="absolute inset-0 object-cover w-full h-full">
            <Image
              src="/static/estudia/violin.gif"
              alt=""
              width={500}
              height="500"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
      {/* Attention! */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="p-4 mt-10 bg-yellow-50">
            <div className="flex">
              <div className="flex-shrink-0">
                <ExclamationIcon
                  className="w-5 h-5 text-yellow-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Atención
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Fecha límite de recepción de inscripciones en las
                    audiciones:{' '}
                    <span className="font-bold">
                      15 de julio de {new Date().getFullYear()}
                    </span>{' '}
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Audiciones;
