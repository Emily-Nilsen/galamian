import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function SignUp() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-neutral-50">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="relative object-cover w-full h-72 lg:absolute lg:h-full">
            <Image
              src="/static/joag-img-2.webp"
              alt="JOAG"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </div>
      </div>
      <div className="relative px-4 py-16 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {t('joag:request_title')}
            </h2>
            <p className="mt-4 text-lg text-neutral-500 sm:mt-3">
              {t('joag:request_subtitle')}
            </p>
            <form
              action="/exito"
              subject="Envío de formulario para obtener más información sobre la JOAG"
              name="Más información sobre la JOAG"
              data-netlify="true"
              method="POST"
              className="grid grid-cols-1 mt-9 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <input
                type="hidden"
                name="form-name"
                value="Más información sobre la JOAG"
              />
              <input
                type="hidden"
                name="subject"
                value="Envío de formulario para obtener más información sobre la JOAG"
              />
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-neutral-700"
                >
                  {t('joag:first_name')}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    required
                    autoComplete="given-name"
                    className="block w-full rounded-none shadow-none border-neutral-300 sm:text-sm focus:ring-gold-500 focus:border-gold-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-neutral-700"
                >
                  {t('joag:last_name')}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    required
                    autoComplete="family-name"
                    className="block w-full rounded-none shadow-none border-neutral-300 sm:text-sm focus:ring-gold-500 focus:border-gold-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
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
                    required
                    autoComplete="email"
                    className="block w-full rounded-none shadow-none border-neutral-300 sm:text-sm focus:ring-gold-500 focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    {t('joag:phone')}
                  </label>
                  <span
                    id="phone-description"
                    className="text-sm text-neutral-500"
                  >
                    {t('joag:optional')}
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    aria-describedby="phone-description"
                    className="block w-full rounded-none shadow-none border-neutral-300 sm:text-sm focus:ring-gold-500 focus:border-gold-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="how-can-we-help"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    {t('joag:message')}
                  </label>
                  <span
                    id="how-can-we-help-description"
                    className="text-sm text-neutral-500"
                  >
                    {t('joag:max')}
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="how-can-we-help"
                    name="how-can-we-help"
                    aria-describedby="how-can-we-help-description"
                    rows={4}
                    required
                    maxLength="500"
                    className="block w-full border rounded-none shadow-none border-neutral-300 sm:text-sm focus:ring-gold-500 focus:border-gold-500"
                    defaultValue={''}
                  />
                </div>
              </div>
              <fieldset className="sm:col-span-2">
                <legend className="block text-sm font-medium text-neutral-700">
                  {t('joag:how_many')}
                </legend>
                <div className="grid grid-cols-1 mt-4 gap-y-4">
                  <div className="flex items-center">
                    <input
                      id="opcion-una-clase"
                      name="opcion"
                      defaultValue="una-clase"
                      type="radio"
                      className="w-4 h-4 text-gold-600 border-neutral-300 focus:ring-gold-500"
                    />
                    <label htmlFor="opcion-una-clase" className="ml-3">
                      <span className="block text-sm tracking-tight text-neutral-700">
                        {t('joag:one_class')}
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="opcion-dos-clases"
                      name="opcion"
                      defaultValue="dos-clases"
                      type="radio"
                      className="w-4 h-4 text-gold-600 border-neutral-300 focus:ring-gold-500"
                    />
                    <label htmlFor="opcion-dos-clases" className="ml-3">
                      <span className="block text-sm tracking-tight text-neutral-700">
                        {t('joag:two_classes')}
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="opcion-no-seguro"
                      name="opcion"
                      defaultValue="no-seguro"
                      type="radio"
                      className="w-4 h-4 text-gold-600 border-neutral-300 focus:ring-gold-500"
                    />
                    <label htmlFor="opcion-no-seguro" className="ml-3">
                      <span className="block text-sm tracking-tight text-neutral-700">
                        {t('joag:not_sure')}
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>

              <div className="text-right sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white transition duration-300 ease-in-out border border-transparent rounded-none shadow-none bg-gold-600 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
                >
                  {t('joag:send_info')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
