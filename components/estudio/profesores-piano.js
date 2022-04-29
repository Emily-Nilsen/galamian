import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { CameraIcon } from '@heroicons/react/solid';

export default function ProfesoresPiano() {
  const { t } = useTranslation();

  const profesoresInvitados = [
    { nombre: `Anna Petrova` },
    { nombre: `Francesco Libetta` },
  ];
  return (
    <section id="fundadores" className="py-0 bg-white overflow-hidden lg:py-0">
      <div className="bg-neutral-50">
        <div className="relative max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto text-lg max-w-prose">
              <h2 className="text-base font-semibold tracking-wide uppercase text-neutral-900">
                {t('piano:profesores_subtitle')}
              </h2>
              <h2 className="mt-2 text-left text-3xl leading-8 tracking-wide text-neutral-900 sm:text-4xl">
                {t('piano:profesores_title_part_1')}
                <span className="text-gold-600">
                  {t('piano:profesores_title_part_2')}
                </span>
                {t('piano:profesores_title_part_3')}
              </h2>
              <div className="grid sm:grid-cols-2 pt-10 pb-6 text-neutral-500 justify-between">
                <div className="sm:col-span-1 pb-6 pr-6  leading-7">
                  <h3 className="text-neutral-900 font-semibold pb-2 text-lg">
                    {t('piano:profesores_principales')}
                  </h3>
                  <ul role="list">
                    <li>Misha Dacić</li>
                    <li>Josu De Solaun</li>
                  </ul>
                </div>
                <div className="sm:col-span-1">
                  <h3 className="text-neutral-900 font-semibold pb-2 text-lg">
                    {t('piano:profesores_invitados')}
                  </h3>
                  <div className="flex gap-10 leading-8">
                    <div>
                      <ul role="list">
                        {profesoresInvitados.map((invitado) => (
                          <li key={invitado.nombre}>{invitado.nombre}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <ul role="list"></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Misha Dacić */}
      <div className="relative bg-neutral-50 py-6 sm:py-16">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 right-1/2 w-full bg-neutral-100 lg:right-72" />
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Photo*/}
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <div className="rounded-none shadow-none object-cover object-center overflow-hidden">
                    <Image
                      src="/static/profesores/misha-dacic.jpg"
                      alt="Misha Dacić"
                      width={2617}
                      height={1527}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 flex text-sm text-neutral-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-neutral-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    {t('piano:principal_profesor_male')} Misha Dacić
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <div>
                <h2 className="text-base text-gold-600 font-semibold tracking-wide uppercase">
                  {t('piano:principal_profesor_male')}
                </h2>
                <h2 className="mt-2 text-3xl leading-8 font-normal tracking-wide text-neutral-900 sm:text-4xl">
                  Misha Dacić
                </h2>
              </div>
              <div className="mt-6 text-neutral-500 space-y-6">
                <p className="text-lg">{t('common:misha_para_1')}</p>
                <p className="text-base leading-7">
                  {t('common:misha_para_2')}
                </p>
                <p className="text-base leading-7">
                  {t('common:misha_para_3')}
                </p>
                <div>
                  <a
                    href={t('common:misha_href')}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base leading-7 text-gold-600 font-semibold hover:text-neutral-900 transition duration-200 ease-in-out"
                  >
                    {t('common:misha_website')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Josu De Solaun */}
      <div className="relative bg-neutral-50 pb-16 pt-2 sm:pb-24 sm:pt-6">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 right-1/2 w-full bg-neutral-100 lg:right-72" />
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Photo*/}
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <div className="rounded-none shadow-none object-cover object-center overflow-hidden">
                    <Image
                      src="/static/profesores/josu-de-solaun.jpg"
                      alt="Josu De Solaun"
                      width={718}
                      height={419}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 flex text-sm text-neutral-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-neutral-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    {t('piano:principal_profesor_male')} Josu De Solaun
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <div>
                <h2 className="text-base text-gold-600 font-semibold tracking-wide uppercase">
                  {t('piano:principal_profesor_male')}
                </h2>
                <h2 className="mt-2 text-3xl leading-8 font-normal tracking-wide text-neutral-900 sm:text-4xl">
                  Josu De Solaun
                </h2>
              </div>
              <div className="mt-6 text-neutral-500 space-y-6">
                <p className="text-lg">{t('common:josu_para_1')}</p>
                <p className="text-base leading-7">{t('common:josu_para_2')}</p>
                <p className="text-base leading-7">{t('common:josu_para_3')}</p>
                <div>
                  <a
                    href={t('common:josu_href')}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base leading-7 text-gold-600 font-semibold hover:text-neutral-900 transition duration-200 ease-in-out"
                  >
                    {t('common:josu_website')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
