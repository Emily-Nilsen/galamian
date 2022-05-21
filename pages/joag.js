import Image from 'next/image';
import Link from 'next/link';
import RegistrationFee from '../components/joag/registration-fee';
import Content from '../components/joag/content';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';

export default function Joag() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              ></nav>
            </div>

            <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-lg font-medium tracking-tight text-neutral-900 sm:text-xl">
                  <span className="block xl:inline">{t('joag:title_1')}</span>{' '}
                  <span className="block pt-2 text-4xl font-bold sm:text-5xl text-gold-600 xl:inline">
                    {t('joag:title_2')}
                  </span>
                  <span className="block pt-2 xl:inline">
                    {t('joag:title_3')}
                  </span>{' '}
                </h1>
                <p className="mt-3 text-base text-neutral-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {t('joag:subtitle_part_1')}{' '}
                  <Link href="#" passHref>
                    <a className="font-semibold tracking-tight transition duration-300 ease-in-out text-gold-500 hover:text-neutral-900">
                      {t('joag:subtitle_part_2')}{' '}
                    </a>
                  </Link>
                  {t('joag:subtitle_part_3')}
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full">
            <Image
              src="/static/joag-img-1.webp"
              alt="JOAG"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
          </div>
        </div>
      </div>
      <RegistrationFee />
      <Content />
    </section>
  );
}
