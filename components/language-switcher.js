import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const LanguageSwitcher = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();

  const [showMe, setShowMe] = useState(true);
  function toggle() {
    setShowMe(!showMe);
  }

  return (
    //
    <div className="relative flex items-center tracking-wider">
      <div className="container flex items-center justify-between w-1/5 pl-0 text-neutral-500 ">
        <button
          onClick={toggle}
          className="px-2 transition duration-200 ease-in-out hover:text-neutral-900"
        >
          {showMe ? (
            <Link activeClassName={locale === 'es'} href={asPath} locale="es">
              English
            </Link>
          ) : (
            <Link activeClassName={locale === 'en'} href={asPath} locale="en">
              español
            </Link>
          )}
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
