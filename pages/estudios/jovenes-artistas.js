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

const courseDescription = [
  {
    description: `Seguimiento bimensual de clases particulares.`,
  },
  {
    description: `Clases magistrales a lo largo del año.`,
  },
  {
    description: `Clases de interpretación en grupo.`,
  },
];

const courseDetails = [
  {
    name: 'Clases',
    specificDetails: [
      {
        especificaciones: 'Clases particulares',
        cantidad: '1 clase de 1 h. cada dos semanas',
        total: '16 clases',
      },
      {
        especificaciones: 'Clases magistrales',
        cantidad: '1 clase de 1 h. cada dos meses',
        total: '4 clases',
      },
      {
        especificaciones: 'Pianista acompañante para clases magistrales',
        cantidad: '1h. cada dos meses',
        total: '4 horas',
      },
      {
        especificaciones: 'Orquesta JOAG',
        cantidad: 'Ensayos cada 2 semanas, 2 conciertos al año',
        total: 'Ensayos cada 2 semanas, 2 conciertos al año',
      },
    ],
  },
  {
    name: 'Incluye',
    specificDetails: [
      {
        especificaciones:
          'Conciertos de alumnos en las salas de cámara, o en la sala principal',
        cantidad: '1 cada semestre',
        total: '2 conciertos',
      },
      {
        especificaciones: 'Participación en encuentros de simposium',
        cantidad: '',
        total: '6 encuentros',
      },
      {
        especificaciones: 'Uso libre de las cabinas de estudio',
        cantidad: '',
        total: '',
      },
      {
        especificaciones: 'Opción de añadir clases del Metodo Brainin',
        cantidad: '',
        total: '',
      },
      {
        especificaciones: 'Opción de añadir clases particulares',
        cantidad: '',
        total: '',
      },
    ],
  },
  {
    name: 'Profesores',
    specificDetails: [
      {
        especificaciones: 'Profesores principales - violín/viola',
        cantidad: 'Laura Romero Alba',
        total: '',
      },
      {
        especificaciones: 'Profesores clases magistrales - violín/viola',
        cantidad: 'Jesús Reina, Anna Margrethe Nilsen',
        total: '',
      },
      {
        especificaciones: 'Profesores principales - violonchelo',
        cantidad: 'Tilman Mahrenholz',
        total: '',
      },
      {
        especificaciones: 'Profesores clases magistrales - violonchelo',
        cantidad: 'Adolfo Gutiérrez, Øyvind Gimse',
        total: '',
      },
    ],
  },
  {
    name: 'Precio',
    specificDetails: [
      {
        especificaciones: 'Precio del curso',
        cantidad: '',
        total: `1.800 €`,
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function JovenesArtistas() {
  return (
    <div className="py-6 bg-white sm:py-24">
      <div className="py-24 overflow-hidden bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-gold-600">
                  Violín, viola y violonchelo
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Jóvenes Artistas
                </h1>
                <p className="mt-8">
                  {' '}
                  <strong className="font-semibold text-neutral-900">
                    Edad recomendada:
                  </strong>{' '}
                  approx. 8-16 años
                </p>
                <p className="mt-8 text-lg leading-8 text-gray-600">
                  Con la participación en la orquesta sinfónica como foco
                  central de actividades, el programa de Jóvenes Artistas
                  complementa la formación de jóvenes instrumentalistas a través
                  de:
                </p>
                <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {courseDescription.map((feature) => (
                    <div
                      key={feature.description}
                      className="relative flex pl-3 gap-x-3"
                    >
                      <dt className="inline font-semibold text-gray-900">
                        <div
                          className="flex-none w-1.5 h-1.5 mt-3 rounded-full bg-gold-600"
                          aria-hidden="true"
                        />
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  Esto brinda a los alumnos una oportunidad idónea para
                  alimentar su inspiración musical, ya que pueden compartir la
                  música con sus compañeros y recibir orientación en sus
                  estudios de cara al futuro.
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
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/violin/violin-study-img-7_svfvnd.webp"
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
                Jóvenes Artistas
              </h1>
              <p className="mt-2 text-sm text-neutral-700">
                Violín, viola y violonchelo
              </p>
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
                        Cantidad de clases/horas
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900"
                      >
                        Total en el curso
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
                              <td className="px-3 py-4 text-sm text-neutral-500 whitespace-nowrap">
                                {specificDetail.cantidad}
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
