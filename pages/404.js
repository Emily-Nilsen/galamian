import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

export default function PageNotFound() {
  const { t } = useTranslation();

  return (
    <main className="h-screen bg-top bg-cover bg-notfound sm:bg-top">
      <div className="px-4 py-16 mx-auto text-center max-w-7xl sm:px-6 sm:py-24 lg:px-8 lg:py-48">
        <p className="text-sm font-semibold tracking-wide text-white text-opacity-50 uppercase">
          404 error
        </p>
        <h3 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {t('common:notfound_title')}
        </h3>
        <p className="mt-2 text-lg font-normal text-white text-opacity-50">
          {t('common:notfound_text')}
        </p>
        <div className="mt-6">
          <Link href="/" passHref>
            <a className="inline-flex items-center px-4 py-2 text-base font-medium tracking-tight text-black text-opacity-75 transition duration-300 ease-in-out bg-white bg-opacity-75 border border-transparent rounded-none sm:bg-opacity-25 sm:hover:bg-opacity-50">
              {t('common:button_back')}
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
