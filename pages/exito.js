import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function Success() {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-full flex flex-col bg-white h-screen w-screen">
        <main className="flex-grow flex flex-col justify-center items-center -mt-40 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <Link href="/" passHref>
              <a className="inline-flex">
                <span className="sr-only">{t('exito:sr')}</span>
                <div>
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
              <p className="text-sm font-semibold text-gold-600 uppercase tracking-wide">
                {t('exito:sent')}
              </p>
              <h3 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                {t('exito:thanks')}
              </h3>
              <p className="mt-4 text-base text-gray-500 max-w-lg">
                {t('exito:received')}
              </p>
              <div className="mt-6">
                <Link href="/" passHref>
                  <a className="text-base font-medium text-gold-600 hover:text-gold-500 transition duration-200 ease-in-out">
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
