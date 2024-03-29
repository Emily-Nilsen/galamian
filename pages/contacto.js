import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import Map from '../components/map';
import useTranslation from 'next-translate/useTranslation';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  MailIcon,
  MenuIcon,
  PhoneIcon,
  XIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';

export default function Contacto() {
  const { t } = useTranslation();
  return (
    <Layout
      title={t('layout:contacto_title')}
      description={t('layout:contacto_description')}
      keywords={t('layout:contacto_keywords')}
      className="bg-neutral-50"
    >
      <main className="overflow-hidden">
        {/* Header */}
        <div className="bg-neutral-50">
          <div className="py-24 lg:py-32">
            <div className="relative z-10 pl-4 pr-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                {t('common:contact_title_1')}
                <span className="font-bold text-gold-600">
                  {t('common:contact_title_2')}
                </span>
              </h1>
              <p className="max-w-3xl mt-6 text-xl text-neutral-600">
                {t('common:contact_subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <section
          className="relative bg-neutral-50"
          aria-labelledby="contact-heading"
        >
          <div
            className="absolute w-full h-1/2 bg-neutral-50"
            aria-hidden="true"
          />
          {/* Decorative dot pattern */}
          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <svg
              className="absolute top-0 right-0 z-0 transform translate-x-1/2 -translate-y-16 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={2}
                    height={4}
                    className="text-neutral-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>
          </div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative bg-white">
              <h2 id="contact-heading" className="sr-only">
                {t('common:contact_sr')}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                <div className="relative px-6 py-10 overflow-hidden bg-gradient-to-b from-gold-400 to-gold-600 sm:px-10 xl:p-12">
                  {/* Decorative angle backgrounds */}
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {t('common:contact_info_title')}
                  </h3>
                  <p className="max-w-3xl mt-6 text-base text-neutral-50">
                    {t('common:contact_info_subtitle')}
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Address</span>
                    </dt>
                    <Link href="/contacto/#googleMap" passHref>
                      <dd className="flex text-base transition-all duration-300 ease-in-out cursor-pointer text-neutral-50 hover:text-white hover:underline">
                        <LocationMarkerIcon
                          className="flex-shrink-0 w-6 h-6 text-cream-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3">
                          <span className="block font-semibold">
                            {t('common:address_1')}
                          </span>

                          <span className="block">{t('common:address_2')}</span>
                          <span className="block">{t('common:address_3')}</span>
                        </span>
                      </dd>
                    </Link>
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <a
                      href="tel:+34699067452"
                      className="hover:text-white hover:underline"
                    >
                      <dd className="flex text-base text-neutral-50">
                        <PhoneIcon
                          className="flex-shrink-0 w-6 h-6 text-cream-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3">+34 699 06 74 52</span>
                      </dd>
                    </a>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <a
                      className="hover:text-white hover:underline"
                      href="mailto:secretaria.academiagalamian@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <dd className="flex items-center text-base text-neutral-50">
                        <MailIcon
                          className="flex-shrink-0 w-6 h-6 text-cream-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 overflow-visible tracking-tight lg:leading-5 xl:leading-normal">
                          secretaria.academiagalamian
                          <span className="lg:block xl:inline">@gmail.com</span>
                        </span>
                      </dd>
                    </a>
                  </dl>
                  <ul role="list" className="flex mt-8 space-x-12">
                    <li>
                      <a
                        className="transition duration-300 ease-in-out text-cream-500 hover:text-cream-400"
                        href="https://www.facebook.com/academiagalamian"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Facebook</span>
                        <svg
                          className="w-7 h-7"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="transition duration-300 ease-in-out text-cream-500 hover:text-cream-400"
                        href="https://twitter.com/AIGalamian"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Instagram</span>
                        <svg
                          className="w-7 h-7"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="transition duration-300 ease-in-out text-cream-500 hover:text-cream-400"
                        href="https://www.instagram.com/academia.galamian/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="w-7 h-7"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact form */}
                <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-xl font-bold tracking-tight text-neutral-800">
                    {t('common:contactform_title')}
                  </h3>
                  <form
                    action="/exito"
                    // subject="Envío de formulario para la Academia Internacional Galamian"
                    name="Contacta con la Academia Galamian"
                    data-netlify="true"
                    method="POST"
                    className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="Contacta con la Academia Galamian"
                    />
                    <input
                      type="hidden"
                      name="subject"
                      value="Envío de formulario para la Academia Internacional Galamian"
                    />
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-base font-medium tracking-tight text-neutral-900"
                      >
                        {t('common:contactform_name')}
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          required
                          autoComplete="given-name"
                          className="block w-full px-4 py-3 rounded-none text-neutral-900 focus:ring-gold-500 focus:border-gold-500 border-neutral-200"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-base font-medium tracking-tight text-neutral-900"
                      >
                        {t('common:contactform_surname')}
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          required
                          autoComplete="family-name"
                          className="block w-full px-4 py-3 rounded-none text-neutral-900 focus:ring-gold-500 focus:border-gold-500 border-neutral-200"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-base font-medium tracking-tight text-neutral-900"
                      >
                        {t('common:contactform_email')}
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="block w-full px-4 py-3 rounded-none text-neutral-900 focus:ring-gold-500 focus:border-gold-500 border-neutral-200"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="phone"
                          className="block text-base font-medium tracking-tight text-neutral-900"
                        >
                          {t('common:contactform_phone')}
                        </label>
                        <span
                          id="phone-optional"
                          className="text-base text-neutral-500"
                        >
                          {t('common:contactform_optional')}
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="block w-full px-4 py-3 rounded-none text-neutral-900 focus:ring-gold-500 focus:border-gold-500 border-neutral-200"
                          aria-describedby="phone-optional"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-base font-medium tracking-tight text-neutral-900"
                      >
                        {t('common:contactform_subject')}
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          required
                          className="block w-full px-4 py-3 rounded-none text-neutral-900 focus:ring-gold-500 focus:border-gold-500 border-neutral-200"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="block text-base font-medium tracking-tight text-neutral-900"
                        >
                          {t('common:contactform_message')}
                        </label>
                        <span
                          id="message-max"
                          className="text-base text-neutral-500"
                        >
                          {t('common:contactform_max')}
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          maxLength="500"
                          className="block w-full px-4 py-3 border rounded-none text-neutral-900 focus:ring-gold-500 focus:border-gold-500 border-neutral-200"
                          aria-describedby="message-max"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    {/* Agree */}

                    <fieldset className="w-full mt-6 sm:col-span-2">
                      <div className="space-y-8">
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="samtykke"
                              name="samtykke"
                              type="checkbox"
                              required
                              className="w-4 h-4 rounded border-stone-300 text-gold-600 focus:ring-gold-500"
                            />
                          </div>
                          <div className="ml-3 -mt-1 text-base ">
                            <label
                              htmlFor="samtykke"
                              className="font-medium tracking-normal text-stone-600"
                            >
                              Al seleccionar esto, acepta nuestra{' '}
                              <Link href="/politica-de-privacidad">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-gold-600"
                                >
                                  Política&nbsp;de&nbsp;Privacidad
                                </a>
                              </Link>
                              .
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full py-2.5 px-4 mt-2 text-base font-semibold tracking-tight text-white transition duration-300 ease-in-out border border-transparent rounded-none bg-gold-500 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 sm:w-auto"
                      >
                        {t('common:contactform_send')}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact grid */}
        <section id="googleMap" aria-labelledby="offices-heading">
          <div className="px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
            <h2
              id="offices-heading"
              className="text-3xl font-semibold tracking-tight text-neutral-900"
            >
              {t('common:map_title')}
            </h2>
            <p className="max-w-3xl text-base text-neutral-600">
              <span className="ml-3">
                <span className="block font-semibold">
                  {t('common:address_1')}
                </span>

                <span className="block">{t('common:address_2')}</span>
                <span className="block">{t('common:address_3')}</span>
              </span>
            </p>
            <div className="mt-10">
              {/* Google Map */}
              <div className="relative h-0 overflow-hidden pb-[85%] shadow-none">
                <Map />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
