import Image from 'next/image';
import { MailIcon } from '@heroicons/react/outline';
import { ExclamationIcon } from '@heroicons/react/solid';
import useTranslation from 'next-translate/useTranslation';

export default function Formulario() {
  const { t } = useTranslation();

  return (
    <section className="bg-white">
      <div>
        <div className="px-4 py-16 mx-auto -mb-8 max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div>
              <Image
                src="/static/galamian-gold-dark.svg"
                alt="Galamian logo"
                width={60}
                height={60}
                layout="fixed"
              ></Image>
            </div>
            <h2 className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-neutral-900 sm:text-4xl">
              <span className="font-bold text-gold-600">
                {t('common:title_1')}{' '}
              </span>
              {t('common:title_2')}{' '}
              <span className="font-bold text-gold-600">
                {t('common:title_3')}
              </span>
            </h2>
            <p className="max-w-xl mx-auto mt-5 text-lg text-neutral-600">
              {t('common:registration_subtitle_1')} {new Date().getFullYear()}/
              {new Date().getFullYear() + 1}
              {t('common:registration_subtitle_2')}{' '}
              {t('common:registration_subtitle_3')}{' '}
              <span className="font-bold">
                {t('common:registration_subtitle_4')} {new Date().getFullYear()}
              </span>
              {t('common:registration_subtitle_5')}
            </p>
          </div>
          {/* Warning message */}
          <div className="pt-16">
            <div className="p-4 rounded-md bg-yellow-50">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationIcon
                    className="w-5 h-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-semibold text-yellow-800">
                    {t('common:registration_warning')}
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>{t('common:registration_warning_text')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          action="/exito"
          subject="Formulario de Inscripcion – Academia Internacional Galamian"
          name="Formulario de Inscripcion AIG"
          data-netlify="true"
          method="POST"
          className="space-y-8 divide-y "
        >
          <input
            type="hidden"
            name="form-name"
            value="Formulario de Inscripcion AIG"
          />
          <input
            type="hidden"
            name="subject"
            value="Formulario de Inscripcion – Academia Internacional Galamian"
          />
          <div className="space-y-8 divide-y divide-neutral-200">
            <div className="pt-8">
              <div>
                <h3 className="text-lg font-medium leading-6 tracking-tight text-neutral-900">
                  {t('common:registration_datos_personales')}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {t('common:registration_datos_personales_text')}
                </p>
              </div>
              <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    {t('common:registration_nombre')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      required
                      autoComplete="given-name"
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    {t('common:registration_apellidos')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      required
                      autoComplete="family-name"
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                {/* Identification documents */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="tipo-de-documento"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    {t('common:registration_tipo_id')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="tipo-de-documento"
                      id="tipo-de-documento"
                      required
                      autoComplete="off"
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="numero-de-documento"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    {t('common:registration_numero_id')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="numero-de-documento"
                      id="numero-de-documento"
                      required
                      autoComplete="off"
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="date-of-birth"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    {t('common:registration_fecha_nacimiento')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="date"
                      name="date-of-birth"
                      id="date-of-birth"
                      required
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                      placeholder="dd/mm/aaaa"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                      placeholder={t('common:registration_email_placeholder')}
                    />
                  </div>
                </div>

                {/* Country of birth */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="pais-de-nacimiento"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    {t('common:registration_pais_nacimiento')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="pais-de-nacimiento"
                      id="pais-de-nacimiento"
                      required
                      autoComplete="off"
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="pais-de-residencia-actual"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    {t('common:registration_pais_residencia')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="pais-de-residencia-actual"
                      id="pais-de-residencia-actual"
                      required
                      autoComplete="off"
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    {t('common:registration_direccion')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      required
                      autoComplete="street-address"
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    {t('common:registration_ciudad')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      required
                      autoComplete="address-level2"
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    {t('common:registration_provincia')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      required
                      autoComplete="address-level1"
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    {t('common:registration_postcode')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="postal-code"
                      id="postal-code"
                      required
                      autoComplete="postal-code"
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    {t('common:registration_mobile')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="telefono"
                      id="telefono"
                      required
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Datos del/la responsable */}
            <div className="pt-8">
              <div>
                <h3 className="text-lg font-medium leading-6 tracking-tight text-neutral-900">
                  {t('common:responsable_title')}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {t('common:responsable_subtitle')}
                </p>
              </div>
              <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    {t('common:registration_nombre')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    {t('common:registration_apellidos')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                {/* Cargo */}
                <div className="sm:col-span-6">
                  <label
                    htmlFor="cargo-de-responsabilidad"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    {t('common:responsable_cargo')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="cargo-de-responsabilidad"
                      id="cargo-de-responsabilidad"
                      autoComplete="off"
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                      placeholder={t('common:responsable_cargo_placeholder')}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="movil"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    {t('common:registration_mobile')}
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="movil"
                      id="movil"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium tracking-tight text-neutral-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-none shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                      placeholder={t('common:registration_email_placeholder')}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div>
                <h3 className="text-lg font-medium leading-6 tracking-tight text-neutral-900">
                  {t('common:registration_estudia_title')}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {t('common:registration_estudia_subtitle')}
                </p>
              </div>
              <div className="mt-6">
                <fieldset className="mt-6">
                  <div>
                    <legend className="text-base font-medium tracking-tight text-neutral-900">
                      {t('common:registration_programa_title')}
                    </legend>
                    <p className="text-sm text-neutral-600">
                      {t('common:registration_programa_subtitle')}
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        id="estudio-violin"
                        name="programa"
                        type="radio"
                        required
                        className="w-4 h-4 focus:ring-gold-500 text-gold-600 border-neutral-300"
                      />
                      <label
                        htmlFor="estudio-violin"
                        className="block ml-3 text-sm font-medium tracking-tight text-neutral-700"
                      >
                        {t('common:registration_violin')}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="estudio-violonchelo"
                        name="programa"
                        type="radio"
                        className="w-4 h-4 focus:ring-gold-500 text-gold-600 border-neutral-300"
                      />
                      <label
                        htmlFor="estudio-violonchelo"
                        className="block ml-3 text-sm font-medium tracking-tight text-neutral-700"
                      >
                        {t('common:registration_cello')}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="estudio-piano"
                        name="programa"
                        type="radio"
                        className="w-4 h-4 focus:ring-gold-500 text-gold-600 border-neutral-300"
                      />
                      <label
                        htmlFor="estudio-piano"
                        className="block ml-3 text-sm font-medium tracking-tight text-neutral-700"
                      >
                        {t('common:registration_piano')}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="estudio-voz"
                        name="programa"
                        type="radio"
                        className="w-4 h-4 focus:ring-gold-500 text-gold-600 border-neutral-300"
                      />
                      <label
                        htmlFor="estudio-voz"
                        className="block ml-3 text-sm font-medium tracking-tight text-neutral-700"
                      >
                        {t('common:registration_voz')}
                      </label>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="mt-6">
                  <div>
                    <legend className="text-base font-medium tracking-tight text-neutral-900">
                      {t('common:registration_mode')}
                    </legend>
                    <p className="text-sm text-neutral-600">
                      {t('common:registration_mode_text')}
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        id="modalidad-a"
                        name="modalidad"
                        type="radio"
                        required
                        className="w-4 h-4 focus:ring-gold-500 text-gold-600 border-neutral-300"
                      />
                      <label
                        htmlFor="modalidad-a"
                        className="block ml-3 text-sm font-medium tracking-tight text-neutral-700"
                      >
                        A
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="modalidad-b"
                        name="modalidad"
                        type="radio"
                        className="w-4 h-4 focus:ring-gold-500 text-gold-600 border-neutral-300"
                      />
                      <label
                        htmlFor="modalidad-b"
                        className="block ml-3 text-sm font-medium tracking-tight text-neutral-700"
                      >
                        B
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="modalidad-c"
                        name="modalidad"
                        type="radio"
                        className="w-4 h-4 focus:ring-gold-500 text-gold-600 border-neutral-300"
                      />
                      <label
                        htmlFor="modalidad-c"
                        className="block ml-3 text-sm font-medium tracking-tight text-neutral-700"
                      >
                        C
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="modalidad-galamian-junior"
                        name="modalidad"
                        type="radio"
                        className="w-4 h-4 focus:ring-gold-500 text-gold-600 border-neutral-300"
                      />
                      <label
                        htmlFor="modalidad-galamian-junior"
                        className="block ml-3 text-sm font-medium tracking-tight text-neutral-700"
                      >
                        Galamian Junior
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

            {/* Video */}
            <div className="pt-8">
              <div>
                <div>
                  <h3 className="text-lg font-medium leading-6 tracking-tight text-neutral-900">
                    {t('common:video_title')}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    {t('common:video_subtitle_start')}{' '}
                    {new Date().getFullYear()}/{new Date().getFullYear() + 1}{' '}
                    {t('common:video_subtitle_end')}
                  </p>
                  <p className="mt-4 text-sm text-neutral-600">
                    {t('common:video_text')}
                  </p>
                </div>

                <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="link-1"
                      className="block text-sm font-medium tracking-tight text-neutral-700"
                    >
                      Link 1
                    </label>
                    <div className="flex mt-1 rounded-none shadow-none">
                      <input
                        type="url"
                        name="link-1"
                        id="link-1"
                        required
                        className="flex-1 block w-full min-w-0 px-3 py-2 rounded-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                        placeholder={t('common:video_url_placeholder')}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="link-2"
                      className="block text-sm font-medium tracking-tight text-neutral-700"
                    >
                      Link 2
                    </label>
                    <div className="flex mt-1 rounded-none shadow-none">
                      <input
                        type="url"
                        name="link-2"
                        id="link-2"
                        required
                        className="flex-1 block w-full min-w-0 px-3 py-2 rounded-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                        placeholder={t('common:video_url_placeholder')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents & motivational video */}
            <div className="pt-8">
              <div>
                <div>
                  <h3 className="text-lg font-medium leading-6 tracking-tight text-neutral-900">
                    {t('common:documentos_title')}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    {t('common:documentos_subtitle')}
                  </p>

                  <fieldset className="mt-6">
                    <div className="space-y-4">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="video"
                            name="video"
                            type="checkbox"
                            required
                            className="w-4 h-4 rounded focus:ring-gold-500 text-gold-600 border-neutral-300"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="video"
                            className="font-medium tracking-tight text-neutral-700"
                          >
                            {t('common:video_motivation_title')}
                          </label>
                          <p className="text-neutral-600">
                            {t('common:video_motivation_text')}
                          </p>
                          {/* Video de motivación */}
                          <div className="mt-3 sm:col-span-4 md:w-2/3">
                            <label
                              htmlFor="video-motivacion"
                              className="block text-sm font-medium tracking-tight text-neutral-700"
                            >
                              {t('common:add_link')}
                            </label>
                            <div className="flex mt-1 rounded-none shadow-none">
                              <input
                                type="url"
                                name="video-motivacion"
                                id="video-motivacion"
                                required
                                className="flex-1 block w-full min-w-0 px-3 py-2 rounded-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                                placeholder={t('common:video_url_placeholder')}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Biografia */}
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="biografia"
                            name="biografia"
                            type="checkbox"
                            required
                            className="w-4 h-4 rounded focus:ring-gold-500 text-gold-600 border-neutral-300"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="biografia"
                            className="font-medium tracking-tight text-neutral-700"
                          >
                            {t('common:cv_title')}
                          </label>
                          <p className="text-neutral-600 sm:col-span-6">
                            {t('common:cv_text')}
                          </p>

                          <div className="pt-4 sm:col-span-6">
                            <label
                              htmlFor="cv"
                              className="block text-sm font-medium tracking-tight text-neutral-700"
                            >
                              {t('common:attach_cv')}
                            </label>
                            <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-dashed rounded-none border-neutral-300 sm:col-span-6">
                              <div className="space-y-1 text-center">
                                <svg
                                  className="w-12 h-12 mx-auto text-neutral-400"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <div className="flex text-sm text-neutral-600">
                                  <label
                                    htmlFor="cv-upload"
                                    className="relative font-medium tracking-tight bg-white rounded-none cursor-pointer text-gold-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gold-500"
                                  >
                                    <span className="transition duration-300 ease-in-out hover:underline">
                                      {t('common:upload_cv')}
                                    </span>
                                    <input
                                      id="cv-upload"
                                      name="cv-upload"
                                      type="file"
                                      required
                                      accept=".doc,.pdf,.docx,.txt,.jpg,.jpeg,"
                                      multiple
                                      className="sr-only"
                                    />
                                  </label>
                                  <h3 className="pl-1 font-normal tracking-tight">
                                    {t('common:dragdop_cv')}
                                  </h3>
                                </div>
                                <p className="text-xs text-neutral-600">
                                  {t('common:file_type')}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex items-start pt-2">
                        <div className="flex items-center h-5">
                          <input
                            id="renta"
                            name="renta"
                            type="checkbox"
                            className="w-4 h-4 rounded focus:ring-gold-500 text-gold-600 border-neutral-300"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="renta"
                            className="font-medium tracking-tight text-neutral-700"
                          >
                            {t('common:renta_familiar')}
                          </label>
                          <p className="text-neutral-600">
                            {t('common:renta_familiar_text')}
                          </p>
                          {/* Renta familiar */}
                          <div className="pt-4 sm:col-span-6">
                            <label
                              htmlFor="renta-familiar"
                              className="block text-sm font-medium tracking-tight text-neutral-700"
                            >
                              {t('common:attach_renta_familiar')}
                            </label>
                            <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-dashed rounded-none border-neutral-300 sm:col-span-6">
                              <div className="space-y-1 text-center">
                                <svg
                                  className="w-12 h-12 mx-auto text-neutral-400"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <div className="flex text-sm text-neutral-600">
                                  <label
                                    htmlFor="renta-familiar-upload"
                                    className="relative font-medium tracking-tight transition duration-300 ease-in-out bg-white rounded-none cursor-pointer text-gold-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gold-500"
                                  >
                                    <span className="transition duration-300 ease-in-out hover:underline">
                                      {t('common:upload_cv')}
                                    </span>
                                    <input
                                      id="renta-familiar-upload"
                                      name="renta-familiar-upload"
                                      type="file"
                                      accept=".doc,.pdf,.docx,.txt,.jpg,.jpeg,"
                                      multiple
                                      className="sr-only"
                                    />
                                  </label>
                                  <h3 className="pl-1 font-normal tracking-tight">
                                    {t('common:dragdop_cv')}
                                  </h3>
                                </div>
                                <p className="text-xs text-neutral-600">
                                  {t('common:file_type')}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="video-links"
                            name="video-links"
                            type="checkbox"
                            required
                            className="w-4 h-4 rounded focus:ring-gold-500 text-gold-600 border-neutral-300"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="video-links"
                            className="font-medium tracking-tight text-neutral-700"
                          >
                            {t('common:video_links')}
                          </label>
                          <p className="text-neutral-600">
                            {t('common:video_links_text')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            {/* Becas y reducciones de matrícula */}
            <div className="pt-8">
              <div>
                <div>
                  <h3 className="text-lg font-medium leading-6 tracking-tight text-neutral-900">
                    {t('common:becas_title')}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    {t('common:becas_text')}
                  </p>

                  <fieldset className="mt-6">
                    <div className="space-y-4">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="renta"
                            name="renta"
                            type="checkbox"
                            className="w-4 h-4 rounded focus:ring-gold-500 text-gold-600 border-neutral-300"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="renta"
                            className="font-medium tracking-tight text-neutral-700"
                          >
                            {t('common:solicito_1')}
                          </label>
                          <p className="text-neutral-600">
                            {t('common:solicito_1_text')}
                          </p>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="video-links"
                            name="video-links"
                            type="checkbox"
                            className="w-4 h-4 rounded focus:ring-gold-500 text-gold-600 border-neutral-300"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="video-links"
                            className="font-medium tracking-tight text-neutral-700"
                          >
                            {t('common:solicitio_2')}
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            {/* Reconocimiento */}
            <div className="pt-8">
              <div>
                <div>
                  <h3 className="text-lg font-medium leading-6 tracking-tight text-neutral-900">
                    {t('common:reconocimiento')}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    {t('common:reconocimiento_text')}
                  </p>

                  <fieldset className="mt-6">
                    <div className="space-y-4">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="reconocimiento"
                            name="reconocimiento"
                            type="checkbox"
                            required
                            className="w-4 h-4 rounded focus:ring-gold-500 text-gold-600 border-neutral-300"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="reconocimiento"
                            className="font-medium tracking-tight text-neutral-700"
                          >
                            {t('common:consent')}
                          </label>
                          <div className="mt-3 sm:w-1/4">
                            <label
                              htmlFor="fecha"
                              className="block text-sm font-medium tracking-tight text-neutral-700"
                            >
                              {t('common:date')}
                            </label>
                            <div className="mt-1">
                              <input
                                type="date"
                                name="fecha"
                                id="fecha"
                                required
                                className="block w-full rounded-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                                placeholder="dd/mm/aaaa"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="items-center px-4 py-2 text-sm font-medium tracking-tight transition duration-300 ease-in-out bg-white border rounded-none shadow-none border-neutral-300 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
              >
                {t('common:cancel_button')}
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 ml-3 text-sm font-medium tracking-tight text-white transition duration-300 ease-in-out border border-transparent rounded-none shadow-none bg-gold-600 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
              >
                {t('common:submit_button')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
