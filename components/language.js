import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import useTranslation from 'next-translate/useTranslation';

export default function Language() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { t } = useTranslation();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <span className="relative z-0 inline-flex rounded-md shadow-none">
      <button
        type="button"
        className="relative inline-flex items-center px-4 py-2 text-sm tracking-tight transition duration-300 ease-in-out border border-l-0 text-neutral-500 rounded-l-md border-gold-500 bg-t hover:text-neutral-900 focus:z-10 focus:outline-none border-y-0 focus:ring-0"
      >
        <Link
          activeClassName={locale === 'en'}
          href={asPath}
          passHref
          locale="en"
        >
          <p>ENG</p>
        </Link>
      </button>

      <button
        type="button"
        className="relative inline-flex items-center px-4 py-2 -ml-px text-sm tracking-tight transition duration-300 ease-in-out border border-r-0 text-neutral-500 rounded-r-md border-gold-500 bg-t hover:text-neutral-900 focus:z-10 focus:outline-none focus:ring-0 border-y-0"
      >
        <Link
          activeClassName={locale === 'es'}
          href={asPath}
          passHref
          locale="es"
        >
          <p>ESP</p>
        </Link>
      </button>
    </span>
  );
}
