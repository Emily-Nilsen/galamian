import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { CameraIcon } from '@heroicons/react/solid';

export default function ProfesoresViolin() {
  const { t } = useTranslation();

  const profesoresInvitados = [
    { nombre: `Grigory Kalinovsky` },
    { nombre: `Alexander Sitkovetsky` },
    { nombre: `Molly Carr` },
    { nombre: `Alfredo García` },
    { nombre: `Koh Gabriel Kameda` },
    { nombre: `Joaquín Riquelme` },
    { nombre: `Jordán Tejedor` },
    { nombre: `Salvador Esteve` },
  ];
  return (
    <section id="fundadores" className="py-0 bg-white overflow-hidden lg:py-0">
      <div className="bg-neutral-50">
        <div className="relative max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto text-lg max-w-prose">
              <h2 className="text-base font-semibold tracking-wide uppercase text-neutral-900">
                {t('violin:profesores_subtitle')}
              </h2>
              <h2 className="mt-2 text-left text-3xl leading-8 tracking-wide text-neutral-900 sm:text-4xl">
                {t('violin:profesores_title_part_1')}
                <span className="text-gold-600">
                  {t('violin:profesores_title_part_2')}
                </span>
                {t('violin:profesores_title_part_3')}
              </h2>
              <div className="grid sm:grid-cols-2 pt-10 pb-6 text-neutral-500 justify-between">
                <div className="sm:col-span-1 pb-6 pr-6  leading-7">
                  <h3 className="text-neutral-900 font-semibold pb-2 text-lg">
                    {t('violin:profesores_principales')}
                  </h3>
                  <ul role="list">
                    <li>Jesús Reina</li>
                    <li>Anna Margrethe Nilsen</li>
                  </ul>
                  <h3 className="text-neutral-900 font-semibold pb-2 pt-6 text-lg">
                    {t('violin:profesores_asistentes')}
                  </h3>
                  <ul role="list">
                    <li>Laura Romero</li>
                  </ul>
                </div>
                <div className="sm:col-span-1">
                  <h3 className="text-neutral-900 font-semibold pb-2 text-lg">
                    {t('violin:profesores_invitados')}
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
      {/* Jesus */}
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
                  <div className="rounded-none shadow-lg object-cover object-center overflow-hidden">
                    <Image
                      src="/static/estudia/jesus-violin-img-1.jpg"
                      alt="Jesús Reina"
                      width={4239}
                      height={3903}
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
                    {t('violin:principal_profesor_male')} Jesús Reina
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
                  {t('violin:principal_profesor_male')}
                </h2>
                <h2 className="mt-2 text-3xl leading-8 font-normal tracking-wide text-neutral-900 sm:text-4xl">
                  Jesús Reina
                </h2>
              </div>
              <div className="mt-6 text-neutral-500 space-y-6">
                <p className="text-lg">{t('common:jesus_para_1')}</p>
                <p className="text-base leading-7">
                  {t('common:jesus_para_2')}
                </p>
                <p className="text-base leading-7">
                  {t('common:jesus_para_3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Anna */}
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
                  <div className="rounded-none shadow-lg object-cover object-center overflow-hidden">
                    <Image
                      src="/static/estudia/anna-violin-3.jpg"
                      alt="Anna Margrethe Nilsen"
                      width={6000}
                      height={4000}
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
                    {t('violin:principal_profesor_female')} Anna Margrethe
                    Nilsen
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
                  {t('violin:principal_profesor_female')}
                </h2>
                <h2 className="mt-2 text-3xl leading-8 font-normal tracking-wide text-neutral-900 sm:text-4xl">
                  Anna Margrethe Nilsen
                </h2>
              </div>
              <div className="mt-6 text-neutral-500 space-y-6">
                <p className="text-lg">{t('common:anna_para_1')}</p>
                <p className="text-base leading-7">{t('common:anna_para_2')}</p>
                <p className="text-base leading-7">{t('common:anna_para_3')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
