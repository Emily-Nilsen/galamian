import Image from 'next/image';
import { MailIcon } from '@heroicons/react/outline';

export default function Formulario() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
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
          <p className="max-w-xl mt-5 mx-auto text-lg text-gray-500">
            Formulario de Inscripción en las audiciones de acceso para el curso{' '}
            {new Date().getFullYear()}/{new Date().getFullYear() + 1}. Fecha
            límite para su presentación:{' '}
            <span className="font-bold">
              30 de junio de {new Date().getFullYear()}
            </span>{' '}
            (incluido).
          </p>
        </div>
      </div>
      <form className="space-y-8 divide-y divide-gray-200 border-t-gray-200 border-t">
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Datos Personales
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Use una dirección permanente donde pueda recibir correo.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellidos
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {/* Identification documents */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="tipo-de-documento"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tipo de documento de identidad
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="tipo-de-documento"
                    id="tipo-de-documento"
                    autoComplete="given-name"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="numero-de-documento"
                  className="block text-sm font-medium text-gray-700"
                >
                  Número de documento
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="numero-de-documento"
                    id="numero-de-documento"
                    autoComplete="family-name"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="date-of-birth"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fecha de nacimiento
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="date-of-birth"
                    id="date-of-birth"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="dd/mm/aaaa"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="usted@ejemplo.com"
                  />
                </div>
              </div>

              {/* Country of birth */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="pais-de-nacimiento"
                  className="block text-sm font-medium text-gray-700"
                >
                  País de nacimiento
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="pais-de-nacimiento"
                    id="pais-de-nacimiento"
                    autoComplete="given-name"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="pais-de-residencia-actual"
                  className="block text-sm font-medium text-gray-700"
                >
                  País de residencia actual
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="pais-de-residencia-actual"
                    id="pais-de-residencia-actual"
                    autoComplete="family-name"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {/* <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <div className="mt-1">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div> */}

              <div className="sm:col-span-6">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Dirección
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ciudad
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  Provincia
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  Código postal
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-gray-700"
                >
                  Télefono móvil
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="telefono"
                    id="telefono"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Datos del/la responsable */}
          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Datos del/la Responsable
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Sólo menores de edad.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellidos
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {/* Cargo */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="cargo-de-responsabilidad"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cargo de responsabilidad
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="cargo-de-responsabilidad"
                    id="cargo-de-responsabilidad"
                    autoComplete="given-name"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Madre, Padre, Tutoría..."
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="movil"
                  className="block text-sm font-medium text-gray-700"
                >
                  Teléfono móvil
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="movil"
                    id="movil"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="shadow-none focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="usted@ejemplo.com"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Estudia
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Información sobre su estudio preferido de elección y modo de
                estudio.
              </p>
            </div>
            <div className="mt-6">
              <fieldset className="mt-6">
                <div>
                  <legend className="text-base font-medium text-gray-900">
                    Programa al que audita
                  </legend>
                  <p className="text-sm text-gray-500">
                    Seleccione un estudio preferido de su elección.
                  </p>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="estudio-violin"
                      name="programa"
                      type="radio"
                      className="focus:ring-gold-500 h-4 w-4 text-gold-600 border-gray-300"
                    />
                    <label
                      htmlFor="estudio-violin"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Estudio de Violín/Viola
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="estudio-violoncelo"
                      name="programa"
                      type="radio"
                      className="focus:ring-gold-500 h-4 w-4 text-gold-600 border-gray-300"
                    />
                    <label
                      htmlFor="estudio-violoncelo"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Estudio de Violoncelo
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="estudio-piano"
                      name="programa"
                      type="radio"
                      className="focus:ring-gold-500 h-4 w-4 text-gold-600 border-gray-300"
                    />
                    <label
                      htmlFor="estudio-piano"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Estudio de Piano
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="estudio-voz"
                      name="programa"
                      type="radio"
                      className="focus:ring-gold-500 h-4 w-4 text-gold-600 border-gray-300"
                    />
                    <label
                      htmlFor="estudio-voz"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Estudio de Voz
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset className="mt-6">
                <div>
                  <legend className="text-base font-medium text-gray-900">
                    Modalidad
                  </legend>
                  <p className="text-sm text-gray-500">
                    Seleccione un modo de estudio.
                  </p>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="modalidad-a"
                      name="modalidad"
                      type="radio"
                      className="focus:ring-gold-500 h-4 w-4 text-gold-600 border-gray-300"
                    />
                    <label
                      htmlFor="modalidad-a"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      A
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="modalidad-b"
                      name="modalidad"
                      type="radio"
                      className="focus:ring-gold-500 h-4 w-4 text-gold-600 border-gray-300"
                    />
                    <label
                      htmlFor="modalidad-b"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      B
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="modalidad-c"
                      name="modalidad"
                      type="radio"
                      className="focus:ring-gold-500 h-4 w-4 text-gold-600 border-gray-300"
                    />
                    <label
                      htmlFor="modalidad-c"
                      className="ml-3 block text-sm font-medium text-gray-700"
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
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Vídeo
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Debido a la circunstancias socio-sanitarias que vive España,
                  la Academia Internacional Galamian convoca sus audiciones de
                  acceso al curso {new Date().getFullYear()}/
                  {new Date().getFullYear() + 1} de manera digital.
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  Para participar en ellas, se requerirá el envío de un vídeo en
                  el que se evidencie al aspirante interpretando dos obras o
                  movimientos de estilos contrastantes, de libre elección, el
                  cual deberá estar alojado en alguna plataforma digital tipo
                  YouTube o Vímeo.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="link-1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Link 1
                  </label>
                  <div className="mt-1 flex rounded-md shadow-none">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      http://
                    </span>
                    <input
                      type="text"
                      name="link-1"
                      id="link-1"
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-gray-300"
                      placeholder="www.ejemplo.com"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="link-2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Link 2
                  </label>
                  <div className="mt-1 flex rounded-md shadow-none">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      http://
                    </span>
                    <input
                      type="text"
                      name="link-2"
                      id="link-2"
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-gray-300"
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
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Documentos
                </h3>
                <p className="mt-1 text-sm text-gray-500">
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
                          className="focus:ring-gold-500 h-4 w-4 text-gold-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="formulario"
                          className="font-medium text-gray-700"
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
                          className="focus:ring-gold-500 h-4 w-4 text-gold-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="video"
                          className="font-medium text-gray-700"
                        >
                          Vídeo de motivación
                        </label>
                        <p className="text-gray-500">
                          El vídeo de motivación deberá ser un monólogo de corta
                          duración en el que el o la aspirante exponga los
                          motivos por los que le gustaría estudiar en la
                          Academia Internacional Galamian. Este vídeo también
                          deberá de alojarse en una plataforma tipo YouTube o
                          Vímeo.
                        </p>
                        {/* Video de motivación */}
                        <div className="sm:col-span-4 mt-3">
                          <label
                            htmlFor="video-motivacion"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Adjuntase su link
                          </label>
                          <div className="mt-1 flex rounded-md shadow-none">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                              http://
                            </span>
                            <input
                              type="text"
                              name="video-motivacion"
                              id="video-motivacion"
                              className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-gold-500 focus:border-gold-500 sm:text-sm border-gray-300"
                              placeholder="www.ejemplo.com"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="biografia"
                          name="biografia"
                          type="checkbox"
                          className="focus:ring-gold-500 h-4 w-4 text-gold-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="biografia"
                          className="font-medium text-gray-700"
                        >
                          Biografía/CV
                        </label>
                        <p className="text-gray-500">
                          Envía una copia de su biografía/CV por correo
                          electrónico a la siguiente dirección mail:
                        </p>
                        <a
                          className="mt-6"
                          href="mailto:info@academiagalamian.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="flex text-base text-gold-600 mt-4">
                            <MailIcon
                              className="flex-shrink-0 w-6 h-6 text-gold-600"
                              aria-hidden="true"
                            />
                            <span className="ml-3">
                              info@academiagalamian.com
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="renta"
                          name="renta"
                          type="checkbox"
                          className="focus:ring-gold-500 h-4 w-4 text-gold-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="renta"
                          className="font-medium text-gray-700"
                        >
                          Renta familiar
                        </label>
                        <p className="text-gray-500">
                          En caso de solicitar una de las becas otorgadas por la
                          Fundación Reina Nilsen.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="video-links"
                          name="video-links"
                          type="checkbox"
                          className="focus:ring-gold-500 h-4 w-4 text-gold-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="video-links"
                          className="font-medium text-gray-700"
                        >
                          Vídeo links
                        </label>
                        <p className="text-gray-500">
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
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Becas
                </h3>
                <p className="mt-1 text-sm text-gray-500">
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
                          className="focus:ring-gold-500 h-4 w-4 text-gold-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="renta"
                          className="font-medium text-gray-700"
                        >
                          Solicito optar a una beca de reducción de matrícula
                          ofrecida por la Fundación Reina Nilsen
                        </label>
                        <p className="text-gray-500">
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
                          className="focus:ring-gold-500 h-4 w-4 text-gold-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="video-links"
                          className="font-medium text-gray-700"
                        >
                          Solicito ser considerado para uno de los Programas de
                          Formación en Prácticas de la Academia Internacional
                          Galamian
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
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Reconocimiento
                </h3>
                <p className="mt-1 text-sm text-gray-500">
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
                          className="focus:ring-gold-500 h-4 w-4 text-gold-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="reconocimiento"
                          className="font-medium text-gray-700"
                        >
                          Por la presente certifico que la información
                          proporcionada en este formulario es completa,
                          verdadera y correcto a lo mejor de mi conocimiento
                        </label>
                        <div className="sm:w-1/4 mt-3">
                          <label
                            htmlFor="fecha"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Fecha
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="fecha"
                              id="fecha"
                              className="focus:ring-gold-500 focus:border-gold-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-none text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-none text-sm font-medium rounded-md text-white bg-gold-600 hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
