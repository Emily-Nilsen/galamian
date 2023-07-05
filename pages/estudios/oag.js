import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import useTranslation from 'next-translate/useTranslation';
import { ExclamationIcon } from '@heroicons/react/solid';
import { CheckIcon } from '@heroicons/react/outline';
import ProfesoresPiano from '../../components/estudio/profesores-piano';
import PianoRequisitos from '../../components/estudio/piano-requisitos';
import { motion } from 'framer-motion';

import { Fragment } from 'react';

const courseDetails = [
  {
    name: 'Clases',
    specificDetails: [
      {
        especificaciones: '* Ensayos Orquesta Tutti',

        total:
          'Ensayos previamente a los conciertos, approx. 4 días de ensayos',
      },
      {
        especificaciones: '* Parciales con profesores',
        total: 'A concretar para cada encuentro',
      },
      {
        especificaciones: '* Taller de interpretación orquestal',
        total: 'A concretar para cada encuentro',
      },
      {
        especificaciones: '* Conciertos',
        total: '2 conciertos al año',
      },
    ],
  },

  {
    name: 'Directores',
    specificDetails: [
      {
        especificaciones: 'Profesores principales',

        total: 'Por confirmar',
      },
    ],
  },
  {
    name: 'Precio',
    specificDetails: [
      {
        especificaciones:
          'Por encuentro (* becas parciales y completas disponibles para los encuentros)',

        total: `35 €`,
      },
      // {
      //   especificaciones: 'Reserva de plaza',

      //   total: '30 €',
      // },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function OAG() {
  return (
    <div className="py-6 bg-white sm:py-24">
      <div className="py-24 overflow-hidden bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-gold-600">
                  OAG
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Orquesta Academia Galamian
                </h1>
                <p className="mt-8">
                  {' '}
                  <strong className="font-semibold text-neutral-900">
                    Edad recomendada:
                  </strong>{' '}
                  18 años en adelante
                </p>
                <p className="mt-8 text-lg leading-8 text-gray-600">
                  La orquesta de la academia es un marco para el desarrollo de
                  la interpretación orquestal basado en el trabajo meticuloso de
                  ensayo y preparación y en la participación activa de los
                  miembros de la orquesta, guiados siempre por profesionales que
                  son una referencia en el género.
                </p>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  Ya destinado a alumnos con formación previa y de más avanzada
                  edad, la OAG parte con el concepto de música de cámara a gran
                  escala como base fundamental.
                </p>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  Se realizan diversos encuentros en formato de cámara y de
                  cámara-sinfónico de gran exigencia, donde se conocerá en
                  profundidad el repertorio que se interpretará en público en
                  los conciertos de la academia.
                </p>
              </div>
              <div className="flex pt-6 lg:mt-0">
                <Link href="/estudia/formulario-de-inscripcion" passHref>
                  <a className="text-base font-semibold leading-7 transition duration-150 ease-in-out text-gold-600 hover:text-gold-500">
                    Formulario de inscripción{' '}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/general/OAG_orquesta_2_xj67es.webp"
              alt="Academia Galamian Internacional"
              className="object-cover w-[48rem] max-w-none rounded-none shadow-none ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      <hr className="opacity-50" />
      {/* Table */}
      <div className="relative pt-16 overflow-hidden lg:pt-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-lg font-bold leading-6 text-neutral-900">
                Orquesta Academia Galamian
              </h1>
              <p className="mt-2 text-sm text-neutral-700">OAG</p>
            </div>
          </div>
          <div className="flow-root mt-8">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full">
                  <thead className="bg-white">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-neutral-900 sm:pl-3"
                      >
                        Especificaciones del curso
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900"
                      >
                        Cantidad de actividad durante el curso
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {courseDetails.map((detail) => (
                      <Fragment key={detail.name}>
                        <tr className="border-t border-neutral-200">
                          <th
                            colSpan={5}
                            scope="colgroup"
                            className="py-2 pl-4 pr-3 text-sm font-semibold text-left text-neutral-900 bg-neutral-50 sm:pl-3"
                          >
                            {detail.name}
                          </th>
                        </tr>
                        {detail.specificDetails.map(
                          (specificDetail, specificDetailIdx) => (
                            <tr
                              key={specificDetail.total}
                              className={classNames(
                                specificDetailIdx === 0
                                  ? 'border-neutral-300'
                                  : 'border-neutral-200',
                                'border-t'
                              )}
                            >
                              <td className="py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 whitespace-nowrap sm:pl-3">
                                {specificDetail.especificaciones}
                              </td>

                              {specificDetail.total.includes('€') ? (
                                <td className="px-3 py-4 text-sm font-bold text-neutral-900 whitespace-nowrap">
                                  {specificDetail.total}
                                </td>
                              ) : (
                                <td className="px-3 py-4 text-sm text-neutral-500 whitespace-nowrap">
                                  {specificDetail.total}
                                </td>
                              )}
                            </tr>
                          )
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
