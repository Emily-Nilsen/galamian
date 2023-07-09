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
        especificaciones: 'Ensayos Orquesta',

        total:
          'Ensayos dos sábados al mes, desde el inicio del curso hasta su fin (aprox. oct - junio)',
      },
      {
        especificaciones: 'Conciertos',
        total: '3 conciertos al año',
      },
    ],
  },

  {
    name: 'Director',
    specificDetails: [
      {
        especificaciones: 'Profesor principal',

        total: 'José Andrés Fernández Camacho',
      },
    ],
  },
  {
    name: 'Precio',
    specificDetails: [
      {
        especificaciones: 'Pago mensual de',

        total: `35 €`,
      },
      {
        especificaciones: 'Reserva de plaza',

        total: '30 €',
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function JOAG() {
  return (
    <div className="py-6 bg-white sm:py-24">
      <div className="py-24 overflow-hidden bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-gold-600">
                  JOAG
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Joven Orquesta Academia Galamian
                </h1>
                <p className="mt-8">
                  {' '}
                  <strong className="font-semibold text-neutral-900">
                    Edad recomendada:
                  </strong>{' '}
                  10-17 años
                </p>
                <p className="mt-8 text-lg leading-8 text-gray-600">
                  La joven orquesta ofrece la oportunidad a los más jóvenes de
                  adentrarse en el mundo sinfónico desde el comienzo de su
                  formación.
                </p>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  La interpretación orquestal es un pilar esencial en el
                  desarrollo del joven músico, y a través de este programa,
                  podrán acceder a una agrupación que, por la calidad y
                  continuidad de su proceso de preparación, les hará desarrollar
                  sus capacidades musicales desde el instrumento, la escucha
                  activa y la colaboración, estando esta estrechamente ligada a
                  la interpretación musical en grandes agrupaciones.
                </p>

                <p className="mt-6 text-base leading-8 text-gray-600">
                  Además, el trabajo de la JOAG culmina con sendos conciertos,
                  donde exponer el trabajo realizado y en los cuales se adquiere
                  la experiencia necesaria de cara al futuro profesional de los
                  jóvenes músicos que la forman.
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
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/cello/JOAG_orquesta_3_ygbsjs.webp"
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
                Joven Orquesta Academia Galamian
              </h1>
              <p className="mt-2 text-sm text-neutral-700">JOAG</p>
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
