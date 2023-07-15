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
    description: `Módulo de Formación`,
  },
  {
    description: `Módulo de Perfeccionamiento`,
  },
  {
    description: `Módulo de Seguimiento`,
  },
];

const courseDetails = [
  {
    name: 'Módulo de Formación',
    specificDetails: [
      {
        especificaciones: `Clases particulares con profesor/a de voz
        + Profesor/a de correpetición`,
        cantidad: `6 clases de 1 h. al mes`,
        total: `48 clases (4 de ellas son clases magistrales)`,
      },
      {
        especificaciones: `Clases de correpetición`,
        cantidad: `1 clase de 1 h. al mes`,
        total: `8 clases (4 de ellas son clases magistrales)`,
      },
    ],
  },
  {
    name: 'Módulo de Perfeccionamento*',
    specificDetails: [
      {
        especificaciones: `Clases particulares con profesor/a de voz
        + Profesor/a de correpetición`,
        cantidad: `6 clases de 1 h. al mes`,
        total: `48 clases (4 de ellas son clases magistrales)`,
      },
      {
        especificaciones: `Clases de correpetición`,
        cantidad: `1 clase de 1 h. al mes`,
        total: `8 clases (4 de ellas son clases magistrales)`,
      },
    ],
  },
  {
    name: 'Módulo de Seguimiento**',
    specificDetails: [
      {
        especificaciones: `Clases particulares con profesor/a de voz
        + Profesor/a de correpetición`,
        cantidad: `a concretar`,
        total: `a concretar`,
      },
      {
        especificaciones: `Clases de correpetición`,
        cantidad: `a concretar`,
        total: `a concretar`,
      },
    ],
  },
  {
    name: 'Incluye',
    specificDetails: [
      {
        especificaciones: `Clases magistrales con profesores invitados`,
        cantidad: '',
        total: '',
      },
      {
        especificaciones: `Encuentros de simposium`,
        cantidad: '',
        total: `6 encuentros`,
      },
      {
        especificaciones: `Conciertos de alumnos en las salas de cámara, o en la sala principal`,
        cantidad: `1 o 2 cada semestre`,
        total: `3 conciertos`,
      },
      {
        especificaciones: `Posibilidad de llevar a cabo tu propio recital`,
        cantidad: '',
        total: '',
      },
      {
        especificaciones: `Uso libre de las cabinas de estudio`,
        cantidad: '',
        total: '',
      },
      {
        especificaciones: `Aprendizaje a distancia`,
        cantidad: '',
        total: '',
      },
    ],
  },
  {
    name: 'Profesores',
    specificDetails: [
      {
        especificaciones: `Profesores principales`,
        cantidad: 'Carlos Álvarez, Valle Duque',
        total: '',
      },
      {
        especificaciones: `Profesora de correpetición`,
        cantidad: 'Natalia Kuchaeva',
        total: '',
      },
    ],
  },
  {
    name: 'Precio',
    specificDetails: [
      {
        especificaciones: `Precio del curso - Módulo de Formación`,
        cantidad: '',
        total: `4.800 €`,
      },
      {
        especificaciones: `Precio del curso - Módulo de Perfeccionamento`,
        cantidad: '',
        total: `4.800 €`,
      },
      {
        especificaciones: `Precio del curso - Módulo de Seguimento`,
        cantidad: '',
        total: `A concretar`,
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

export default function Voz() {
  return (
    <div className="py-6 bg-white sm:py-24">
      <div className="py-24 overflow-hidden bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-gold-600">
                  Voz
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Estudio de Voz
                </h1>
                <p className="mt-8">
                  {' '}
                  <strong className="font-semibold text-neutral-900">
                    Edad recomendada:
                  </strong>{' '}
                  Todas las edades
                </p>
                <p className="mt-8 text-lg leading-8 text-gray-600">
                  El estudio de formación permanente de voz ofrece al alumnado
                  de la Academia Galamian las herramientas que ayudan a
                  conseguir los niveles exigidos para acceder a la
                  profesionalización.
                </p>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  <strong className="font-semibold text-neutral-900">
                    Opción de elegir:
                  </strong>{' '}
                </p>
                <dl className="max-w-xl mt-6 space-y-6 text-base leading-7 text-gray-600 lg:max-w-none">
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
                <p className="mt-10 text-base leading-8 text-gray-600">
                  Este estudio se basa en un proceso de aprendizaje
                  práctico-teórico, que es el eje esencial del trabajo a
                  realizar.
                </p>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  Se abarcan aspectos como el trabajo técnico y la correpetición
                  en cada clase, así como el conocimiento de las distintas ramas
                  del canto lírico.
                </p>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  Además, se ofrece la especialización según la vocalidad de
                  cada alumno y la adaptación al mundo profesional.
                </p>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  Esto ayuda a los cantantes a mantener su instrumento en
                  condiciones óptimas y reciben asesoramiento para el estudio de
                  los roles que deben interpretar.
                </p>
              </div>
              <div className="flex mt-10 group">
                <a
                  download
                  href="/Estudio-de-voz.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500/20 py-1.5 px-3 rounded-full font-semibold text-neutral-700 group-hover:bg-gold-500/30 group-hover:text-neutral-900 transition-all duration-150 ease-in-out"
                >
                  Descargar más info
                </a>
              </div>
              <div className="flex pt-10 lg:mt-0">
                <Link href="/estudia/formulario-de-inscripcion" passHref>
                  <a className="text-base font-semibold leading-7 transition duration-150 ease-in-out text-gold-600 hover:text-gold-500">
                    Formulario de inscripción{' '}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </Link>
              </div>
            </div>

            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/general/Carlos_Alvarez_y_Valle_Duque_-_inside_page_estudio_de_voz_ks3p4x.webp"
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
                Estudio de Voz
              </h1>
              <p className="mt-2 text-sm text-neutral-700">Voz</p>
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
                  <div className="flex flex-col gap-6 p-6 text-sm bg-neutral-50">
                    <p>
                      <strong className="font-semibold text-neutral-900">
                        *
                      </strong>{' '}
                      Debido a la necesidad que se puede presentar en estos
                      alumnos de más tiempo de correpetición por la amplitud de
                      los roles, se podrán intercambiar las horas de
                      correpetición y técnica (clases particulares) si se viera
                      necesario.
                    </p>
                    <p>
                      <strong className="font-semibold text-neutral-900">
                        **
                      </strong>{' '}
                      Debido a la necesidad se concretarán el numero de horas y
                      su organización en función de las necesidades del
                      profesional, compaginando con el/la profesor/a de técnica
                      vocal y el/la de correpetición
                    </p>
                  </div>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
