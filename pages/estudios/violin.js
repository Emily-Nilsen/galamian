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
    description: `Repertorio solista.`,
  },
  {
    description: `Música de cámara.`,
  },
  {
    description: `Música
    orquestal.`,
  },
  {
    description: `Clases de interpretación.`,
  },
];

const courseDetails = [
  {
    name: 'Modalidad A',
    specificDetails: [
      {
        especificaciones: 'Clases particulares',
        cantidad: '2 clases de 1 h. a la semana',
        total: '64 clases (*4 de ellas son clases magistrales)',
      },
      {
        especificaciones: 'Clases magistrales con profesores invitados',
        cantidad: '2 clases de 1 h. en cada encuentro',
        total: '4 clases',
      },
      {
        especificaciones: 'Pianista acompañante',
        cantidad: '4 h. al mes',
        total: '32 horas',
      },
    ],
  },
  {
    name: 'Modalidad B',
    specificDetails: [
      {
        especificaciones: 'Clases particulares',
        cantidad: '1,5 clases de 1 h. a la semana',
        total: '48 clases (*4 de ellas son clases magistrales)',
      },
      {
        especificaciones: 'Clases magistrales con profesores invitados',
        cantidad: '2 clases de 1 h. cada encuentro',
        total: '4 clases',
      },
      {
        especificaciones: 'Pianista acompañante',
        cantidad: '3 h. al mes',
        total: '24 horas',
      },
    ],
  },
  {
    name: 'Modalidad C',
    specificDetails: [
      {
        especificaciones: 'Clases particulares',
        cantidad: '1 clase de 1 h. a la semana',
        total: '32 clases (*2 de ellas son clases magistrales)',
      },
      {
        especificaciones: 'Clases magistrales con profesores invitados',
        cantidad: '1 clase de 1 h. cada encuentro',
        total: '2 clases',
      },
      {
        especificaciones: 'Pianista acompañante',
        cantidad: '3 h. al mes',
        total: '24 horas',
      },
    ],
  },
  {
    name: 'Incluye',
    specificDetails: [
      {
        especificaciones: 'Clases de música de cámara',
        cantidad: '1 clase de 1h. aprox. cada 2 semanas',
        total: '14 clases',
      },
      {
        especificaciones: 'Clases de interpretación',
        cantidad: '1 clase aprox. cada 2 semanas',
        total: '12 clases',
      },
      {
        especificaciones: 'Encuentros de simposium',
        cantidad: '',
        total: '6 encuentros',
      },
      {
        especificaciones:
          'Participación en la orquesta JOAG o OAG(dependiendo de la edad del alumno)',
        cantidad:
          '*OAG - 1 encuentro cada semestre y concierto, *JOAG - ensayos cada 2 semanas y 2 conciertos al año',
        total: '* 2 encuentros, * Ensayos cada 2 semanas y 2 conciertos al año',
      },
      {
        especificaciones:
          'Conciertos de alumnos en las salas de cámara, o en la sala principal',
        cantidad: '1 o 2 cada semestre',
        total: '3 conciertos',
      },
      {
        especificaciones: 'Posibilidad de llevar a cabo tu propio recital',
        cantidad: '',
        total: '',
      },
      {
        especificaciones: 'Uso libre de las cabinas de estudio',
        cantidad: '',
        total: '',
      },
      {
        especificaciones: 'Aprendizaje a distancia',
        cantidad: '',
        total: '',
      },
      {
        especificaciones: 'Opción de añadir clases del Metodo Brainin',
        cantidad: '',
        total: '',
      },
    ],
  },
  {
    name: 'Profesores',
    specificDetails: [
      {
        especificaciones: 'Profesores principales',
        cantidad: 'Jesús Reina, Anna Nilsen',
        total: '',
      },
      {
        especificaciones: 'Profesora asistenta',
        cantidad: 'Laura Romero Alba',
        total: '',
      },
      {
        especificaciones: 'Profesores invitados',
        cantidad: 'Grigory Kalinovsky, Alexander Sitkovetsky, Robert Kowalski',
        total: '',
      },
    ],
  },
  {
    name: 'Precio',
    specificDetails: [
      {
        especificaciones: 'Precio del curso - Modalidad A',
        cantidad: '',
        total: `7.890 €`,
      },
      {
        especificaciones: 'Precio del curso - Modalidad B',
        cantidad: '',
        total: `6.590 €`,
      },
      {
        especificaciones: 'Precio del curso - Modalidad C',
        cantidad: '',
        total: `5.190 €`,
      },
      {
        especificaciones: 'Reserva de plaza',
        cantidad: '',
        total: '80 €',
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ViolinYViola() {
  return (
    <div className="py-6 bg-white sm:py-24">
      <div className="py-24 overflow-hidden bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-gold-600">
                  Violín y viola
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Estudio de violín y viola
                </h1>
                <p className="mt-8">
                  {' '}
                  <strong className="font-semibold text-neutral-900">
                    Edad recomendada:
                  </strong>{' '}
                  Todas las edades
                </p>
                <p className="mt-8 text-lg leading-8 text-gray-600">
                  Los estudios de formación permanente ofrecen un entorno en el
                  cual desarrollar las capacidades musicales del alumno a través
                  de un programa de diverso contenido, centrado principalmente
                  en lo práctico e interpretativo en todos sus ámbitos:
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
                  Este programa está suplementado por cursos o simposiums de
                  improvisación musical, contrapunto, composición y talleres de
                  dirección orquestal, para que al realizar los estudios en la
                  Academia Galamian, los alumnos puedan tener una formación
                  completa en las artes musicales.
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
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/violin/violin-study-img-3_cnh2ey.webp"
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
                Estudio de violín y viola
              </h1>
              <p className="mt-2 text-sm text-neutral-700">Violín y viola</p>
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
