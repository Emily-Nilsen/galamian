import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { CameraIcon } from '@heroicons/react/solid';

export default function ProfesoresVoz() {
  const { t } = useTranslation();

  const profesoresInvitados = [
    { nombre: `Anna Petrova` },
    { nombre: `Francesco Libetta` },
  ];
  return (
    <section id="fundadores" className="py-0 overflow-hidden bg-white lg:py-0">
      <div className="bg-neutral-50">
        <div className="relative px-4 pt-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto text-lg max-w-prose">
              <h2 className="text-base font-semibold tracking-wide uppercase text-neutral-900">
                {t('voz:profesores_subtitle')}
              </h2>
              <h2 className="mt-2 text-3xl leading-8 tracking-wide text-left text-neutral-900 sm:text-4xl">
                {t('voz:profesores_title_part_1')}
                <span className="text-gold-600">
                  {t('voz:profesores_title_part_2')}
                </span>
                {t('voz:profesores_title_part_3')}
              </h2>
              <div className="grid justify-between pt-10 pb-6 sm:grid-cols-2 text-neutral-500">
                <div className="pb-6 pr-6 leading-7 sm:col-span-1">
                  <h3 className="pb-2 text-lg font-semibold text-neutral-900">
                    {t('voz:profesores_principales')}
                  </h3>
                  <ul role="list">
                    <li>Misha Dacić</li>
                    <li>Josu De Solaun</li>
                  </ul>
                </div>
                <div className="sm:col-span-1">
                  <h3 className="pb-2 text-lg font-semibold text-neutral-900">
                    {t('voz:profesores_invitados')}
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
      <div className="relative py-6 bg-neutral-50 sm:py-16">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 w-full right-1/2 bg-neutral-100 lg:right-72" />
            </div>
            <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Photo*/}
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <div className="object-cover object-center overflow-hidden rounded-none shadow-lg">
                    <Image
                      src="/static/profesores/misha-dacic.jpg"
                      alt="Misha Dacić"
                      width={2414}
                      height={1527}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                <figcaption className="flex mt-3 text-sm text-neutral-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-neutral-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    {t('voz:principal_profesor_male')} Misha Dacić
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <div>
                <h2 className="text-base font-semibold tracking-wide uppercase text-gold-600">
                  {t('voz:principal_profesor_male')}
                </h2>
                <h2 className="mt-2 text-3xl font-normal leading-8 tracking-wide text-neutral-900 sm:text-4xl">
                  Misha Dacić
                </h2>
              </div>
              <div className="mt-6 space-y-6 text-neutral-500">
                <p className="text-lg">{t('common:misha_para_1')}</p>
                <p className="text-base leading-7">
                  {t('common:misha_para_2')}
                </p>
                <p className="text-base leading-7">
                  {t('common:misha_para_3')}
                </p>
                <p className="text-base leading-7">
                  {t('common:misha_para_4')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Josu De Solaun */}
      <div className="relative pt-2 pb-16 bg-neutral-50 sm:pb-24 sm:pt-6">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 w-full right-1/2 bg-neutral-100 lg:right-72" />
            </div>
            <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Photo*/}
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <div className="object-cover object-center overflow-hidden rounded-none shadow-lg">
                    <Image
                      src="/static/profesores/josu-de-solaun.jpg"
                      alt="Josu De Solaun"
                      width={652}
                      height={419}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                <figcaption className="flex mt-3 text-sm text-neutral-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-neutral-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    {t('voz:principal_profesor_male')} Josu De Solaun
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <div>
                <h2 className="text-base font-semibold tracking-wide uppercase text-gold-600">
                  {t('voz:principal_profesor_male')}
                </h2>
                <h2 className="mt-2 text-3xl font-normal leading-8 tracking-wide text-neutral-900 sm:text-4xl">
                  Josu De Solaun
                </h2>
              </div>
              <div className="mt-6 space-y-6 text-neutral-500">
                <p className="text-lg">{t('common:josu_para_1')}</p>
                <p className="text-base leading-7">{t('common:josu_para_2')}</p>
                <p className="text-base leading-7">{t('common:josu_para_3')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}