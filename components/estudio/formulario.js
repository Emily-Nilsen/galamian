import Image from 'next/image';
import { MailIcon } from '@heroicons/react/outline';

export default function Formulario() {
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
            <h2 className="mt-2 text-3xl leading-8 tracking-wide text-neutral-900 sm:text-4xl">
              Academia Internacional{' '}
              <span className="text-gold-600">Galamian</span>
            </h2>
            <p className="max-w-xl mx-auto mt-5 text-lg text-neutral-500">
              Formulario de Inscripción en las audiciones de acceso para el
              curso {new Date().getFullYear()}/{new Date().getFullYear() + 1}.
              Fecha límite para su presentación:{' '}
              <span className="font-bold">
                30 de junio de {new Date().getFullYear()}
              </span>{' '}
              (incluido).
            </p>
          </div>
        </div>
        <form
          action="/exito"
          subject="Formulario de Inscripcion – Academia Internacional Galamian"
          name="Formulario de Inscripcion"
          data-netlify="true"
          method="POST"
          className="space-y-8 divide-y "
        >
          <input
            type="hidden"
            name="Formulario de Inscripcion"
            value="Formulario de Inscripcion"
          />
          <input
            type="hidden"
            name="subject"
            value="Formulario de Inscripcion – Academia Internacional Galamian"
          />
          <div className="space-y-8 divide-y divide-neutral-200">
            <div className="pt-8">
              <div>
                <h3 className="text-lg font-medium leading-6 text-neutral-900">
                  Datos Personales
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Use una dirección permanente donde pueda recibir correo.
                </p>
              </div>
              <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Nombre
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Apellidos
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                {/* Identification documents */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="tipo-de-documento"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Tipo de documento de identidad
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="tipo-de-documento"
                      id="tipo-de-documento"
                      autoComplete="given-name"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="numero-de-documento"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Número de documento
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="numero-de-documento"
                      id="numero-de-documento"
                      autoComplete="family-name"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="date-of-birth"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Fecha de nacimiento
                  </label>
                  <div className="mt-1">
                    <input
                      type="date"
                      name="date-of-birth"
                      id="date-of-birth"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                      placeholder="dd/mm/aaaa"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                      placeholder="usted@ejemplo.com"
                    />
                  </div>
                </div>

                {/* Country of birth */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="pais-de-nacimiento"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    País de nacimiento
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="pais-de-nacimiento"
                      id="pais-de-nacimiento"
                      autoComplete="given-name"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="pais-de-residencia-actual"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    País de residencia actual
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="pais-de-residencia-actual"
                      id="pais-de-residencia-actual"
                      autoComplete="family-name"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Dirección
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Ciudad
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Provincia
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Código postal
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Télefono móvil
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="telefono"
                      id="telefono"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Datos del/la responsable */}
            <div className="pt-8">
              <div>
                <h3 className="text-lg font-medium leading-6 text-neutral-900">
                  Datos del/la Responsable
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Sólo menores de edad.
                </p>
              </div>
              <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Nombre
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Apellidos
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                {/* Cargo */}
                <div className="sm:col-span-6">
                  <label
                    htmlFor="cargo-de-responsabilidad"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Cargo de responsabilidad
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="cargo-de-responsabilidad"
                      id="cargo-de-responsabilidad"
                      autoComplete="given-name"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                      placeholder="Madre, Padre, Tutoría..."
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="movil"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Teléfono móvil
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="movil"
                      id="movil"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md shadow-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                      placeholder="usted@ejemplo.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div>
                <h3 className="text-lg font-medium leading-6 text-neutral-900">
                  Estudia
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Información sobre su estudio preferido de elección y modo de
                  estudio.
                </p>
              </div>
              <div className="mt-6">
                <fieldset className="mt-6">
                  <div>
                    <legend className="text-base font-medium text-neutral-900">
                      Programa al que audita
                    </legend>
                    <p className="text-sm text-neutral-500">
                      Seleccione un estudio preferido de su elección.
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        id="estudio-violin"
                        name="programa"
                        type="radio"
                        className="w-4 h-4 focus:ring-gold-500 text-gold-600 border-neutral-300"
                      />
                      <label
                        htmlFor="estudio-violin"
                        className="block ml-3 text-sm font-medium text-neutral-700"
                      >
                        Estudio de Violín/Viola
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
                        className="block ml-3 text-sm font-medium text-neutral-700"
                      >
                        Estudio de Violonchelo
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
                        className="block ml-3 text-sm font-medium text-neutral-700"
                      >
                        Estudio de Piano
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
                        className="block ml-3 text-sm font-medium text-neutral-700"
                      >
                        Estudio de Voz
                      </label>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="mt-6">
                  <div>
                    <legend className="text-base font-medium text-neutral-900">
                      Modalidad
                    </legend>
                    <p className="text-sm text-neutral-500">
                      Seleccione un modo de estudio.
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        id="modalidad-a"
                        name="modalidad"
                        type="radio"
                        className="w-4 h-4 focus:ring-gold-500 text-gold-600 border-neutral-300"
                      />
                      <label
                        htmlFor="modalidad-a"
                        className="block ml-3 text-sm font-medium text-neutral-700"
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
                        className="block ml-3 text-sm font-medium text-neutral-700"
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
                        className="block ml-3 text-sm font-medium text-neutral-700"
                      >
                        C
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
                  <h3 className="text-lg font-medium leading-6 text-neutral-900">
                    Vídeo
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    Debido a la circunstancias socio-sanitarias que vive España,
                    la Academia Internacional Galamian convoca sus audiciones de
                    acceso al curso {new Date().getFullYear()}/
                    {new Date().getFullYear() + 1} de manera digital.
                  </p>
                  <p className="mt-4 text-sm text-neutral-500">
                    Para participar en ellas, se requerirá el envío de un vídeo
                    en el que se evidencie al aspirante interpretando dos obras
                    o movimientos de estilos contrastantes, de libre elección,
                    el cual deberá estar alojado en alguna plataforma digital
                    tipo YouTube o Vímeo.
                  </p>
                </div>

                <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="link-1"
                      className="block text-sm font-medium text-neutral-700"
                    >
                      Link 1
                    </label>
                    <div className="flex mt-1 rounded-md shadow-none">
                      <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md border-neutral-300 bg-neutral-50 text-neutral-500 sm:text-sm">
                        http://
                      </span>
                      <input
                        type="url"
                        name="link-1"
                        id="link-1"
                        className="flex-1 block w-full min-w-0 px-3 py-2 rounded-none rounded-r-md focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                        placeholder="www.ejemplo.com"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="link-2"
                      className="block text-sm font-medium text-neutral-700"
                    >
                      Link 2
                    </label>
                    <div className="flex mt-1 rounded-md shadow-none">
                      <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md border-neutral-300 bg-neutral-50 text-neutral-500 sm:text-sm">
                        http://
                      </span>
                      <input
                        type="url"
                        name="link-2"
                        id="link-2"
                        className="flex-1 block w-full min-w-0 px-3 py-2 rounded-none rounded-r-md focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                        placeholder="www.ejemplo.com"
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
                  <h3 className="text-lg font-medium leading-6 text-neutral-900">
                    Documentos
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    Adjuntos en el mismo mail deberán ir los siguientes
                    documentos:
                  </p>

                  <fieldset className="mt-6">
                    <div className="space-y-4">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="formulario"
                            name="formulario"
                            type="checkbox"
                            className="w-4 h-4 rounded focus:ring-gold-500 text-gold-600 border-neutral-300"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="formulario"
                            className="font-medium text-neutral-700"
                          >
                            Formulario de inscripción
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="video"
                            name="video"
                            type="checkbox"
                            className="w-4 h-4 rounded focus:ring-gold-500 text-gold-600 border-neutral-300"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="video"
                            className="font-medium text-neutral-700"
                          >
                            Vídeo de motivación
                          </label>
                          <p className="text-neutral-500">
                            El vídeo de motivación deberá ser un monólogo de
                            corta duración en el que el o la aspirante exponga
                            los motivos por los que le gustaría estudiar en la
                            Academia Internacional Galamian. Este vídeo también
                            deberá de alojarse en una plataforma tipo YouTube o
                            Vímeo.
                          </p>
                          {/* Video de motivación */}
                          <div className="mt-3 sm:col-span-4 md:w-2/3">
                            <label
                              htmlFor="video-motivacion"
                              className="block text-sm font-medium text-neutral-700"
                            >
                              Adjuntase su link
                            </label>
                            <div className="flex mt-1 rounded-md shadow-none">
                              <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md border-neutral-300 bg-neutral-50 text-neutral-500 sm:text-sm">
                                http://
                              </span>
                              <input
                                type="url"
                                name="video-motivacion"
                                id="video-motivacion"
                                className="flex-1 block w-full min-w-0 px-3 py-2 rounded-none rounded-r-md focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
                                placeholder="www.ejemplo.com"
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
                            className="w-4 h-4 rounded focus:ring-gold-500 text-gold-600 border-neutral-300"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="biografia"
                            className="font-medium text-neutral-700"
                          >
                            Biografía/CV
                          </label>
                          <p className="text-neutral-500 sm:col-span-6">
                            Cargue una copia de tu biografía o currículum en
                            formato PDF, .doc, .docx o TXT
                          </p>
                          {/* <p className="text-neutral-500">
                            Envía una copia de su biografía/CV por correo
                            electrónico a la siguiente dirección mail:
                          </p> */}
                          <div className="pt-4 sm:col-span-6">
                            <label
                              htmlFor="cover-photo"
                              className="block text-sm font-medium text-neutral-700"
                            >
                              Sube currículum
                            </label>
                            <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-dashed rounded-md border-neutral-300 sm:col-span-6">
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
                                    htmlFor="file-upload"
                                    className="relative font-medium bg-white rounded-md cursor-pointer text-gold-600 hover:text-gold-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gold-500"
                                  >
                                    <span>Cargue un archivo</span>
                                    <input
                                      id="file-upload"
                                      name="file-upload"
                                      type="file"
                                      className="sr-only"
                                    />
                                  </label>
                                  <p className="pl-1">o arrastrar y soltar</p>
                                </div>
                                <p className="text-xs text-neutral-500">
                                  PDF, .doc, .docx, TXT hasta 10 MB
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* <a
                            className="mt-6"
                            href="mailto:info@academiagalamian.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="flex mt-4 text-base text-gold-600">
                              <MailIcon
                                className="flex-shrink-0 w-6 h-6 text-gold-600"
                                aria-hidden="true"
                              />
                              <span className="ml-3">
                                info@academiagalamian.com
                              </span>
                            </div>
                          </a> */}
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
                            className="font-medium text-neutral-700"
                          >
                            Renta familiar
                          </label>
                          <p className="text-neutral-500">
                            En caso de solicitar una de las becas otorgadas por
                            la Fundación Reina Nilsen.
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
                            className="font-medium text-neutral-700"
                          >
                            Vídeo links
                          </label>
                          <p className="text-neutral-500">
                            Links a los dos vídeos, alojados en una plataforma
                            online.
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
                  <h3 className="text-lg font-medium leading-6 text-neutral-900">
                    Becas
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    Información sobre las becas y reducciones de matrícula.
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
                            className="font-medium text-neutral-700"
                          >
                            Solicito optar a una beca de reducción de matrícula
                            ofrecida por la Fundación Reina Nilsen
                          </label>
                          <p className="text-neutral-500">
                            Se podrán en valor su situación económica familiar y
                            los méritos artísticos expuestos en su audición de
                            acceso; el porcentaje de reducción de matrícula será
                            comunicado personalmente junto al resultado de las
                            audiciones.
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
                            className="font-medium text-neutral-700"
                          >
                            Solicito ser considerado para uno de los Programas
                            de Formación en Prácticas de la Academia
                            Internacional Galamian
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
                  <h3 className="text-lg font-medium leading-6 text-neutral-900">
                    Reconocimiento
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    Antes de presentar el formulario de inscripción, todas las
                    aspirantes deben reconocer lo siguiente.
                  </p>

                  <fieldset className="mt-6">
                    <div className="space-y-4">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="reconocimiento"
                            name="reconocimiento"
                            type="checkbox"
                            className="w-4 h-4 rounded focus:ring-gold-500 text-gold-600 border-neutral-300"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="reconocimiento"
                            className="font-medium text-neutral-700"
                          >
                            Por la presente certifico que la información
                            proporcionada en este formulario es completa,
                            verdadera y correcto a lo mejor de mi conocimiento
                          </label>
                          <div className="mt-3 sm:w-1/4">
                            <label
                              htmlFor="fecha"
                              className="block text-sm font-medium text-neutral-700"
                            >
                              Fecha
                            </label>
                            <div className="mt-1">
                              <input
                                type="date"
                                name="fecha"
                                id="fecha"
                                className="block w-full rounded-md focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-neutral-300"
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
                className="px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-none border-neutral-300 text-neutral-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white border border-transparent rounded-md shadow-none bg-gold-600 hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
