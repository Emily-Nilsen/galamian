import Image from 'next/image';
import Link from 'next/link';
import { ExclamationIcon } from '@heroicons/react/solid';
import Requisitos from '../../components/estudio/requisitos';
import CTA from '../../components/estudio/cta';
import useTranslation from 'next-translate/useTranslation';

const Audiciones = () => {
  const { t } = useTranslation();
  return (
    <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="lg:relative">
        <div className="w-full py-16 max-w-7xl lg:text-left">
          <div className="lg:w-1/2 sm:px-0 xl:pr-16">
            <div className="relative max-w-xl px-0 text-left sm:px-0 lg:px-8 lg:max-w-7xl">
              <h2 className="font-medium tracking-wide text-neutral-900">
                {t('estudia:auditions_title_1')}
              </h2>
              <h2 className="mt-2 text-3xl tracking-wide sm:text-4xl">
                {t('estudia:auditions_title_2')}{' '}
                <span className="text-gold-600">
                  {' '}
                  {new Date().getFullYear()}/{new Date().getFullYear() + 1}
                </span>
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-lg text-left text-neutral-500">
                {t('estudia:auditions_subtitle_1')}
                {new Date().getFullYear()}/{new Date().getFullYear() + 1}
                {t('estudia:auditions_subtitle_2')}.
              </p>
              <div className="mt-10">
                <Link href="/estudia/formulario-de-inscripcion" passHref>
                  <a className="text-base font-medium text-gold-600">
                    {' '}
                    {t('common:button_inscribir_1')}
                    {new Date().getFullYear()}/{new Date().getFullYear() + 1}{' '}
                    {t('common:button_inscribir_2')}{' '}
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
              src="/static/estudia/audiciones.jpg"
              alt=""
              width={1280}
              height={853}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* Attention! */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pt-8">
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
                  {t('estudia:auditions_attention')}
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    {t('estudia:auditions_attention_text_1')}{' '}
                    <span className="font-bold">
                      {t('estudia:auditions_attention_text_2')}
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
      {/* Estudios y audiciones */}
      <div className="py-16 xl:py-36 px-0 sm:px-0 lg:px-0 bg-white overflow-hidden">
        <div className="max-w-max lg:max-w-7xl mx-auto">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <h2 className="leading-6 text-gold-600 font-semibold tracking-wide uppercase">
                {t('estudia:access_title_1')}
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
                {t('estudia:access_title_2')}
              </p>
            </div>
          </div>
          <div className="relative">
            <svg
              className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="95e8f2de-6d30-4b7e-8159-f791729db21b"
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
                fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
              />
            </svg>
            <svg
              className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
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
                fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
              />
            </svg>
            <div className="relative md:bg-white md:p-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="prose prose-gold prose-lg text-neutral-500 lg:max-w-none">
                  <p>{t('estudia:access_para_1')}</p>

                  <ul role="list">
                    <li>
                      <Link href="/estudia/violin" passHref>
                        <a className="text-gold-600 hover:text-gold-500 transition duration-200 ease-in-out">
                          {t('estudia:access_violin')}
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/estudia/piano" passHref>
                        <a className="text-gold-600 hover:text-gold-500 transition duration-200 ease-in-out">
                          {t('estudia:access_piano')}
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/estudia/violonchelo" passHref>
                        <a className="text-gold-600 hover:text-gold-500 transition duration-200 ease-in-out">
                          {t('estudia:access_cello')}
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/estudia/voz" passHref>
                        <a className="text-gold-600 hover:text-gold-500 transition duration-200 ease-in-out">
                          {t('estudia:access_voice')}
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 prose prose-gold prose-lg text-neutral-500 lg:mt-0">
                  <p>{t('estudia:access_para_2')}</p>
                  <p>
                    {t('estudia:access_para_3_1')}{' '}
                    <span className="font-bold">
                      {t('estudia:access_para_3_2')}
                    </span>{' '}
                    {t('estudia:access_para_3_3')}{' '}
                    <Link href="/estudia/formulario-de-inscripcion" passHref>
                      <a className="text-gold-600 hover:text-gold-500 transition duration-200 ease-in-out">
                        {t('estudia:access_para_3_4')}
                      </a>
                    </Link>
                    {t('estudia:access_para_3_5')}
                    <span className="font-bold">
                      {t('estudia:access_para_3_6')}
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Requisitos />
      <div className="-mt-16">
        <CTA />
      </div>
    </main>
  );
};

export default Audiciones;
