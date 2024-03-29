import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { CameraIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

export default function ProfesoresPiano() {
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
              <h2 className="text-base font-medium tracking-tight uppercase text-neutral-900">
                {t('piano:profesores_subtitle')}
              </h2>
              <h2 className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-left text-neutral-900 sm:text-4xl">
                {t('piano:profesores_title_part_1')}
                <span className="font-bold text-gold-600">
                  {t('piano:profesores_title_part_2')}
                </span>
                {t('piano:profesores_title_part_3')}
              </h2>
              <div className="grid justify-between pt-10 pb-6 sm:grid-cols-2 text-neutral-600">
                <div className="pb-6 pr-6 leading-7 sm:col-span-1">
                  <h3 className="pb-2 text-lg font-semibold tracking-tight text-neutral-900">
                    {t('piano:profesores_principales')}
                  </h3>
                  <ul role="list">
                    <li>Misha Dacić</li>
                    <li>Josu De Solaun</li>
                    <li>Antonio Ortíz</li>
                  </ul>
                </div>
                <div className="sm:col-span-1">
                  <h3 className="pb-2 text-lg font-semibold tracking-tight text-neutral-900">
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
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      type: 'fade',
                      ease: 'easeIn',
                    }}
                    className="object-cover object-center overflow-hidden rounded-none shadow-none"
                  >
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653713746/Galamian/professors/misha-dacic_dzbvuh.jpg"
                      alt="Misha Dacić"
                      width={2617}
                      height={1527}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                      unoptimized={true}
                    />
                  </motion.div>
                </div>
                <figcaption className="flex mt-3 text-sm text-neutral-700">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gold-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    {t('piano:principal_profesor_male')} Misha Dacić
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
                  {t('piano:principal_profesor_male')}
                </h2>
                <h2 className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-neutral-900 sm:text-4xl">
                  Misha Dacić
                </h2>
              </div>
              <div className="mt-6 space-y-6 text-neutral-600">
                <p className="text-lg">{t('professors:misha_para_1')}</p>
                <p className="text-base leading-7">
                  {t('professors:misha_para_2')}
                </p>
                <p className="text-base leading-7">
                  {t('professors:misha_para_3')}
                </p>
                <div>
                  <a
                    href={t('professors:misha_href')}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-semibold leading-7 tracking-normal transition duration-200 ease-in-out text-gold-600 hover:text-neutral-900"
                  >
                    {t('professors:misha_website')}
                  </a>
                </div>
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
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      type: 'fade',
                      ease: 'easeIn',
                    }}
                    className="object-cover object-center overflow-hidden rounded-none shadow-none"
                  >
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653713746/Galamian/professors/josu-de-solaun_f2ssfq.jpg"
                      alt="Josu De Solaun"
                      width={718}
                      height={419}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                      unoptimized={true}
                    />
                  </motion.div>
                </div>
                <figcaption className="flex mt-3 text-sm text-neutral-700">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gold-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    {t('piano:principal_profesor_male')} Josu De Solaun
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
                  {t('piano:principal_profesor_male')}
                </h2>
                <h2 className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-neutral-900 sm:text-4xl">
                  Josu De Solaun
                </h2>
              </div>
              <div className="mt-6 space-y-6 text-neutral-600">
                <p className="text-lg">{t('professors:josu_para_1')}</p>
                <p className="text-base leading-7">
                  {t('professors:josu_para_2')}
                </p>
                <p className="text-base leading-7">
                  {t('professors:josu_para_3')}
                </p>
                <div>
                  <a
                    href={t('professors:josu_href')}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-semibold leading-7 tracking-normal transition duration-200 ease-in-out text-gold-600 hover:text-neutral-900"
                  >
                    {t('professors:josu_website')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Antonio Ortiz */}
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
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      type: 'fade',
                      ease: 'easeIn',
                    }}
                    className="object-cover object-center overflow-hidden rounded-none shadow-none"
                  >
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653713744/Galamian/professors/antonio-ortiz_xgrpit.webp"
                      alt="Antonio Ortíz"
                      width={718}
                      height={419}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                      unoptimized={true}
                    />
                  </motion.div>
                </div>
                <figcaption className="flex mt-3 text-sm text-neutral-700">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gold-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    {t('piano:principal_profesor_male')} Antonio Ortíz
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
                  {t('piano:principal_profesor_male')}
                </h2>
                <h2 className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-neutral-900 sm:text-4xl">
                  Antonio Ortíz
                </h2>
              </div>
              <div className="mt-6 space-y-6 text-neutral-600">
                <p className="text-lg">{t('professors:antonio_para_1')}</p>
                <p className="text-base leading-7">
                  {t('professors:antonio_para_2')}
                </p>
                <p className="text-base leading-7">
                  {t('professors:antonio_para_3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
