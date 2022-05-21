import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function Success() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col w-screen h-screen min-h-full bg-white">
        <main className="flex flex-col items-center justify-center flex-grow w-full px-4 mx-auto -mt-40 max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-center flex-shrink-0">
            <Link href="/" passHref>
              <a className="inline-flex">
                <span className="sr-only">{t('exito:sr')}</span>
                <div className="transition duration-300 ease-in hover:scale-105">
                  <Image
                    src="/static/galamian-gold-dark.svg"
                    alt="Galamian logo"
                    width={60}
                    height={60}
                    layout="fixed"
                  ></Image>
                </div>
              </a>
            </Link>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold tracking-wide uppercase text-gold-600">
                {t('exito:sent')}
              </p>
              <h3 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                {t('exito:thanks')}
              </h3>
              <p className="max-w-lg mt-4 text-base text-gray-600">
                {t('exito:received')}
              </p>
              <div className="mt-6">
                <Link href="/" passHref>
                  <a className="text-lg font-semibold tracking-tight transition duration-300 ease-in-out text-gold-600 hover:text-neutral-800">
                    {t('common:button_back')}
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
