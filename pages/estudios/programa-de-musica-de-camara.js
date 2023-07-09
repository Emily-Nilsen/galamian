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
    description: `Este programa está diseñado específicamente para formaciones camerísticas ya establecidas.`,
  },
  {
    description: `Se ofrece un enfoque continuo, detallado y profundo del repertorio de música de cámara.`,
  },
  {
    description: `En las clases se abordarán obras extensas que permitirán un proceso de estudio y ensayo adecuado.`,
  },
  {
    description: `La frecuencia de las clases variará según la opción curricular elegida.`,
  },
  {
    description: `Durante el curso, se impartirán varias sesiones de clases magistrales a cargo de profesores invitados.`,
  },
  {
    description: `Además, el profesorado de la academia tendrá sesiones de lectura de la partitura general con los grupos.`,
  },
  {
    description: `Estas sesiones complementarán el aprendizaje de la obra y proporcionarán información sobre el desarrollo interpretativo basada en la experiencia de los artistas de la academia.`,
  },
];

const courseDetails = [
  {
    name: 'Modalidad A',
    specificDetails: [
      {
        especificaciones: 'Clases de música de cámara',
        cantidad: '3 clases de 1 h. 30 min. al mes',
        total: '24 clases',
      },
      {
        especificaciones: 'Clases analizar la partitura y la interpretación',
        cantidad: '2 clases de 1 h. 30 min. al semestre',
        total: '4 clases',
      },
      {
        especificaciones: 'Masterclases de interpretación',
        cantidad: '3 clases de 3 h. al año',
        total: '3 clases',
      },
    ],
  },
  {
    name: 'Modalidad B',
    specificDetails: [
      {
        especificaciones: 'Clases de música de cámara',
        cantidad: '2 clases de 1 h. 30 min. al mes',
        total: '16 clases',
      },
      {
        especificaciones: 'Clases analizar la partitura y la interpretación',
        cantidad: '2 clases de 1 h. 30 min. al semestre',
        total: '4 clases',
      },
      {
        especificaciones: 'Masterclases de interpretación',
        cantidad: '3 clases de 3 h. al año',
        total: '3 clases',
      },
    ],
  },
  {
    name: 'Incluye',
    specificDetails: [
      {
        especificaciones:
          'Concierto con 1 o 2 obras completas en unas de las salas de cámara',
        cantidad: '1 concierto al año',
        total: '1 concierto',
      },
      {
        especificaciones: 'Concierto compartido en la sala principal',
        cantidad: '1 concierto al año',
        total: '1 concierto',
      },
      {
        especificaciones:
          'Actuaciónes en eventos organizado por la academia en otros espacios',
        cantidad: 'A concretar',
        total: '',
      },
      {
        especificaciones: 'Participación en encuentros de simposium',
        cantidad: '',
        total: '',
      },
      {
        especificaciones: 'Participación en la orquesta OAG',
        cantidad: '1 encuentro cada semestre',
        total: '2 encuentros',
      },
      {
        especificaciones: 'Uso libre de las cabinas de estudio',
        cantidad: '',
        total: '',
      },
      {
        especificaciones:
          'Opción de añadir clases particulares con los profesores de la academia',
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
        especificaciones: 'Profesores invitados',
        cantidad:
          'Alexander Sitkovetsky, Robert Kowalski, Adolfo Gutiérrez, Øyvind Gimse, Gabriel Ureña, Misha Dacic, Josu de Solaun y otros',
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
        total: `4.700 €`,
      },
      {
        especificaciones: 'Precio del curso - Modalidad B',
        cantidad: '',
        total: `3.900 €`,
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

export default function ProgramaDeMusicaDeCamara() {
  return (
    <div className="py-6 bg-white sm:py-24">
      <div className="py-24 overflow-hidden bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-gold-600">
                  Desde dúos, tríos, cuartetos a agrupaciones con más
                  componentes
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Programa de Música de Cámara «Lucien Capet» - para grupos
                  formados
                </h1>
                <p className="mt-8">
                  {' '}
                  <strong className="font-semibold text-neutral-900">
                    Edad recomendada:
                  </strong>{' '}
                  edad libre
                </p>
                <p className="mt-8 text-lg leading-8 text-gray-600">
                  Siendo una seña de identidad de la Academia Galamian, la
                  música de cámara tiene ahora un lugar predominante en la
                  formación de esta institución. Para hacer el texto más
                  amigable para el lector, podemos agregar algunos puntos
                  después de esta oración:
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
                  Adicionalmente, los grupos que formen parte de este programa
                  tendrán la ocasión de presentar su repertorio en concierto en
                  diversos espacios, tanto en la sede de la Academia Galamian,
                  como en espacios externos con los que la institución tenga
                  acuerdos de colaboración, ayudando así a consolidar a las
                  agrupaciones que participen en este proyecto.
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
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Galamian/general/Programa_Musica_de_camara_qcxbt8.webp"
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
                Programa de Música de Cámara «Lucien Capet» - para grupos
                formados
              </h1>
              <p className="mt-2 text-sm text-neutral-700">
                Desde dúos, tríos, cuartetos a agrupaciones con más componentes
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
