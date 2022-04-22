import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { ExclamationIcon } from '@heroicons/react/solid';
import { CheckIcon } from '@heroicons/react/outline';
import ProfesoresVioloncelo from '../../components/estudio/profesores-violoncelo';
import ViolonceloRequisitos from '../../components/estudio/violin-requisitos';

export default function Violoncelo() {
  const { t } = useTranslation();

  const modes = [
    {
      name: `${t('common:estudio_list_ano_magistrales')}`,
      modeA: `64`,
      modeB: `48`,
      modeC: `32`,
    },
    {
      name: `${t('common:estudio_list_profesores_invitados')}`,
      modeA: `2`,
      modeB: `2`,
      modeC: `1`,
    },
    {
      name: `${t('common:estudio_list_rendimiento')}`,
      modeA: `10`,
      modeB: `10`,
      modeC: `10`,
    },
    {
      name: `${t('common:estudio_list_camara')}`,
      modeA: `14`,
      modeB: `14`,
      modeC: `14`,
    },
    {
      name: `${t('common:estudio_list_eConferencias')}`,
      modeA: <CheckIcon className="absolute h-6 w-6 text-lime-500" />,
      modeB: <CheckIcon className="absolute h-6 w-6 text-lime-500" />,
      modeC: <CheckIcon className="absolute h-6 w-6 text-lime-500" />,
    },
    {
      name: `${t('common:estudio_list_distancia')}`,
      modeA: <CheckIcon className="absolute h-6 w-6 text-lime-500" />,
      modeB: <CheckIcon className="absolute h-6 w-6 text-lime-500" />,
      modeC: <CheckIcon className="absolute h-6 w-6 text-lime-500" />,
    },
    {
      name: `${t('common:estudio_list_conciertos_camara')}`,
      modeA: `2`,
      modeB: `2`,
      modeC: `2`,
    },
    {
      name: `${t('common:estudio_list_conciertos_alumnos')}`,
      modeA: `2`,
      modeB: `2`,
      modeC: `2`,
    },
    {
      name: `${t('common:estudio_list_recital_propia')}`,
      modeA: <CheckIcon className="absolute h-6 w-6 text-lime-500" />,
      modeB: <CheckIcon className="absolute h-6 w-6 text-lime-500" />,
      modeC: <CheckIcon className="absolute h-6 w-6 text-lime-500" />,
    },
    {
      name: `${t('common:estudio_list_repertoristas')}`,
      modeA: <CheckIcon className="absolute h-6 w-6 text-lime-500" />,
      modeB: <CheckIcon className="absolute h-6 w-6 text-lime-500" />,
      modeC: <CheckIcon className="absolute h-6 w-6 text-lime-500" />,
    },
    {
      name: `${t('common:estudio_list_matricula')}`,
      modeA: `${t('common:estudio_list_fee_1')}`,
      modeB: `${t('common:estudio_list_fee_2')}`,
      modeC: `${t('common:estudio_list_fee_3')}`,
    },
  ];

  return (
    <section>
      <div className="bg-white">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-neutral-900">
              {t('common:programas_subtitle')}
            </h2>
            <h1 className="mt-1 text-4xl font-normal text-neutral-900 sm:text-5xl sm:tracking-wide lg:text-6xl">
              {t('common:programas_title')}{' '}
              <span className="text-gold-600"> {t('violoncelo:title')}</span>
            </h1>
            <p className="max-w-xl mx-auto mt-5 text-xl text-neutral-500">
              {t('violoncelo:text_part_1')} {new Date().getFullYear()}/
              {new Date().getFullYear() + 1}
              {t('violoncelo:text_part_2')}.
            </p>
            {/* Attention! */}
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-left pt-6 sm:pt-10">
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
                        {t('common:atencion_title')}
                      </h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>
                          {t('common:atencion_text_part_1')}{' '}
                          <span className="font-bold">
                            {t('common:atencion_text_part_2')}{' '}
                            {new Date().getFullYear()}{' '}
                          </span>
                          {t('common:atencion_text_violoncelo')}{' '}
                          <span className="font-bold">
                            {t('common:atencion_text_part_4')}{' '}
                            {new Date().getFullYear()}
                          </span>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-neutral-50">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <div className="relative object-cover w-full h-56 lg:absolute lg:h-full">
              <Image
                src="/static/estudia/violoncelo-study-hero.jpg"
                alt="Estudio de Violoncelo"
                width={6240}
                height={4160}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
        <div className="relative px-4 pt-12 pb-16 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto text-base max-w-prose lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="leading-6 tracking-wide uppercase text-neutral-900">
                {t('common:estudiar_subtitle')}
              </h2>
              <h2 className="mt-2 text-3xl leading-8 tracking-wide text-neutral-900 sm:text-4xl">
                {t('common:estudiar_title_part_1')}{' '}
                <span className="block text-gold-600">
                  {t('common:estudiar_title_part_2')}
                </span>
              </h2>
              <p className="mt-8 text-lg text-neutral-500">
                {t('common:estudiar_para_01')}
              </p>
              <div className="mt-5 prose text-neutral-500 prose-gold">
                <p>{t('common:estudiar_para_02')}</p>
                <p>{t('common:estudiar_para_03')}</p>
                <h3>{t('common:permite_title')}</h3>
                <ul role="list">
                  <li>{t('common:permite_list_item_01')}</li>
                  <li>{t('common:permite_list_item_02')}</li>
                  <li>{t('common:permite_list_item_03')}</li>
                  <li>{t('common:permite_list_item_04')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estudio de Violoncelo en AIG */}
      <div className="relative py-16 overflow-hidden bg-white">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full mx-auto text-lg max-w-prose"
            aria-hidden="true"
          >
            <svg
              className="absolute transform translate-x-32 top-12 left-full"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute transform translate-x-32 bottom-12 left-full"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-lg max-w-prose">
            <h1>
              <span className="block text-base font-semibold tracking-wide text-center uppercase text-gold-600">
                {t('common:estudio_subtitle')}
              </span>
              <span className="block mt-2 text-4xl font-normal leading-8 tracking-wide text-center text-neutral-900 sm:text-5xl">
                {t('common:estudio_title')}
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-neutral-500">
              {t('common:estudio_para_01_part_1_violoncelo')}{' '}
              <span className="text-gold-600 hover:text-gold-500 transition duration-200 ease-in-out hover:underline no-underline">
                <Link href="/profesores/#jesus" passHref>
                  {t('common:estudio_para_01_part_2_violoncelo')}
                </Link>{' '}
              </span>
              {t('common:estudio_para_01_part_3')}{' '}
              <span className="text-gold-600 hover:text-gold-500 transition duration-200 ease-in-out hover:underline no-underline">
                <Link href="/profesores/#anna" passHref>
                  {t('common:estudio_para_01_part_4_violoncelo')}
                </Link>{' '}
              </span>
              {t('common:estudio_para_01_part_5_violoncelo')}
            </p>
          </div>
          <div className="mx-auto mt-6 prose prose-lg prose-gold text-neutral-500">
            <p>{t('common:estudio_para_02')}</p>
            <p>
              {t('common:estudio_para_03_violoncelo')}
              {new Date().getFullYear()}
              {t('common:estudio_para_03_part_2')}
            </p>

            <ul role="list">
              <li>
                <span className="font-bold text-neutral-900">
                  {t('common:estudio_para_04_part_1')}
                </span>
                {t('common:estudio_para_04_violoncelo')}
              </li>
              <li>
                <span className="font-bold text-neutral-900">
                  {t('common:estudio_para_05_part_1')}
                </span>
                {t('common:estudio_para_05_part_2')}
              </li>
              <li className="list-none text-neutral-900">
                <CheckIcon
                  className="absolute h-6 w-6 text-lime-500"
                  aria-hidden="true"
                />
                <p className="ml-9 text-lg leading-6 font-medium text-neutral-900">
                  {t('common:estudio_para_05_part_3')}
                </p>
              </li>
              <li>
                <span className="font-bold text-neutral-900">
                  {t('common:estudio_para_06_part_1')}
                </span>
                {t('common:estudio_para_06_violoncelo')}
              </li>
              <li>
                <span className="font-bold text-neutral-900">
                  {t('common:estudio_para_07_part_1')}
                </span>
                {t('common:estudio_para_07_part_2')}
              </li>
              <li>
                <span className="font-bold text-neutral-900">
                  {t('common:estudio_para_08_part_1')}
                </span>
                {t('common:estudio_para_08_part_2')}
              </li>
              <li>
                <span className="font-bold text-neutral-900">
                  {t('common:estudio_para_09_part_1')}
                </span>
                {t('common:estudio_para_09_part_2')}
              </li>
              <li>
                <span className="font-bold text-neutral-900">
                  {t('common:estudio_para_10_part_1')}
                </span>
                {t('common:estudio_para_10_part_2')}
              </li>
              <li>
                <span className="font-bold text-neutral-900">
                  {t('common:estudio_para_11_part_1')}
                </span>
                {t('common:estudio_para_11_part_2')}
              </li>
            </ul>
            {/* Modalidad */}
            <div className="px-6">
              <div className="sm:flex sm:items-center">
                <div className="mt-2 mb-4 flex flex-col w-full">
                  <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                      <div className="overflow-hidden shadow-none ring-0 ring-black ring-opacity-5">
                        <table className="min-w-full divide-y divide-neutral-300">
                          <div className="table-caption text-lg max-w-lg">
                            <h3 className="text-neutral-500 mt-0 text-lg sm:text-xl">
                              {t('common:modalidades_table_title_violoncelo')}
                            </h3>
                          </div>
                          <thead className="bg-neutral-50">
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-neutral-900 sm:pl-6"
                              >
                                {t('common:estudio_list_modalidad')}
                              </th>

                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900"
                              >
                                A
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900"
                              >
                                B
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900"
                              >
                                C
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-neutral-200 bg-white">
                            {modes.map((mode) => (
                              <tr key={mode.name}>
                                <td className="whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 sm:pl-6">
                                  {mode.name}
                                </td>

                                <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500">
                                  {mode.modeA}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500">
                                  {mode.modeB}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500">
                                  {mode.modeC}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className="flex max-w-md -mt-4 border-t-neutral-200 border-t">
                          <div className="pr-1">*</div>
                          <div className="table-footer-group text-sm">
                            {t('common:estudio_footer')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-xl tracking-wide text-neutral-900 sm:text-2xl font-semibold">
              {t('common:estudio_para_12_part_1')}
            </h2>
            <p>{t('common:estudio_para_12_part_2')}</p>
            <p>{t('common:estudio_para_12_part_3')}</p>
            <figure>
              <div className="w-full rounded-none">
                <Image
                  src="/static/estudia/violoncelo-study-img-2.jpg"
                  alt="Estudio de Violoncelo"
                  width={3709}
                  height={2472}
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <figcaption>
                {/* Sagittis scelerisque nulla cursus in enim consectetur quam. */}
              </figcaption>
            </figure>
            <h2 className="text-xl tracking-wide text-neutral-900 sm:text-2xl font-semibold">
              {t('common:estudio_para_13_part_1')}
            </h2>
            <p>
              {t('common:estudio_para_13_part_2')}
              <Link href="/profesores">
                <a className="text-gold-600 no-underline hover:text-neutral-900 transition duration-200 ease-in-out">
                  {t('common:estudio_para_13_part_3')}
                </a>
              </Link>
              {t('common:estudio_para_13_part_4')}
            </p>
          </div>
        </div>
      </div>
      <ProfesoresVioloncelo />
      <ViolonceloRequisitos />
    </section>
  );
}
