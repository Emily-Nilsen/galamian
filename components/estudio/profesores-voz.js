import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { CameraIcon } from '@heroicons/react/solid';

export default function ProfesoresVoz() {
  const { t } = useTranslation();

  const profesoresInvitados = [
    { nombre: `Joel Prieto` },
    { nombre: `Francisco Araiza` },
    { nombre: `Mariola Cantarero` },
  ];
  return (
    <section id="fundadores" className="py-0 overflow-hidden bg-white lg:py-0">
      <div className="bg-neutral-50">
        <div className="relative px-4 pt-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto text-lg max-w-prose">
              <h2 className="text-base font-medium tracking-tight uppercase text-neutral-900">
                {t('voz:profesores_subtitle')}
              </h2>
              <h2 className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-left text-neutral-900 sm:text-4xl">
                {t('voz:profesores_title_part_1')}
                <span className="font-bold text-gold-600">
                  {t('voz:profesores_title_part_2')}
                </span>
                {t('voz:profesores_title_part_3')}
              </h2>
              <div className="grid justify-between pt-10 pb-6 sm:grid-cols-2 text-neutral-600">
                <div className="pb-6 pr-6 leading-7 sm:col-span-1">
                  <h3 className="pb-2 text-lg font-semibold text-neutral-900">
                    {t('voz:profesores_principales')}
                  </h3>
                  <ul role="list">
                    <li>Nils Georg Nilsen</li>
                  </ul>
                  <h3 className="pt-6 pb-2 text-lg font-semibold text-neutral-900">
                    {t('voz:profesores_repertorista')}
                  </h3>
                  <ul role="list">
                    <li>Sergio Montero</li>
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
      {/* Nils Georg Nilsen */}
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
                  <div className="object-cover object-center overflow-hidden rounded-none shadow-none">
                    <Image
                      src="/static/profesores/nils-nilsen.webp"
                      alt="Nils Georg Nilsen"
                      width={1830}
                      height={1068}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                <figcaption className="flex mt-3 text-sm text-neutral-700">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gold-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    {t('voz:principal_profesor_male')} Nils Nilsen
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <div>
                <h2 className="text-base font-medium tracking-tight uppercase text-gold-600">
                  {t('voz:principal_profesor_male')}
                </h2>
                <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-neutral-900 sm:text-4xl">
                  Nils Nilsen
                </h2>
              </div>
              <div className="mt-6 space-y-6 text-neutral-600">
                <p className="text-lg">{t('professors:nils_para_1')}</p>
                <p className="text-base leading-7">
                  {t('professors:nils_para_2')}
                </p>
                <p className="text-base leading-7">
                  {t('professors:nils_para_3')}
                </p>
                <div>
                  <a
                    href={t('professors:nils_href')}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-semibold leading-7 tracking-normal transition duration-200 ease-in-out text-gold-600 hover:text-neutral-900"
                  >
                    {t('professors:nils_website')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sergio Montero */}
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
                  <div className="object-cover object-center overflow-hidden rounded-none shadow-none">
                    <Image
                      src="/static/profesores/sergio-montero.webp"
                      alt="Sergio Montero"
                      width={987}
                      height={576}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                <figcaption className="flex mt-3 text-sm text-neutral-700">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gold-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    {t('voz:profesores_repertorista')} Sergio Montero
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <div>
                <h2 className="text-base font-medium tracking-tight uppercase text-gold-600">
                  {t('voz:profesores_repertorista')}
                </h2>
                <h2 className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-neutral-900 sm:text-4xl">
                  Sergio Montero
                </h2>
              </div>
              <div className="mt-6 space-y-6 text-neutral-600">
                <p className="text-lg">{t('professors:sergio_para_1')}</p>
                <p className="text-base leading-7">
                  {t('professors:sergio_para_2')}
                </p>
                <p className="text-base leading-7">
                  {t('professors:sergio_para_3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
