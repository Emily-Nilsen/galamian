import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LanguageSwitcher = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();

  return (
    //
    <div className="relative flex items-center tracking-wider">
      <div className="container flex items-center justify-between w-1/5 pl-0 text-neutral-500 ">
        <button className="px-2 transition duration-200 ease-in-out hover:text-neutral-900">
          <Link activeClassName={locale === 'es'} href={asPath} locale="es">
            ES
          </Link>
        </button>

        <p className="text-gold-600">|</p>
        <button className="px-2 transition duration-200 ease-in-out hover:text-neutral-900">
          <Link activeClassName={locale === 'en'} href={asPath} locale="en">
            EN
          </Link>
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
