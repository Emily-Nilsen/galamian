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
    <section id="fundadores" className="py-0 overflow-hidden bg-white lg:py-0">
      <div className="bg-neutral-50">
        <div className="relative px-4 pt-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto text-lg max-w-prose">
              <h2 className="text-base font-medium tracking-tight uppercase text-neutral-900">
                {t('violin:profesores_subtitle')}
              </h2>
              <h2 className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-left text-neutral-900 sm:text-4xl">
                {t('violin:profesores_title_part_1')}
                <span className="font-bold text-gold-600">
                  {t('violin:profesores_title_part_2')}
                </span>
                {t('violin:profesores_title_part_3')}
              </h2>
              <div className="grid justify-between pt-10 pb-6 sm:grid-cols-2 text-neutral-600">
                <div className="pb-6 pr-6 leading-7 sm:col-span-1">
                  <h3 className="pb-2 text-lg font-semibold tracking-tight text-neutral-900">
                    {t('violin:profesores_principales')}
                  </h3>
                  <ul role="list">
                    <li>Jesús Reina</li>
                    <li>Anna Margrethe Nilsen</li>
                  </ul>
                  <h3 className="pt-6 pb-2 text-lg font-semibold tracking-tight text-neutral-900">
                    {t('violin:profesores_asistentes')}
                  </h3>
                  <ul role="list">
                    <li>Laura Romero</li>
                  </ul>
                </div>
                <div className="sm:col-span-1">
                  <h3 className="pb-2 text-lg font-semibold tracking-tight text-neutral-900">
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
                      src="/static/estudia/violin/jesus-photo-01.webp"
                      alt="Jesús Reina"
                      width={2367}
                      height={1381}
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
                    {t('violin:principal_profesor_male')} Jesús Reina
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
                  {t('violin:principal_profesor_male')}
                </h2>
                <h2 className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-neutral-900 sm:text-4xl">
                  Jesús Reina
                </h2>
              </div>
              <div className="mt-6 space-y-6 text-neutral-600">
                <p className="text-lg">{t('professors:jesus_para_1')}</p>
                <p className="text-base leading-7">
                  {t('professors:jesus_para_2')}
                </p>
                <p className="text-base leading-7">
                  {t('professors:jesus_para_3')}
                </p>
                <div>
                  <a
                    href={t('professors:jesus_href')}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-semibold leading-7 tracking-normal transition duration-200 ease-in-out text-gold-600 hover:text-neutral-900"
                  >
                    {t('professors:jesus_website')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Anna */}
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
                      src="/static/profesores/anna.jpg"
                      alt="Anna Margrethe Nilsen"
                      width={1497}
                      height={873}
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
                    {t('violin:principal_profesor_female')} Anna Nilsen
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
                  {t('violin:principal_profesor_female')}
                </h2>
                <h2 className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-neutral-900 sm:text-4xl">
                  Anna Nilsen
                </h2>
              </div>
              <div className="mt-6 space-y-6 text-neutral-600">
                <p className="text-lg">{t('professors:anna_para_1')}</p>
                <p className="text-base leading-7">
                  {t('professors:anna_para_2')}
                </p>
                <p className="text-base leading-7">
                  {t('professors:anna_para_3')}
                </p>
                <div>
                  <a
                    href={t('professors:anna_href')}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-semibold leading-7 tracking-normal transition duration-200 ease-in-out text-gold-600 hover:text-neutral-900"
                  >
                    {t('professors:anna_website')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laura */}
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
                      src="/static/profesores/laura-romero.jpeg"
                      alt="Laura Romero"
                      width={1497}
                      height={873}
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
                    {t('violin:profesores_asistentes')} Laura Romero
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
                  {t('violin:profesores_asistentes')}
                </h2>
                <h2 className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-neutral-900 sm:text-4xl">
                  Laura Romero
                </h2>
              </div>
              <div className="mt-6 space-y-6 text-neutral-600">
                <p className="text-lg">{t('professors:laura_para_1')}</p>
                <p className="text-base leading-7">
                  {t('professors:laura_para_2')}
                </p>
                <p className="text-base leading-7">
                  {t('professors:laura_para_3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
